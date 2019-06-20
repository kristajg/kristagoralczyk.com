import React, { Component } from 'react';
import Substep from './Substep';
import Stepone from './Stepone';
import Steptwo from './Steptwo';
import Stepthree from './Stepthree';
import { Pigeonwrap } from './styles';

// LEGEND!
// Step 1 - intro
// Step 1.1 - clicked 'pigeon'
// Step 2 - ate the chip
// Step 3 - skipped the chip

class Pigeonburgh extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      substep: 0,
    };

    this.changeStep = this.changeStep.bind(this);
    this.changeSubstep = this.changeSubstep.bind(this);
    this.resetSubstep = this.resetSubstep.bind(this);
  }

  changeStep(step) {
    this.setState({ step, substep: 0 });
  }

  changeSubstep(substep) {
    this.setState({ substep });
  }

  resetSubstep() {
    this.setState({ substep: 0 });
  }

  renderGameStep() {
    const { step, substep } = this.state;
    if (step === 1) {
      if (substep === 1) {
        return <Substep text="A fine pigeon you are. Beautiful blue gray and purple feathers. Orange feetsies." resetSubstep={this.resetSubstep} />;
      }
      return <Stepone changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 2) {
      return <Steptwo changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 3) {
      if (substep === 1) {
        return <Substep text="SIIIIIIIP. The lukewarm caffeine flows through you freely. You are ready for action." resetSubstep={this.resetSubstep} />;
      }
      return <Stepthree changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    }
  }

  render() {
    return (
      <Pigeonwrap>
        {this.renderGameStep()}
      </Pigeonwrap>
    );
  }
}

export default Pigeonburgh;
