import React from 'react';
import { Option } from './styles';

const Stepone = ({ changeStep, changeSubstep }) => (
  <div>
    Too good for a corn chip, eh? No carb-heavy breakfast for you. Just a coffee-and-fly kind of bird.
    <br />
     You glide on over to the nearest cafe and take a <Option onClick={() => changeSubstep(1)}>BIG SIP</Option> from a half-full mug left at a vacant table on the patio.
  </div>
);

export default Stepone;
