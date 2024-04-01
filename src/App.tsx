import styled from "styled-components";
import "./App.css";
import { Blog } from "./components/Blog";

const AppWrapper = styled.div`
  margin-block: 1em;
  margin-inline: 5em;

  @media screen and (max-width: 1200px) {
    margin-inline: 4em;
  }
  @media screen and (max-width: 800px) {
    margin-inline: 3em;
  }
  @media screen and (max-width: 600px) {
    margin-inline: 2em;
  }
  @media screen and (max-width: 450px) {
    margin-inline: 1em;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Blog />
    </AppWrapper>
  );
}

export default App;
