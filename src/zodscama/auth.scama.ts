import { z } from "zod"


export const rigester= z.object({
    body:z.object({
    username: z.string({required_error: "username is require",invalid_type_error: "username must be string "}),
    password : z.string({required_error: "password is require"}).min(6, "password must be more than  6").
    max(15 , "password must be less then 15 "),
    email: z.string({required_error: "email is require",invalid_type_error: "email must be string "})
    
    })
    
    
    
    })
    
    export const login= z.object({
        body:z.object({
        username: z.string({ required_error: "username is require",invalid_type_error: "username must be string "}),
        password : z.string({ required_error: "password is require"}).min(6, "password must be more than  6").
        max(15 , "password must be less then 15 ")
        
        })
    })

    