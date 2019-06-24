import React from 'react';
import { Option } from './styles';

const Stepone = ({ changeStep, changeSubstep }) => (
  <div>
    Too good for a corn chip, eh? No carb-heavy breakfast for you. Just a coffee-and-fly kind of bird.
    <br />
    <br />
     You glide on over to the nearest cafe and take a <Option onClick={() => changeSubstep(1)}>BIG SIP</Option> from a half-full mug left at a vacant table on the patio.
     <br />
     <br />
     Sufficiently caffeinated, you fly like a bird out of hell in several circles because you feel ALIVE. Let's put this perpetual birdmotion machine to work and get somewhere!
     <br />
     <br />
    <Option onClick={() => changeStep(4)}>FLY OVER TO A BRIDGE WITH INTENT</Option>
  </div>
);

export default Stepone;
