import { BlogContents } from "./BlogContent";
import { Footer } from "./Footer";
import { Header } from "./header";

export const Blog = () => {
  return (
    <>
      <Header />
      <BlogContents>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        deleniti aut architecto?
      </BlogContents>
      <Footer />
    </>
  );
};
