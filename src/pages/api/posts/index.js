// api/categories/index.js

import prisma from "../../../../utils/connect";

export default async function handler(req, res) {
  
  let { page } = req.query;
  const { cat } = req.query;
  const POST_PER_PAGE = 3;

  // console.log(page,cat);
  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    // console.log("Posts: " ,posts);

    return res.status(200).json({ posts, count });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
}
