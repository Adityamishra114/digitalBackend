import TestData from "../models/TestModel.js";
export const saveTestData = async (req, res) => {
  const {
    userId,
    courseId,
    score,
    attempts,
    certificates,
    userAnswers,
    completedContent,
    activeModule,
    selectedTopic,
    quizReports,
  } = req.body;

  try {
    const updated = await TestData.findOneAndUpdate(
      { userId, courseId },
      {
        $set: {
          score,
          attempts,
          certificates,
          userAnswers,
          completedContent,
          activeModule,
          selectedTopic,
          quizReports,
        },
      },
      { upsert: true, new: true }
    );

    res.status(200).json({ message: "Test data saved", data: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET test data by userId and courseId
export const getTestData = async (req, res) => {
  const { userId, courseId } = req.query;
  try {
    const data = await TestData.findOne({ userId, courseId });
    if (!data) return res.status(404).json({ message: "No data found" });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
