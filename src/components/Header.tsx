import styled from "styled-components";

const StyledHeaderWrapper = styled.div`
  display: flex;
  background-color: white;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e7eb;
  padding: 1em;
  // margin-bottom: 2em;

  @media screen and (max-width: 450px) {
    justify-content: center;
    padding: 1em;
  }
`;

const HeaderText = styled.h1`
  color: black;
  font-size: 1.75rem;
  margin: 0;

  @media screen and (max-width: 1200px) {
    font-size: 1.25rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 1.15rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 0.75rem;
  }
`;

export const Header = () => {
  return (
    <StyledHeaderWrapper>
      <HeaderText>JoshFarr.dev</HeaderText>
    </StyledHeaderWrapper>
  );
};
