import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the User Schema.
const FoodSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  shape:{
    type: String,
    required: true
  }
});

const Food = mongoose.model("Food", FoodSchema);

export default Food;