import { Schema, model } from "mongoose";

const characterSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    rarity: { type: Number, required: true },
  },
  {
    timestamps: false,
    versionKey: false,
  },
);

export default model("Character", characterSchema);
