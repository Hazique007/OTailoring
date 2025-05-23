import Notification from "../models/notifySchema.js";
import User from "../models/userSchema.js";

export const storeToken = async (req, res) => {
  const { userID, token } = req.body;
  if (!userID | !token) {
    return res.status(403).json({ message: "Not token or Unauthorized User" });
  }
  const user = await User.findById(userID);
  if (!user) {
    return res.status(403).json({ message: "No User Found" });
  }
  const notification = await Notification.create({ userID, token });
  if (!notification || notification.length == 0) {
    return res
      .status(200)
      .json({ message: "User Token Stored Successfully", notification });
  }
};
