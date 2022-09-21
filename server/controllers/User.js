import { UserModel } from "../models/UserModel.js";
import { ProfileModel } from "../models/ProfileModel.js";
import { MyTripModel } from "../models/MyTripModel.js";

import jwt from "jsonwebtoken";

export const getUser = async (req, res) => {
  try {
    const users = await UserModel.find();

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

// isUserLoggedIn
export const isUserLoggedIn = async (req, res) => {
  try {
    const id = req.userId;
    const user = await UserModel.findById(id).select("-password");
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    const profile = await ProfileModel.findOne({ UserID: user._id });
    const myTrip = await MyTripModel.findOne({ UserID: user._id })
      .populate("collections.placeList.placeList_id")
      .exec();

    return res.status(200).json({ success: true, user, profile, myTrip });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

// verifyToken
export const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Access token not found" });

  try {
    const decoded = jwt.verify(token, "THL");

    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(403).json({ success: false, message: "Invalid token" });
  }
};

// Login
export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Missing email and/or password" });
  }

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    if (user.password !== password) {
      return res.status(400).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    const accessToken = jwt.sign({ userId: user._id }, "THL");

    res.status(200).json({ success: true, message: "Login", accessToken });
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

// register
export const createUsers = async (req, res) => {
  try {
    const { registerData, profileData } = req.body;

    const user = await UserModel.findOne({ email: registerData.email });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Email already taken." });
    }

    const newUser = new UserModel(registerData);

    let profile;
    let myTrip;
    await newUser.save().then((user) => {
      profile = new ProfileModel({ ...profileData, UserID: user._id });
      myTrip = new MyTripModel({ collections: [], UserID: user._id });
    });

    await profile.save();
    await myTrip.save();

    const accessToken = jwt.sign({ userId: newUser._id }, "THL");

    res.status(200).json({ success: true, message: "Created", accessToken });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
