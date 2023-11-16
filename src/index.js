import mongodbConnection from "./db/db.js";
import dotenv from "dotenv";
import express from "express";
dotenv.config({ path: "./env" });
const app = express()
mongodbConnection()
  .then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`Server is running at : ${process.env.PORT}`);
    })
  })
  .catch((error) => {
    console.log("mongodb connention failed ;(", error);
  });
