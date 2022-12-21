import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import posts from "./routers/posts.js";
import Province from "./routers/Province.js";
import Place from "./routers/Place.js";
import Hotel from "./routers/Hotel.js";
import FoodAndDrink from "./routers/FoodAndDrink.js";
import Attraction from "./routers/Attraction.js";
import User from "./routers/User.js";
import Profile from "./routers/Profile.js";
import MyTrip from "./routers/MyTrip.js";
import dotenv from "dotenv";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

const URI = process.env.DATABASE_URL

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/user", User);
app.use("/profile", Profile);
app.use("/myTrip", MyTrip);
app.use("/posts", posts);
app.use("/province", Province);
app.use("/place", Place);
app.use("/hotel", Hotel);
app.use("/foodAndDrink", FoodAndDrink);
app.use("/attraction", Attraction);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
