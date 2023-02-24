import { Response } from "express";
import { MSG } from "./responseMessages";

export const errorServerResponse = (res: Response) => {
  return res.status(500).send({
    success: false,
    message: MSG.SERVER_ERROR,
  });
};

