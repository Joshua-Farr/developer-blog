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

  @media screen and (max-width: 1200px) {
    font-size: 3.25rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 3.15rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.75rem;
  }
`;

export const BlogPost = ({ blogInfo, children }: BlogPostProps) => {
  return (
    <div className="blogWrapper">
      <BlogTitle>{blogInfo.title}</BlogTitle>
      <Author />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={blogInfo.image} alt="" />
        {children}

        <pre>
          <code></code>
        </pre>
      </div>
    </div>
  );
};
