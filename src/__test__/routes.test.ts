import supertest from "supertest"; 
import app from "../server";


describe("GET /",  () => {
  it("should back some data", async () => {
    const res = await supertest(app)
     .get('/')

    expect(res.body.message).toBe('hello')
  });
});