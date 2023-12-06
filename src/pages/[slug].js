import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/singlepost.module.css";
import Menu from "../../components/Menu/Menu";
import Image from "next/image";
import Comments from "../../components/comments/Comments";

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Coding is not a piece of cake for everyone
          </h1>
          <div className={styles.user}>
            <div className={styles.userimage}>
              <Image
                src={"/coding.jpeg"}
                alt="img"
                width={30}
                height={30}
                className={styles.avatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Anas Sohail</span>
              <span className={styles.date}>11-12-2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={"/post.jpg"} alt="img" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Title: Coding is Not a Piece of Cake for Everyone In the
              ever-evolving landscape of technology, coding has emerged as a
              crucial skill, unlocking countless possibilities and
              opportunities. However, the journey into the realm of programming
              is not always a smooth ride for everyone. Despite its
              transformative potential, coding can present challenges that
              resonate with learners at various levels. Let's explore why coding
              is not a piece of cake for everyone and how individuals can
              navigate this complex but rewarding terrain. 1. The Learning
              Curve: Coding often introduces individuals to a new language,
              logic, and problem-solving paradigms. The initial learning curve
              can be steep, leaving beginners feeling overwhelmed. Syntax
              errors, debugging challenges, and grasping abstract concepts can
              be formidable hurdles. 2. Diversity in Backgrounds: Individuals
              approaching coding come from diverse backgrounds and experiences.
              Some may have prior exposure to mathematical concepts, making
              logical structures more familiar, while others may find these
              principles entirely new. Bridging these gaps requires tailored
              learning approaches. 3. Imposter Syndrome: Many aspiring coders
              grapple with imposter syndrome — a psychological phenomenon where
              individuals doubt their abilities and fear being exposed as
              frauds. The vastness of the coding universe can contribute to
              self-doubt, even for those making significant strides. 4. Lack of
              Resources: Access to quality learning resources, mentorship, and a
              supportive community can greatly influence one's coding journey.
              Not everyone has equal access to these resources, creating
              disparities in learning experiences. 5. Persistence is Key: Coding
              demands persistence and resilience. The process of trial and
              error, coupled with the continuous need to update skills, can be
              taxing. Those who persevere often reap the rewards, but the
              journey itself can be demanding. 6. Real-world Application:
              Understanding the theoretical aspects of coding is one thing;
              applying that knowledge to real-world problems is another.
              Bridging this gap requires practice, exposure to projects, and the
              ability to think critically about coding challenges. 7. Evolving
              Technologies: The tech industry is dynamic, with new languages,
              frameworks, and tools emerging regularly. Staying abreast of these
              changes adds an extra layer of complexity for learners, requiring
              them to adopt a growth mindset and a willingness to embrace
              lifelong learning. 8. Inclusive Learning Environments: Creating
              inclusive learning environments that cater to diverse learning
              styles, backgrounds, and cognitive approaches is crucial.
              Addressing the unique needs of learners fosters an environment
              where coding becomes more accessible to everyone. Conclusion:
              While coding may not be a piece of cake for everyone, the
              challenges it presents are surmountable with the right mindset,
              resources, and support. Embracing the learning journey, seeking
              community, and understanding that struggles are part of the
              process can transform coding from an intimidating task into a
              skill that empowers and opens doors to endless possibilities.
              After all, the most intricate codes are often crafted by those who
              faced and conquered the challenges along the way.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default BlogPost;
