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
    console.error("❌ Error creating embedding:", err.message);
  }
};

const InsertEmbedding = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const chunks = [];

  // Company Info
  const company = KnowledgeBase.company;
  chunks.push(`Company Name: ${company.name}`);
  chunks.push(`Customer Care: ${company.customerCareNumber}`);
  chunks.push(`Trust Information: ${company.trustInfo}`);
  chunks.push(`Website: ${company.website}`);
  chunks.push(`Pitch: ${company.pitch}`);
  chunks.push(`Class Timing Info: ${company.time}`);
  chunks.push(`Discount Info: ${company.discount}`);

  // Courses
  KnowledgeBase.courses.forEach((course) => {
    chunks.push(`Course Name: ${course.name}`);

    // Description if available
    if (course.description) {
      chunks.push(`Course Description: ${course.description}`);
    }

    // Age Groups
    if (course.ageGroups) {
      for (const [ageRange, detail] of Object.entries(course.ageGroups)) {
        chunks.push(
          `Age Group ${ageRange}: Focus Areas - ${detail.focus.join(
            ", "
          )}, Remarks - ${detail.remarks || "N/A"}`
        );
      }
    }

    // Modules
    if (course.modules) {
      course.modules.forEach((module) => {
        chunks.push(
          `Module: ${module.name}, Topics: ${module.topics.join(", ")}`
        );
        if (module.painPoints) {
          chunks.push(
            `Pain Points in ${module.name}: ${module.painPoints.join(", ")}`
          );
        }
      });
    }

    // Methodology
    if (course.methodology) {
      const { framework, sessionFlow, tools } = course.methodology;
      chunks.push(
        `Course Methodology: Framework - ${framework}, Session Flow - ${sessionFlow}, Tools - ${tools.join(
          ", "
        )}`
      );
    }

    // Selling Points
    if (course.sellingPoints) {
      chunks.push(`Selling Points: ${course.sellingPoints.join(", ")}`);
    }

    // Sales Pitch
    if (course.salesPitch) {
      const { script, sampleQuestion, outcome } = course.salesPitch;
      chunks.push(
        `Sales Pitch Script: ${script}\nSample Question: ${sampleQuestion}\nOutcome: ${outcome}`
      );
    }
  });

  // Process Embedding & Save to DB
  for (const text of chunks) {
    try {
      const embedding = await createEmbedding(text);
      if (embedding) {
        await Chunk.create({ text, embedding });
        console.log("✅ Embedding saved for chunk:", text.slice(0, 60));
      }
    } catch (error) {
      console.error("❌ Failed to process chunk:", text.slice(0, 60));
    }
  }

  mongoose.connection.close();
  console.log("🔚 All chunks embedded and DB connection closed.");
};

InsertEmbedding();
