import mongoose from "mongoose";

const Schema = mongoose.Schema;

const formdataSchema = new Schema({
  attend: {
    type: String,
  },

  entertaing: {
    type: Number,
  },
  money: {
    type: Number,
  },
  best_part: {
    type: String,
  },
  First_Name: {
    type: String,
  },
  Last_Name: {
    type: String,
  },
  Email: {
    type: String,
  },
  Area_Code: {
    type: Number,
  },
  Phone_Number: {
    type: Number,
  },
});

const formDataModel = new mongoose.model(
  "formDataModel",
  formdataSchema,
  "feedbackdata"
);

export default formDataModel;
