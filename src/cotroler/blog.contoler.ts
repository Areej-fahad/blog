import { blog } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../confige/db";
import { IUser } from "../meddelware/auth";
import {  blogscamadelete, blogscamadeletetype } from "../zodscama/blog.scama";



export const getAllBlogs = async(req:Request, res:Response)=>{
    const user = res.locals.user as IUser

    const blogs = await prisma.blog.findMany({
        where:{
            user_id:user.id
        }
    })
    return res.status(200).json(blogs)
}

export const createbloge= async (req:Request, res:Response)=>{

    const user = res.locals.user as IUser
    const {title,messege} = req.body as blog
    await prisma.blog.create({
        data:{
            title,
            messege,
            user_id:user.id
        }
    })

    res.status(201).json({
masseg: "new blog created"
    })

}


export const deletefromblog= async (req:Request, res:Response)=>{
const user=  res.locals.user as IUser // protect token in router and  to route between pages 
const {title} = req.params as blogscamadeletetype
const deleteBlog =await prisma.blog.deleteMany({
    where:{
        title,
        user_id:user.id
    }
    
})
if(deleteBlog.count == 0){
    return res.status(400).json({
        message:"Invalid Blog Title!"
    })
}

return res.status(200).json({
    message:"Blog Deleted!"
})

}

