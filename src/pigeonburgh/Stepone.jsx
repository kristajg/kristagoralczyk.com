import React from 'react';
import { Option } from './styles';

const Stepone = ({ changeStep, changeSubstep }) => (
  <div>
    <b>Hey you. Yeah, you. Wake up ya jaboroni!!</b>
    <br />
    <br />
    You are a <Option onClick={() => changeSubstep(1)}>pigeon</Option> in your prime. How coo is that? You guess it's pretty coo.
    <br />
    <br />
    Yaaaaaaawn. What a beautiful day in the neighborhood! Rays from the rising sun shine through the thin clouds, onto the surrounding rivers and city buildings.
    <br />
    <br />
    A nice large corn chip rests conveniently by your feetsies. Do you...
    <br /><br />
    <Option onClick={() => changeStep(2)}>Crunch that chip</Option>
    <br /><br />
    <Option onClick={() => changeStep(3)}>Skip the chip</Option>
  </div>
);

export default Stepone;
