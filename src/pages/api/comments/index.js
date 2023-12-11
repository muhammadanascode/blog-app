import { getServerSession } from "next-auth";
import prisma from "../../../../utils/connect";
import { authOptions, getAuthSession } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const { postSlug } = req.query;

  //For GET
  if (req.method == "GET") {
    try {
      const Comments = await prisma.comments.findMany({
        where: { ...(postSlug && { postSlug }) },
        include: { user: true },
      });

      return res.status(200).json(Comments);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Something went wrong", error: error.message });
    }
  }
  //For POST
  else {
    const body = req.body;
    console.log(req.body);
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    try {
      const Comment = await prisma.comments.create({
        data: { ...body, userEmail: session.user.email },
      });

      return res.status(200).json(Comment);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Something went wrong", error: error.message });
    }
  }
}
