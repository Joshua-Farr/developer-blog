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
  // border: 3px solid red;
  border-radius: 20px;
  padding: 0.75em;
  margin-bottom: 2em;
  // background-color: lightgray;
`;

export const Author = () => {
  return (
    <AuthorWrapper>
      {/* <Avatar src="src/assets/lci-395-island.png"></Avatar> */}
      <h2 style={{ margin: 0 }}>January 22nd 2024</h2>
    </AuthorWrapper>
  );
};
