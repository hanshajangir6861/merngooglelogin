import  dotenv from 'dotenv'
import express from "express"
import cors from 'cors'
import  "./db/conn.js"


const app = express()
 const PORT = 4000;

 app.use(cors({
origin : "http://localhost:3000/",
methods : "GET ,POST, PUT ,DELETE",
credentials :true

 }));
 app.use(express.json())
 app.get("/", (req,res)=>{
    res.status(200).json("server start")
 });

 app.listen(PORT ,()=>{
    console.log(`server start at ${PORT}`)
 });