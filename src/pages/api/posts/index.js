import { getServerSession } from "next-auth";
import prisma from "../../../../utils/connect";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method == "GET") {
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
  } else {
    const body = req.body;
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    console.log("api called");
    try {
      const post = await prisma.post.create({
        data: { ...body, userEmail: session.user.email },
      });

      return res.status(200).json(post);
    } catch (error) {
      // console.log("Catch Block",error,error.message);
      return res
        .status(500)
        .json({ message: "Something went wrong", error: error.message });
    }
  }
}
