// models/TestData.js
import mongoose from "mongoose";

const testDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  courseId: {
    type: String, // UUID format
    required: true,
  },
  score: { type: Number, default: 0 },
  attempts: { type: Number, default: 3 },
  certificates: { type: [String], default: [] },
  userAnswers: { type: Map, of: mongoose.Schema.Types.Mixed, default: {} },
  completedContent: { type: Map, of: Boolean, default: {} },
  activeModule: { type: String, default: null },
  selectedTopic: { type: String, default: null },
  quizReports: {
    type: Map,
    of: new mongoose.Schema({
      quizName: String,
      totalQuestions: Number,
      attempts: [Number],
    }, { _id: false }),
    default: {},
  },
}, {
  timestamps: true,
});

testDataSchema.index({ userId: 1, courseId: 1 }, { unique: true });

const TestData = mongoose.model("TestData", testDataSchema);
export default TestData;
