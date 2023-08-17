import { Request, Response } from "express";
import * as teaService from "../services/tea_service";

export const getTea = async (req: Request, res: Response) => {
  const message = teaService.getTea();
  res.json(message).status(200);
};
