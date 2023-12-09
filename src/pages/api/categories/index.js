// api/categories/index.js

import prisma from "../../../../utils/connect";


export default async function handler(req, res) {
  try {
    const categories = await prisma.Category.findMany();
    return res.status(200).json(categories);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
}
