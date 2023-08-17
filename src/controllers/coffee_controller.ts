import { Request, Response } from "express";
import * as coffeeService from "../services/coffee_service";
import { coffeeLover } from "../services/coffee_lover";

export const getCoffee = async (
  req: Request<object, object, object, { coffeeName: string | undefined }>,
  res: Response
) => {
  const coffeeName = req.query.coffeeName;
  const coffee = coffeeService.getCoffee(coffeeName);
  res.json(coffee).status(200);
};
export const getCoffeeLover = async (req: Request, res: Response) => {
  const message = coffeeLover();
  res.json(message).status(200);
};
