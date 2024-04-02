import { BlogPost } from "./BlogPost";
import { Footer } from "./Footer";
import { Header } from "./Header";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";

export const Blog = () => {
  return (
    <>
      <Header />
      <BlogPost
        blogInfo={{
          title:
            "The rise of VR/AR headsets – and how businesses stand to benefit",
          subTitle: "Subtitle",
          image:
            "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime tenetur
        odio debitis ullam vel voluptatum modi nihil distinctio deserunt quis
        rem inventore, sed omnis voluptates, esse deleniti! Earum unde accusamus
        voluptas reiciendis repellat officiis alias autem libero modi. Porro
        nisi molestias adipisci hic tempora, similique impedit dolores est
        eligendi?
      </BlogPost>
      <Footer />
    </>
  );
};
