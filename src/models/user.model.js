import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },

    country: { type: String, required: true },
  },
  {
    timestamps: false,

    versionKey: false, // ← supprime __v
  },
);

export default model("User", userSchema);
