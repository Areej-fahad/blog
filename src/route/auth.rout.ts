import express, { Router } from "express";
import { loginhandlar, registerhadlar } from "../cotroler/auth.contoler";
import vlidate from "../meddelware/vlidate";
import { login, rigester } from "../zodscama/auth.scama";


const router= express.Router();

router.post("/register", vlidate(rigester),registerhadlar)
router.post("/login",vlidate(login),loginhandlar)

export default router

