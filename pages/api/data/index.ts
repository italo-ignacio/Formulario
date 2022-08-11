import type { NextApiRequest, NextApiResponse } from "next";
import { createData } from "../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const data = JSON.parse(req.body);

        await createData(data);
        res.status(200).json({ message: "Created successfully" });
      } catch (error) {
        res.status(400).json({ error: true, msg: error });
      }

      break;

    default:
      res.status(400).json({ error: true, msg: "URL does not exist" });
      break;
  }
}
