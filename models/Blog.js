import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, trim: true },
    text: { type: String, trim: true },
    rating: { type: Number, min: 1, max: 5 },
    createdAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const blockSchema = new mongoose.Schema(
  {
    type: { type: String }, 
    value: { type: String, default: "" }, 
    attrs: { type: Object, default: {} }, 
  },
  { _id: false }
);

const blogSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true, required: true },
    coverImage: { type: String, required: true },
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    category: {
      type: String,
      enum: ["Design", "Development", "Marketing", "Other"],
      required: true,
    },
    tags: { type: [String], default: [] },
    content: { type: [blockSchema], required: true },

    author: {
      name: { type: String, default: "Admin" },
      image: { type: String, default: "" }, 
    },

    comments: {
      type: [commentSchema],
      default: [],
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;