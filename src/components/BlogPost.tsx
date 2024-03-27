import { BlogDetails } from "../types";
import { PropsWithChildren } from "react";

interface BlogPostProps extends PropsWithChildren {
  blogInfo: BlogDetails;
}

export const BlogPost = ({ blogInfo, children }: BlogPostProps) => {
  return (
    <div className="blogWrapper">
      <img src={blogInfo.image} alt="" />
      <h1>{blogInfo.title}</h1>
      <h3>{blogInfo.subTitle}</h3>
      {children}
    </div>
  );
};
