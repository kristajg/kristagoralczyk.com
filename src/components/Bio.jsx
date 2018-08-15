import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  padding: 50px 20%;
  background-size: 100%;
  @media (max-width: 480px) {
    padding: 20px 5%;
  }
`;

const Header = styled.div`
  font-family: "Oswald", sans-serif;
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

const BioImage = styled.img`
  border: 3px solid #d9d9d9;
  border-radius: 50%;
  height: 220px;
`;

const Line = styled.hr`
  width: 15%;
  margin-bottom: 25px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #0000be;
`;

export default () => (
  <AboutWrapper>
    <Header>About Me</Header>
    <Line />
    <AboutContent>
      <BioImage src={require('../assets/img/kg.jpg')} alt="Cool pic of KG" />
      <p>
        Hey there. I&#39;m Krista Goralczyk, an Austin-based full stack developer.
      </p>
      <p>
        With experience in both coding and solutions engineering, I understand the gamut of what
        {' '}it takes to build software as well as run a business.
         Check out my{' '}
        <Link href="https://github.com/kristajg" target="_blank">
          Github projects here
        </Link>
        . I also built an{' '}
        <Link
          href="https://github.com/MerlinLabs/soundboard-demo"
          target="_blank"
        >
          {' '}
          open source soundboard project
        </Link>{' '}
       using React, Flow, and Next.
      </p>
      <p>
        I&#39;m currently available to do freelance development work and general technical
        {' '}consultation. Drop me a line at{' '}
        <Link href="mailto:krista.goralczyk@gmail.com">
          krista.goralczyk@gmail.com
        </Link>
      </p>
    </AboutContent>
  </AboutWrapper>
);
