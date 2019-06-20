import React from 'react';
import { Option } from './styles';

const Substep = ({ text, resetSubstep }) => (
  <div>
    <div style={{ paddingBottom: 20 }}>
      {text}
    </div>
    <Option onClick={() => resetSubstep()}>Go Back</Option>
  </div>
);

export default Substep;
