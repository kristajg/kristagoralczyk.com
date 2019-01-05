import React from 'react';
import styled, { keyframes } from 'styled-components';
import { skyBlue, pink, gray } from '../styles/global';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    top: 0px;
  }
  50% {
    top: -15px;
  }
  100% {
    opacity: 1;
    top: 0px;
  }
`;

const HeaderContainer = styled.div`
  background: ${skyBlue};
  background: linear-gradient(0deg, #fff 1%, ${skyBlue} 100%);

  margin: 0 auto;
  padding: 8% 0 0 0;
  height: 100%;
  min-height: 100vh;

  @media (max-width: 900px) {
    padding-top: 30%;
  }

  @media (max-width: 480px) {
    padding-top: 50%;
  }
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  position: relative;
  animation: ${fadeIn} 1s ease-in-out;
`;

const FeaturedImage = styled.img`
  width: 20%;
  min-width: 20%;
`;

const Title = styled.div`
  font-family: 'Oswald', sans-serif;
  text-transform: capitalize;
  color: ${pink};
  font-size: 48px;
  padding-bottom: 15px;
`;

const Subtitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: ${gray};
  font-size: 18px;
`;

const Marquee = () => (
  <HeaderContainer>
    <ContentWrapper>
      <FeaturedImage
        src={require('../assets/img/catAnimation2.gif')}
      />
      <div>
        <Title>Krista Goralczyk</Title>
        <Subtitle>Engineer   //   Illustrator   //   Writer</Subtitle>
      </div>
    </ContentWrapper>
  </HeaderContainer>
);

export default Marquee;
