import { describe,expect,it } from "vitest";
import request  from "supertest";
import { app } from "../index";

describe("POST /sum",()=>{
    it("should return the sum of numbers",async()=>{
        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.ans).toBe(3);
    })
    it("should return 411 if no inputs are provided", async () => {
        const res = await request(app).post("/sum").send({});
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe("Incorrect inputs");
      });
})