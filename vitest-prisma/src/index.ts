import express from "express";
import { z } from "zod";
import { prismaClient } from "./db";
export const app = express();
app.use(express.json());


const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/sum", async(req, res) => {
    const parsedResponse = sumInput.safeParse(req.body)
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const result = req.body.a + req.body.b;
    await prismaClient.sum.create({
        data: {
            a: 1,
            b: 2,
            result: 3
        }
    })
    res.json({
        result
    })
});


      