import dotenv from "dotenv"

import express from "express"
const app=express()
import connectDB from "./db/index.js";


dotenv.config(
   {
      path: "./env"
   }
)

connectDB()
.then(()=>{
   app.listen(process.env.PORT||8000,()=>{
      console.log(`MogoDB runs successfully at port ${process.env.PORT}`);
   })
   
})
.catch((error)=>{
   console.log("MongoDB connection failed",error);
   
})

















// (async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`)
//     } catch (error) {
//        console.log("ERROR:",error) 
//     }
//     app.on("error",(error)=>{
      
//          console.log("Error",error);

//     })
//     app.listen(process.env.PORT,()=>{
//       console.log(`App is listening at port ${process.env.PORT}`);
      
//     })

// })()