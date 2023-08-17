import express from "express";
export const app = express();
app.get("/", (req, res) => res.send("Welcome to the Drinks API!"));
app.get("/coffelover", (req, res) => res.send("I like coffee!"));
