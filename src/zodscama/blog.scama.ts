import { z } from "zod"

export const addBlogSchema = z.object({
    body:z.object({
        title: z.string({required_error: "title is require",invalid_type_error: "title must be string "}),
        messege : z.string({required_error: "message is require"})
    })
})


export const blogscamadelete= z.object({
    params:z.object({
        title: z.string({required_error: "title is require",invalid_type_error: "title must be string "}),
     
    })  
})
export const blogscamaupdate=z.object({
    params:z.object({
        title: z.string({required_error: "title is require",invalid_type_error: "title must be string "}),
     
    })  
})
export type blogscamadeletetype= z.infer<typeof blogscamadelete>['params'];
export type blogscamaupdatetype = z.infer<typeof blogscamaupdate>['params'];


