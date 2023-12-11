import prisma from "../../../../utils/connect";

export default async function handler(req, res) {
  const POST_PER_PAGE = 4;

  const query = {
    take: POST_PER_PAGE,
    orderBy: {
      views: "desc", 
    },
    include: { user: true },
  };

  try {
    const posts = await prisma.post.findMany(query);
    // console.log("Posts:", posts);

    return res.status(200).json({ posts });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
}
