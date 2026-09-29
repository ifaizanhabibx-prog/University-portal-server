const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  instructor: { type: String, required: true },
  students: { type: Number, default: 0 },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active",
  },
});

courseSchema.set("toJSON", {
  versionKey: false,
  transform: (_doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
  },
});

module.exports = mongoose.model("Course", courseSchema);
