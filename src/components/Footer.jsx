import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  text-align: center;
  background-color: #808080;
  padding: 30px 0;
  color: #fff;

  div {
    font-size: 14px;
    padding-bottom: 10px;
  }

  hr {
    width: 10%
  }

  a {
    display: inline-block;
    img {
      height: 40px;
      width: 40px;
      padding: 15px;
    }
  }
`;

export default () => (
  <FooterContainer>
    <div>Obligatory Social Media</div>
    <hr />
    <a href='https://twitter.com/kristazilla/' target='_blank'>
      <img src={require('../assets/img/icon_twitter.svg')} />
    </a>
    <a href='https://www.instagram.com/kristajg_/' target='_blank'>
      <img src={require('../assets/img/icon_instagram.svg')} />
    </a>
    <a href='https://www.linkedin.com/in/krista-goralczyk-037a1861/' target='_blank'>
      <img src={require('../assets/img/icon_linkedin.svg')} />
    </a>
  </FooterContainer>
);
