import React, { PureComponent } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #afeeee;
  margin: 0 auto;
  padding: 5% 0 0 0;
  height: 100vh;  
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
`;

const FeaturedImage = styled.img`
  width: 20%;
  min-width: 20%;
  position: relative;
  left: -20px;
`;

const SubText = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 24px;
  color: #d14774;
  text-transform: capitalize;
`;

class Marquee extends PureComponent {
  render () {
    return (
      <HeaderContainer>
        <ContentWrapper>
          <FeaturedImage
            src={require('../assets/img/catAnimation.gif')} />
          <SubText>
            <h1>Krista Goralczyk</h1>
            Full-Stack Developer & Solutions Consultant
          </SubText>
        </ContentWrapper>
      </HeaderContainer>
    );
  }
}

export default Marquee;
