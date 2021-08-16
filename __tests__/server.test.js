"use strict";

const { server } = require("../src/server");
const supertest = require("supertest");
const request = supertest(server); // use the app from the server (server from the line:3)

describe("express server", () => {
  //   let routePaths = [];
  //   it("Should make sure the sports path is valid", (done) => {
  //     // Try And Find Path
  //     var defaultPath = _.find(routePaths, { path: "/person" });
  //     assert.isTrue(defaultPath.methods.get);

  //     // Make Callback
  //     done();
  //   });

  // "/" (200)
  it("shoud check the (Hello) it works successfully", async () => {
    // arrange
    let path = "/";
    let status = 200;
    let text = "Hello ";

    // act
    const response = await request.get(path);

    // assert
    expect(response.status).toBe(status); // to be  (same same)
    expect(response.text).toBe(text); // to be  (same same)
  });

  //   // "/person" (200)
  //   it("shoud check the (person) it works successfully", async () => {
  //     // arrange
  //     let path = "/person";
  //     let status = 200;

  //     // act
  //     const response = await request.get(path);

  //     // assert
  //     expect(response.status).toBe(status); // to be  (same same)
  //     expect(typeof response.body).toEqual("object");

  //     // expect("Content-Type", /json/).end(function (err, res) {
  //     //   if (err) throw err;
  //     // });
  //   });

  // (500)
  it("should check 500 errors", async () => {
    // arrange
    let path = "/bad";
    let status = 500;

    // act
    const response = await request.get(path);

    // assert
    expect(response.status).toBe(status);
    expect(typeof response.body).toEqual("object");
  });

  // (404)
  it("shoud check 404 errors", async () => {
    // arrange
    let path = "/notfound";
    let status = 404;
    // act
    const response = await request.get(path);
    // assert
    expect(response.status).toBe(status);
  });
});
