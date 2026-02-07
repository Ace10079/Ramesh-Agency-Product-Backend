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
        "Bath Mats",
        "Bed Cover",
        "Bed Protector",
        "Bedsheets",
        "BedSpreads",
        "Blanket",
        "Blinds",
        "Carpets",
        "Cotton Towels",
        "Curtains",
        "Cushion Cover",
        "Deewan Set",
        "Dohar",
        "Door Mats",
        "Fabric",
        "Kerchief",
        "Lungi",
        "Mosquito net",
        "Napkin",
        "Pillows",
        "Pillow Covers",
        "Comforters",
        "Sofa back",
        "Stitching",
        "Table Cloth",
        "Towels",
        "Tracks",
        "Accessories",
        "Vesty",
        "Shawls",
      ],
      required: true,   // optional → remove if not mandatory
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
