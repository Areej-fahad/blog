import {user} from "@prisma/client" // import database from prisma 
import { Request,Response } from "express";
import { prisma } from "../confige/db";
import * as  argon2 from "argon2" // hashed plugin
import * as jwt from "jsonwebtoken"

export const loginhandlar = async(req:Request,res:Response)=>{
    const {username ,password}=req.body as user
    const user = await prisma.user.findFirst({
        where:{username}
    })

    
  if (!user) {
    return res.status(400).json({
      message: 'Wrong username or password !',
    });
  }
  const isvaild= await argon2.verify(user.password,password)

  if (!isvaild) {
    return res.status(400).json({
      message: 'Wrong username or password !',
    });
  }

  const token = jwt.sign(
    {id:user.id},
    process.env.JWT_SECRET as string
  )
  return res.status(200).json({
    message:"Welcom Back!"+ user.username + " ! " + token
  })

}

export const registerhadlar= async(req:Request,res:Response)=>{
const {username,password,email} = req.body as user

const hashedpassword = await argon2.hash(password)
await prisma.user.create({
data: {
username,
password:hashedpassword,
email

}


})

return res.status(201).json({
massge: "new user created "

})

}