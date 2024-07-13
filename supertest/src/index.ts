import express from "express";
import {z} from "zod"
export const app=express();

const inputTypes= z.object({
    a: z.number(),
    b: z.number()
})

app.use(express.json());
app.post('/sum',(req,res)=>{
    const {success} = inputTypes.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    const a = req.body.a;
    const b = req.body.b;
    const ans = a + b;

    res.json({
        ans
    })
})
