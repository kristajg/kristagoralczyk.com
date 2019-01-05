import React from 'react';
import styled from 'styled-components';
import { pink, gray, liteGray } from '../styles/global';

const AboutWrapper = styled.div`
  padding: 50px 20%;
  background-size: 100%;

  @media (max-width: 480px) {
    padding: 20px 5%;
  }
`;

const Header = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: ${pink};
  padding-bottom: 25px;
  text-transform: uppercase;
  text-align: center;
`;

const AboutContent = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  line-height: 26px;
  color: ${gray};
  text-align: center;
`;

const BioImage = styled.img`
  border: 1px solid ${liteGray};
  border-radius: 50%;
  height: 220px;
`;

const Line = styled.div`
  margin: 0 auto;
  width: 18%;
  margin-bottom: 25px;
  border-bottom: 1px solid ${liteGray};
`;

const Link = styled.a`
  text-decoration: none;
  color: ${pink};
`;

const paragraphOne = 'I\'m Krista Goralczyk, a full stack developer living in Austin Texas. I like to code, draw, and write (gallery & blog coming soon... gotta corral all those cats here). Comedy on the side too, just for funsies.';

export default () => (
  <AboutWrapper>
    <Header>Howdy Y&#39;all</Header>
    <Line />
    <AboutContent>
      <BioImage src={require('../assets/img/kg.jpg')} alt="Cool pic of KG" />
      <p>{paragraphOne}</p>
      <p>
        With 10 years experience in coding, sales, and project management, I understand the gamut of what it takes to build and productize software.
         See my{' '}
        <Link href="https://github.com/kristajg" target="_blank">
          Github projects
        </Link>
        , including a
        <Link
          href="https://github.com/MerlinLabs/soundboard-demo"
          target="_blank"
        >
          {' '}
          soundboard
        </Link>{' '}
       created with React, Flow, and Next.
      </p>
      <p>
        Now, what can I do for you? I bring senior level experience particularly with React.js and Javascript to the table. For inquiries regarding consultation, development, or quality puns{' '}
        <Link href="mailto:krista.goralczyk@gmail.com">drop me a line</Link>.
      </p>
    </AboutContent>
  </AboutWrapper>
);
