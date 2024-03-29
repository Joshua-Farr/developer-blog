import styled from "styled-components";

const Avatar = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: black;
  gap: 1em;
  align-items: center;
  border: 3px solid red;
  margin-bottom: 0.25em;
`;

export const Author = () => {
  return (
    <AuthorWrapper>
      <Avatar src="src/assets/lci-395-island.png"></Avatar>
      <h2>Joshua Farr</h2>
    </AuthorWrapper>
  );
};
