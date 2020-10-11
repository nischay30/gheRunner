const supertest = require("supertest");
const app = require("../index.js");

describe("Tetsing the ping API",  () => {
    it("Should return PONG", async () => {

        const response = await supertest(app).get('/ping');
        expect(response.text).toBe("PONG");
    })
})