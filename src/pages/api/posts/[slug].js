// api/categories/index.js

import prisma from "../../../../utils/connect";

export default async function handler(req, res) {
  const { slug } = req.query;

  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: { user: true },
    });

    return res.status(200).json(post);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
}
