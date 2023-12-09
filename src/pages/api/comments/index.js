// api/categories/index.js

import prisma from "../../../../utils/connect";

export default async function handler(req, res) {
  const { postSlug } = req.query;

  try {
    const Comments = await prisma.comments.findMany({
      where: {... (postSlug && {postSlug} )},
      include: { user: true },
    });

    return res.status(200).json(Comments);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
}
