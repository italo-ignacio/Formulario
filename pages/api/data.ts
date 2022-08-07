import type { NextApiRequest, NextApiResponse } from "next";
import { createData } from "../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    await createData(data);
    return res.status(200).json({ message: "Created successfully" });
  }
  res.status(400).json({ message: "URL not found" });
}
