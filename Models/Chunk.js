import mongoose from "mongoose";

const ChunkSchema = new mongoose.Schema({
  text: { type: String, required: true },
  embedding: { type: [Number], required: true },
});

export const Chunk = mongoose.model("Chunk", ChunkSchema);
