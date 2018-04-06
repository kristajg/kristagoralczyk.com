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
      <BioImage src={require('../assets/img/kg.jpg')} alt='Cool pic of KG' />
      <p>
        Hello! I'm Krista Goralczyk, an Austin-based developer and solutions consultant. Sometimes I make pixel art for fun.
      </p>
      <p>
        With experience in both coding and sales engineering, I like build cool things and provide technical solutions.
        Check out some of my <Link href='https://github.com/kristajg' target='_blank'>Github projects here</Link>.
        Also check out this <Link href='https://github.com/MerlinLabs/soundboard-demo' target='_blank'> open source soundboard project</Link> I made in ReactJS if you are into annoying drum and synth sounds.
      </p>
      <p>
        I'm available to do freelance work or supply quality puns.
        Drop me a line at <Link href='mailto:krista.goralczyk@gmail.com'>krista.goralczyk@gmail.com</Link>
      </p>
      <p>
        Maybe I should have went with <i>howdy</i> instead of <i>hello</i>, but I'm originally from Pittsburgh. Although I'm really enjoying using <i>y'all</i> on a regular basis.
      </p>
    </AboutContent>
  </AboutWrapper>
);