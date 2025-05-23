import mongoose from "mongoose";

const notifySchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    require: true,
  },
  token: {
    type: String,
    require: true,
  },
});

const Notification = mongoose.model("Notification", notifySchema);
export default Notification;
