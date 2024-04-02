import styled from "styled-components";

const StyledFooterWrapper = styled.div`
  display: flex;
  background-color: black;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border: 1px solid black;
  padding-block: 2em;
  padding-inline: 1em;
  margin-top: 2em;
`;

const FooterText = styled.a`
  color: white;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  margin: 0;
  text-decoration: none;

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
        Checkout more on my GitHub 🚀
      </FooterText>
    </StyledFooterWrapper>
  );
};
