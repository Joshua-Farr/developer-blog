import styled from "styled-components";

const SubtitleWrapper = styled.h3`
  font-size: 1.25rem;
  font-weight: 300;
  color: #6e767d;
  font-family: "Lato", sans-serif;
`;

export const SubTitle = () => {
  return (
    <SubtitleWrapper>
      Growing interest in mixed reality devices creates opportunities for
      wireless, cable and even property & casualty companies
    </SubtitleWrapper>
  );
};
