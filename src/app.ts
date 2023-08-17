import express from "express";
import { router } from "./routes/routes";
export const app = express();
app.get("/", (req, res) => res.send("Welcome to the Drinks API!"));
app.use(express.json());
app.use("/", router);
