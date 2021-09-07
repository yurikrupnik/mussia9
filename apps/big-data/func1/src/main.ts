import type { Request, Response } from "express";

const func1 = (req: Request, res: Response) => {
  res.status(200).send();
};

export { func1 };
