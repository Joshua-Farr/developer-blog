import styled from "styled-components";
import { BlogDetails } from "../types";
import { PropsWithChildren } from "react";
import { Author } from "./Author";

interface BlogPostProps extends PropsWithChildren {
  blogInfo: BlogDetails;
}

const BlogTitle = styled.h1`
  color: black;
  font-size: 6rem;
  line-height: 1em;
  margin-bottom: 0.25em;
`;

export const BlogPost = ({ blogInfo, children }: BlogPostProps) => {
  return (
    <div className="blogWrapper">
      <BlogTitle>{blogInfo.title}</BlogTitle>
      <Author />
      <img src={blogInfo.image} alt="" />
      {children}
    </div>
  );
};
