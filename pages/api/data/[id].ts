import type { NextApiRequest, NextApiResponse } from "next";
import { deleteData, getDatas, updateData } from "../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "PUT":
      try {
        const data = JSON.parse(req.body);
        await updateData(Number(id), data);
        res.status(200).json({ message: "Updated successfully" });
      } catch (error) {
        res.status(400).json({ error: true, msg: error });
        break;
      }

      break;

    case "DELETE":
      try {
        await deleteData(Number(id));
        res.status(200).json({ message: "Deleted successfully" });
        break;
      } catch (error) {
        res.status(400).json({ error: true, msg: error });
        break;
      }

    case "GET":
      try {
        const dados = await getDatas(String(id));
        res.status(200).json(dados);
      } catch (error) {
        res.status(400).json({ error: true, msg: error });
      }

      break;
    default:
      res.status(400).json({ error: true, msg: "URL does not exist" });
      break;
  }
}
