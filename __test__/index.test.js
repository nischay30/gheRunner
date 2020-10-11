const supertest = require("supertest");
const http = require('http');
const app = require("../app.js");

describe("Tetsing the ping API",  () => {

    let server;
    let request;

    beforeAll((done) => {
        server = http.createServer(app);
        server.listen(done);
        request = supertest(server);
    });

    it("Should return PONG", async () => {
        const response = await request.get('/ping');
        expect(response.text).toBe("PONG");
    });

    afterAll((done) => {
        server.close(done);
    });
})