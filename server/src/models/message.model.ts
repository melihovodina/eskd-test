import { Schema, model } from "mongoose";

const messages = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  phone: {
    type: String,
    required: true,
    minlength: 11,
    maxlength: 13,
  },
  message: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 500,
  },
});

export default model("Message", messages);
