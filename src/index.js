//require ('dotenv').config({path : './env})
import dotenv from "dotenv";

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

import connectDB from "./db/index.js";

dotenv.config({
  path: ".env",
});

connectDB();


// way : 1: -
/*

// thise  express using  here 
import express from "express";

const app = express()(async () => {
  try {
      // here the mongoose connect with database 
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });
      
     // here run this file port  here 
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port       ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR :", error);
    throw err;
  }
})();
*/
