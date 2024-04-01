import styled from "styled-components";

const StyledHeaderWrapper = styled.div`
  display: flex;
  background-color: black;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  // border: 1px solid black;
  border-radius: 20px;
  border: 1px solid black;
  padding: 2em;
  margin-bottom: 2em;

  @media screen and (max-width: 450px) {
    justify-content: center;
    padding: 1em;
  }
`;

const HeaderText = styled.h1`
  color: white;
  font-size: 2.75rem;
  margin: 0;

  @media screen and (max-width: 1200px) {
    font-size: 2.25rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 2.15rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.75rem;
  }
`;

const HeaderName = styled.h3`
  color: black;
  font-size: 1.5rem;
  margin: 0;

  @media screen and (max-width: 600px) {
    font-size: 1.25rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1rem;
  }
`;

export const Header = () => {
  return (
    <StyledHeaderWrapper>
      <HeaderText>JoshFarr.dev</HeaderText>
    </StyledHeaderWrapper>
  );
};
