import express from "express";
import { connectDB } from "./confige/db";
import authrouter from "./route/auth.rout"
import blogroute from "./route/bolg.rout"
const app= express();

connectDB()

app.use(express.json());

app.use("/api/v1/auth",authrouter)
app.use("/api/v1/blog",blogroute)

app.listen(5000, ()=>{
console.log("server is runing at port 5000")

})