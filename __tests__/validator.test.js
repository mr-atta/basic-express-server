"use strict";

const { server } = require("../src/server");
const supertest = require("supertest");

const request = supertest(server);

describe("validator ", () => {
  it("if the name is in the query string", async () => {
    let params = "/person?name=moh";
    let status = 200;
    const response = await request.get("/person?name=moh");
    expect(response.status).toBe(status);
    expect(response.body).toEqual({ name: "moh" });
  });
});
