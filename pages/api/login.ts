import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "POST":
      const data = JSON.parse(req.body);
      const { name, password } = data;
      if (name == process.env.NAME && password == process.env.PASSWORD) {
        const token = jwt.sign(
          { name, password },
          process.env.TOKEN_SECRET || "",
          {
            expiresIn: process.env.TOKEN_EXPIRATION,
          }
        );
        res.status(200).json({ error: false, token: token });
      } else {
        res.status(200).json({ name, password });
      }

      break;

    default:
      res.status(400).json({ error: true, msg: "URL does not exist" });
      break;
  }
}
