const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  totalDuration: {
    type: Number,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "What type of exercise did you do?",
      },
      name: {
        type: String,
        trim: true,
        required: "What is the name of the exercise?",
      },
      duration: {
        type: Number,
        required: "For how long did you do this exercise?",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
