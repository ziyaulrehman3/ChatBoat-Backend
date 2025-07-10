import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import axios from "axios";
import { Chunk } from "./Models/Chunk.js";

// Utility: Cosine similarity between two vectors
const cosineSimilarity = (a, b) => {
  const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const normA = Math.sqrt(a.reduce((sum, val) => sum + val ** 2, 0));
  const normB = Math.sqrt(b.reduce((sum, val) => sum + val ** 2, 0));
  return dot / (normA * normB);
};

// Main Function: Get top K relevant text chunks from DB based on query
export const getRelevantChunks = async (query, topK = 10) => {
  try {
    // Step 1: Get embedding for the input query
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

    // Step 2: Ensure MongoDB is connected
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI);
    }

    // Step 3: Fetch all stored chunks from MongoDB
    const chunks = await Chunk.find();

    // Step 4: Score each chunk based on cosine similarity
    const scoredChunks = chunks.map((chunk) => ({
      text: chunk.text,
      score: cosineSimilarity(embeddedQuery, chunk.embedding),
    }));

    // Step 5: Return top K highest scoring chunks
    const topChunks = scoredChunks
      .sort((a, b) => b.score - a.score)
      .slice(0, topK)
      .map((item) => item.text);

    console.log(topChunks);

    return topChunks;
  } catch (error) {
    console.error("❌ Error fetching relevant chunks:", error.message);
    return [];
  }
};
