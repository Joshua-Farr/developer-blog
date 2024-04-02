import styled from "styled-components";

const StyledFooterWrapper = styled.div`
  display: flex;
  background-color: black;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border: 1px solid black;
  padding-block: 1.5em;
  padding-inline: 1em;
  margin-top: 2em;
`;

const FooterText = styled.a`
  color: white;
  font-size: 1rem;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  margin: 0;
  text-decoration: none;
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
