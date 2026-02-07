import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    size: {
      type: String,
      required: true,
    },
    perUnit: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Curtains",
        "Sofa Cover",
        "Bedsheet",
        "Pillow Cover",
        "Tracks",
        "Accessories",
      ],
      required: true,   // optional → remove if not mandatory
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
