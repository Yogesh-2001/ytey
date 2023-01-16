const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "email is require"],
    },
    firstName: {
      type: String,
      required: [true, "firstName is required"],
    },
    lastName: {
      type: String,
      required: [true, "lastName is required"],
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
    },
    website: {
      type: String,
    },
    status: {
      type: String,
      default: "pending",
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    specialization: {
      type: String,
      required: [true, "specialization is required"],
    },
    experience: {
      type: String,
      required: [true, "experience is required"],
    },
    feesPerCunsultaion: {
      type: String,
      required: [true, "feesPerCunsultaion is required"],
    },
    timings: {
      type: Array,
      required: [true, "work timings is required"],
    },
  },
  { timestamps: true }
);

const doctorModel = mongoose.model("doctors", doctorSchema);

module.exports = doctorModel;
