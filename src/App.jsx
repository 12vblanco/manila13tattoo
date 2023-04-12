import React from "react";
import styled from "styled-components";

function App() {
  return (
    <Div>
      <h1>Manila 13 Tattoo</h1>
      <h2>Coming Soon!!</h2>
    </Div>
  );
}

const Div = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default App;
