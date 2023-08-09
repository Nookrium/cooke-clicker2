/* eslint-disable no-template-curly-in-string */
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import CoverVideo from "../CoverVideo";
import TypeWriterText from "../TypeWriterText";

import img1 from "../../assets/Nfts/bighead.svg";
import img2 from "../../assets/Nfts/bighead-1.svg";
import img3 from "../../assets/Nfts/bighead-2.svg";
import img4 from "../../assets/Nfts/bighead-3.svg";
import img5 from "../../assets/Nfts/bighead-4.svg";
import img6 from "../../assets/Nfts/bighead-5.svg";
import img7 from "../../assets/Nfts/bighead-6.svg";
import img8 from "../../assets/Nfts/bighead-7.svg";
import img9 from "../../assets/Nfts/bighead-8.svg";
import img10 from "../../assets/Nfts/bighead-9.svg";
import ETH from "../../assets/icons8-ethereum-48.png";
import COOKIE from '../../assets/cookie.png';
import TOTAL from '../../assets/total_cooke_box.png';

const ImgContainer = styled.div`
width: 100%;
margin-top: 90px;

video{
    width: 100%;
    height: 20%;
}

@meda (max-width: 64em) {
  min-width: 40vh;
}
`

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
  margin-top: 50px;
`;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  // background-color: lightblue;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }

  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;

    &>*:first-child{
      width: 100%;
      margin-top: 2rem;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
100%{
  transform: rotate(1turn);
}
`;

const Round = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 90%;
  width: 6rem;
  height: 6rem;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 50%;

  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  }

  @media (max-width: 64em) {
    width: 4rem;
    height: 4rem;
    left: none;
    right: 2rem;
    bottom: 100%;
  }

  @media (max-width: 48em) {
    right: 1rem;
  }
`;

const Circle = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontxl};

  @media (max-width: 64em) {
    width: 2rem;
    height: 2rem;
    font-size: ${props => props.theme.fontlg}
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: white;
  font-weight: 600;
  width: 80%;
  align-items: flex-start;
  margin-top: -95px;
  margin-left: 170px;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

const Btn = styled.button`
display: inline-block;
background-color: white;
outline: none;
border: none;
}`;

const Showcase = () => {
  const [counter, setCounter] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
    console.log('The link was clicked.');
    setShowAnimation(true);

    // Clear animation after a short delay
    setTimeout(() => {
      setShowAnimation(false);
    }, 1000);
  }

  return (
    <Section id="home">
      <Container>
        <Box>
          <Btn onClick={handleClick}>
            <img src={TOTAL} width={500} />
            <SubTitle>:{counter}</SubTitle>
            <ImgContainer>
              <img src={COOKIE} width={500} />
            </ImgContainer>
          </Btn>
          {showAnimation && <div className="animation"><p>+1</p></div>}
        </Box>
      </Container>
    </Section>
  );
};

export default Showcase;
