 import { describe,it,expect} from "@jest/globals";
 import { sum } from "../index";


 describe("Testing the sum function ",()=>{
    it("adds 1 and 2 to equals to 3",()=>{
        expect(sum(1,2)).toBe(3);
    })
    it("adds 4 and 2 to equals to 6",()=>{
        expect(sum(4,2)).toBe(6);
    })
 })