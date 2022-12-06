import express, { application, Router } from "express";
import { createbloge, deletefromblog, getAllBlogs } from "../cotroler/blog.contoler";
import { protect } from "../meddelware/auth";
import vlidate from "../meddelware/vlidate";
import { addBlogSchema, blogscamadelete,blogscamaupdate } from "../zodscama/blog.scama";

const router= express.Router();

router.get("/",protect,getAllBlogs)
router.post("/",protect,vlidate(addBlogSchema),createbloge)
router.delete("/:title",protect,vlidate(blogscamadelete),deletefromblog)

export default router