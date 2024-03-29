import { BlogPost } from "./BlogPost";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Blog = () => {
  return (
    <>
      <Header />
      <BlogPost
        blogInfo={{
          title: "Fuctional programming for noobs",
          subTitle: "Subtitle",
          image:
            "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
      >
        THIS IS THE BLOG POST
      </BlogPost>
      <Footer />
    </>
  );
};
