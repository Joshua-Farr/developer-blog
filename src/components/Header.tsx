import styled from "styled-components";

const StyledHeaderWrapper = styled.div`
  display: flex;
  color: green;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  // border: 1px solid black;
  border-radius: 20px;
  padding-block: 2em;
  margin-bottom: 2em;
`;

const HeaderText = styled.h1`
  color: black;
  font-size: 2.75rem;
  margin: 0;

  @media screen and (max-width: 1200px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 1.75rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1rem;
  }
`;

const HeaderName = styled.h3`
  color: black;
  font-size: 1.5rem;
  margin: 0;
`;

export const Header = () => {
  return (
    <StyledHeaderWrapper>
      <HeaderText>Developer Blog</HeaderText>
      <HeaderName>Josh Farr</HeaderName>
    </StyledHeaderWrapper>
  );
};
