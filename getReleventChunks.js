import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import axios from "axios";
import { Chunk } from "./Models/Chunk.js";

const cosineSimilarity = (a, b) => {
  const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const normA = Math.sqrt(a.reduce((sum, val) => sum + val ** 2, 0));
  const normB = Math.sqrt(b.reduce((sum, val) => sum + val ** 2, 0));
  return dot / (normA * normB);
};

export const getReleventChunks = async (query, topK = 5) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/embeddings",
      {
        model: "text-embedding-3-small",
        input: query,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const embeddedQuery = response.data.data[0].embedding;

    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI);
    }

    const chunks = await Chunk.find();

    const scoredChunks = chunks.map((chunk) => ({
      text: chunk.text,
      score: cosineSimilarity(embeddedQuery, chunk.embedding),
    }));

    return scoredChunks
      .sort((a, b) => b.score - a.score)
      .slice(0, topK)
      .map((item) => item.text);
  } catch (err) {
    console.error("❌ Error getting relevant chunks:", err.message);
    return [];
  }
};
