import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

import cors from "cors";

import { OpenAI } from "openai";
import { getReleventChunks } from "./getReleventChunks.js";

const app = express();
const PORT = 3001;
app.use(cors());

// ✅ Home route
app.get("/", (req, res) => {
  res.send("Hello from ChatBot");
});

// ✅ Query route
app.get("/query", async (req, res) => {
  const userQuestion = req.query.query;
  console.log(userQuestion);

  try {
    const similarChunks = await getReleventChunks(userQuestion);
    const context = similarChunks.join("\n");
    console.log(context);

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant. Answer only based on the knowledge base provided.when you have not proviede information in knowledge based so do not say 'no inform proviede in knowledge say anything like i can not answer it right now'",
          },
          {
            role: "system",
            content: `Knowledge Base: ${context}`,
          },
          {
            role: "user",
            content: userQuestion, // e.g. "What are the available courses?"
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const answer = response.data.choices[0].message.content;
    console.log(answer);
    res.json({ response: answer });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ response: "Unable to answer the question." });
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
