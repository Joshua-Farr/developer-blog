import styled from "styled-components";
import { BlogDetails } from "../types";
import { PropsWithChildren } from "react";
import { SubTitle } from "./SubTitle";

interface BlogPostProps extends PropsWithChildren {
  blogInfo: BlogDetails;
}

const BlogWrapper = styled.div`
  margin-inline: 16em;
  margin-top: 5em;

  @media screen and (max-width: 1200px) {
    margin-inline: 8em;
  }
  @media screen and (max-width: 800px) {
    margin-inline: 4em;
  }
  @media screen and (max-width: 600px) {
    margin-inline: 2em;
  }
  @media screen and (max-width: 450px) {
    margin-inline: 1em;
  }
`;

const BlogTitle = styled.h1`
  color: black;
  font-size: 3.75rem;
  line-height: 1em;
  margin-bottom: 0.25em;
  font-weight: 300;

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

const BlogText = styled.p`
  margin-top: 1em;
  line-height: 2rem;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 24px;
`;

export const BlogPost = ({ blogInfo, children }: BlogPostProps) => {
  return (
    <BlogWrapper>
      <div style={{ marginBottom: "2em" }}>
        <BlogTitle>{blogInfo.title}</BlogTitle>
        <SubTitle />
      </div>
      <div>
        <img src={blogInfo.image} alt="" />
        <BlogText>{children}</BlogText>

        <pre>
          <code></code>
        </pre>
      </div>
    </BlogWrapper>
  );
};
