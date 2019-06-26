import React from 'react';
import { Option } from './styles';

const Stepfourteen = ({ changeStep, changeSubstep }) => (
  <div>
    STEP fourteen
     <br />
     <br />
    <Option onClick={() => changeStep(15)}>GO TO STEP 15?</Option>
  </div>
);

export default Stepfourteen;
