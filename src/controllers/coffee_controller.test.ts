import request from "supertest";
import { app } from "../app";
test("GET /coffee should return correct object", async () => {
  const res = await request(app).get("/coffee").query({ coffeeName: "Latte" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Coffee",
    name: "Latte",
  });
});
test("/coffee get without param should return default", async () => {
  const res = await request(app).get("/coffee");
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Coffee",
    name: "Latte",
  });
});
test("/coffee get with non-default param should return correct object", async () => {
  const res = await request(app)
    .get("/coffee")
    .query({ coffeeName: "espresso" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Coffee",
    name: "espresso",
  });
});
