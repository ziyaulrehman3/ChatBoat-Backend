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
    console.error("Error in Embedding:", err.message);
  }
};

const InsertEmbedding = async () => {
  mongoose.connect(process.env.MONGO_URI);
  const chrunks = [];

  chrunks.push(`Company Name: ${KnowledgeBase[0].company.name}`);
  chrunks.push(`Custumer Care: ${KnowledgeBase[0].company.customerCareNumber}`);
  chrunks.push(`Trust Information: ${KnowledgeBase[0].company.trustInfo}`);

  KnowledgeBase[0].courses.forEach((course) => {
    chrunks.push(
      `Course Name: ${course.name}
    Course Duration: ${course.duration}
    Course Fees: ${Object.entries(course.fees)
      .map(([k, v]) => `${k}:${v}`)
      .join(",")}
    Discription: ${course.description}`
    );
  });

  chrunks.push(`class Timing: ${KnowledgeBase[0].time}`);
  chrunks.push(`Discount: ${KnowledgeBase[0].discount}`);

  for (const text of chrunks) {
    const embedding = await createEmbedding(text);
    Chunk.create({ text, embedding });
    console.log("Embedding Save in DB");
  }
};

InsertEmbedding();
