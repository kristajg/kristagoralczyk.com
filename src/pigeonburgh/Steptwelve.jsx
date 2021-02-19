import React from 'react';
import { Option } from './styles';

const Steptwelve = ({ changeStep, changeSubstep }) => (
  <div>
    The cathedral of learning!
    <br />
    <br />
    <Option onClick={() => changeStep(14)}>GO TO STEP 14</Option>
  </div>
);

export default Steptwelve;
