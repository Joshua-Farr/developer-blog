import styled from "styled-components";

const StyledFooterWrapper = styled.div`
  display: flex;
  background-color: black;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  padding-block: 2em;
  padding-inline: 1em;
  margin-bottom: 2em;
`;

const FooterText = styled.a`
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;

  @media screen and (max-width: 1200px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 2.25rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.75rem;
  }
`;

export const Footer = () => {
  return (
    <StyledFooterWrapper>
      <FooterText href="https://github.com/Joshua-Farr">
        More here on GitHub
      </FooterText>
    </StyledFooterWrapper>
  );
};
