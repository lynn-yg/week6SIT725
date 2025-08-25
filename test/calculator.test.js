const request = require("supertest");
const { expect } = require("chai");

// If your route is defined in server.js and you exported app (module.exports = app)
const app = require("../server.js");

describe("Express Calculator", () => {
  it("GET /add?a=2&b=3 -> 'The sum of 2 and 3 is 5'", async () => {
    const res = await request(app).get("/add").query({ a: 2, b: 3 });
    expect(res.status).to.equal(200);
    expect(res.text).to.equal("The sum of 2 and 3 is 5");
  });

  it("GET /add with invalid input -> 400", async () => {
    const res = await request(app).get("/add").query({ a: "x", b: 3 });
    expect(res.status).to.equal(400);
    expect(res.text).to.match(/Invalid input/i);
  });
});
it("GET /subtract?a=10&b=4 -> 'The difference of 10 and 4 is 6'", async () => {
  const res = await request(app).get("/subtract").query({ a: 10, b: 4 });
  expect(res.status).to.equal(200);
  expect(res.text).to.equal("The difference of 10 and 4 is 6");
});

it("GET /multiply?a=7&b=6 -> 'The product of 7 and 6 is 42'", async () => {
  const res = await request(app).get("/multiply").query({ a: 7, b: 6 });
  expect(res.status).to.equal(200);
  expect(res.text).to.equal("The product of 7 and 6 is 42");
});

it("GET /divide?a=12&b=4 -> 'The quotient of 12 and 4 is 3'", async () => {
  const res = await request(app).get("/divide").query({ a: 12, b: 4 });
  expect(res.status).to.equal(200);
  expect(res.text).to.equal("The quotient of 12 and 4 is 3");
});

it("GET /divide with b=0 -> 400", async () => {
  const res = await request(app).get("/divide").query({ a: 12, b: 0 });
  expect(res.status).to.equal(400);
  expect(res.text).to.match(/Cannot divide by zero/i);
});
describe("Express Calculator", () => {
  it("GET /add?a=2&b=3 -> 'The sum of 2 and 3 is 5'", async () => {
    const res = await request(app).get("/add").query({ a: 2, b: 3 });
    expect(res.status).to.equal(200);
    expect(res.text).to.equal("The sum of 2 and 3 is 5");
  });

  it("GET /add with invalid input -> 400", async () => {
    const res = await request(app).get("/add").query({ a: "x", b: 3 });
    expect(res.status).to.equal(400);
    expect(res.text).to.match(/Invalid input/i);
  });

  it("GET /subtract?a=10&b=4 -> 'The difference of 10 and 4 is 6'", async () => {
    const res = await request(app).get("/subtract").query({ a: 10, b: 4 });
    expect(res.status).to.equal(200);
    expect(res.text).to.equal("The difference of 10 and 4 is 6");
  });

  it("GET /multiply?a=7&b=6 -> 'The product of 7 and 6 is 42'", async () => {
    const res = await request(app).get("/multiply").query({ a: 7, b: 6 });
    expect(res.status).to.equal(200);
    expect(res.text).to.equal("The product of 7 and 6 is 42");
  });

  it("GET /divide?a=12&b=4 -> 'The quotient of 12 and 4 is 3'", async () => {
    const res = await request(app).get("/divide").query({ a: 12, b: 4 });
    expect(res.status).to.equal(200);
    expect(res.text).to.equal("The quotient of 12 and 4 is 3");
  });

  it("GET /divide with b=0 -> 400", async () => {
    const res = await request(app).get("/divide").query({ a: 12, b: 0 });
    expect(res.status).to.equal(400);
    expect(res.text).to.match(/Cannot divide by zero/i);
  });
});