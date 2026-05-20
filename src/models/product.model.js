import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: false,
    versionKey: false,
  },
);

export default model("Product", productSchema);
