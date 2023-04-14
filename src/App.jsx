import React from "react";
import styled from "styled-components";
import img1 from "./assets/pic1.png";
import img2 from "./assets/pic2.png";
import img3 from "./assets/pic3.png";
import img4 from "./assets/pic4.png";

function App() {
  return (
    <Div>
      <H1>Manila13 </H1>
      <H1>Tattoo </H1>
      <PicDiv>
        <Img src={img1} />
        <Img src={img2} />
        <Img src={img3} />
        <Img src={img4} />
      </PicDiv>
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
  @media (max-width: 900px) {
    width: 50%;
    margin: 0 auto;
  }
  @media (max-width: 896px) {
    width: 70%;
    margin: 0 auto;
  }
`;

const H1 = styled.div`
  font-size: 38px;
  text-align: left;
`;

const PicDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 6px;
  margin: 12px;
`;

export default App;
