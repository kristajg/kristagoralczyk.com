import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  padding: 50px 20%;
  height: 100vh;
  @media (max-width: 480px) {
    padding: 20px 5%;
  }
`;

const Header = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #d14774;
  padding-bottom: 25px;
  text-transform: uppercase;
  text-align: center;
`;

const AboutContent = styled.div`
  font-size: 24px;
  line-height: 32px;
  color: #d14774;
  text-align: center;
`;

const Line = styled.hr`
  width: 15%;
  margin-bottom: 25px;
`;

const Email = styled.a`
  text-decoration: none;
  color: #0000be;
`;

export default () => (
  <AboutWrapper>
    <Header>About Me</Header>
    <Line />
    <AboutContent>
      <p>
        Well, hello! I'm an Austin-based developer and sales engineer.
        With a firm foundation in coding, software project management, and sales, I am comfortable working in a wide range of technical as well as business-oriented roles.
        Check out some of my projects below!
      </p>
      <p>
        I'm available to do freelance work or supply witty puns.
        Drop me a line at <Email href='mailto:krista.goralczyk@gmail.com'>krista.goralczyk@gmail.com</Email>
      </p>
      <p>
        Maybe I should have started with <i>howdy</i> instead of <i>hello</i>, but I'm originally from Pittsburgh and still getting used to <i>y'all</i>, but I dig it.
      </p>
    </AboutContent>
  </AboutWrapper>
);