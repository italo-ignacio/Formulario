import type { NextApiRequest, NextApiResponse } from "next";
import { createData, getDatas, updateData } from "../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "POST":
      const data = JSON.parse(req.body);
      const { cpf } = data;
      const dados = await getDatas(String(cpf));
      if (dados == null) {
        try {
          await createData(data);
          res.status(200).json({ message: "Created successfully" });
        } catch (error) {
          res.status(400).json({ error: true, msg: error });
        }
      } else {
        try {
          const data = JSON.parse(req.body);
          await updateData(dados.id, data);
          res.status(200).json({ message: "Updated successfully" });
        } catch (error) {
          res.status(400).json({ error: true, msg: error });
        }
      }

      break;

    default:
      res.status(400).json({ error: true, msg: "URL does not exist" });
      break;
  }
}
