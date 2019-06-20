import React from 'react';
import { Option } from './styles';

const Stepone = ({ changeStep, changeSubstep }) => (
  <div>
    Hey you! Wake up!<br />
    You are a <Option onClick={() => changeSubstep(1)}>pigeon</Option> in your prime. How coo is that? Real coo.<br />
    Yaaaaaaawn. What a beautiful day in the neighborhood! Rays from the  rising sun sparkle over the surrounding rivers and city buildings.
    <br /><br />
    A nice large corn chip rests conveniently by your feetsies. Do you...
    <br /><br />
    <Option onClick={() => changeStep(2)}>Crunch on that chip</Option>
    <br /><br />
    <Option onClick={() => changeStep(3)}>Skip the chip</Option>
  </div>
);

export default Stepone;
