import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import axios from "axios";

import { KnowledgeBase } from "./KnowledgeBase.js";
import { Chunk } from "./Models/Chunk.js";

const createEmbedding = async (text) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/embeddings",
      {
        model: "text-embedding-3-small",
        input: text,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.data[0].embedding;
  } catch (err) {
    console.error("Error creating embedding:", err.message);
    return null;
  }
};

const insertEmbeddings = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const entries = KnowledgeBase.entries;

  for (const entry of entries) {
    const parts = [];

    if (entry.course) parts.push(`Course: ${entry.course}`);
    if (entry.module) parts.push(`Module: ${entry.module}`);
    if (entry.ageGroup) parts.push(`Age Group: ${entry.ageGroup}`);
    if (entry.description) parts.push(`Description: ${entry.description}`);
    if (entry.focusAreas)
      parts.push(`Focus Areas: ${entry.focusAreas.join(", ")}`);
    if (entry.remarks) parts.push(`Remarks: ${entry.remarks}`);
    if (entry.topics) parts.push(`Topics: ${entry.topics.join(", ")}`);
    if (entry.framework) parts.push(`Framework: ${entry.framework}`);
    if (entry.sessionStructure)
      parts.push(`Session Structure: ${entry.sessionStructure}`);
    if (entry.tools) parts.push(`Tools: ${entry.tools.join(", ")}`);
    if (entry.points) parts.push(`Selling Points: ${entry.points.join(", ")}`);
    if (entry.script) parts.push(`Sales Script: ${entry.script}`);
    if (entry.question) parts.push(`Sample Question: ${entry.question}`);
    if (entry.outcome) parts.push(`Outcome: ${entry.outcome}`);

    const text = parts.join("\n");
    const embedding = await createEmbedding(text);
    if (embedding) {
      await Chunk.create({ text, embedding });
      console.log("✅ Embedded and stored:", text.slice(0, 60));
    }
  }

  mongoose.connection.close();
  console.log("🔚 All chunks embedded and DB connection closed.");
};

insertEmbeddings();
