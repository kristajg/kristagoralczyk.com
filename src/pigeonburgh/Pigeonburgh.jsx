import React, { Component } from 'react';
import Substep from './Substep';
import Stepone from './Stepone';
import Steptwo from './Steptwo';
import Stepthree from './Stepthree';
import Stepfour from './Stepfour';
import Stepfive from './Stepfive';
import Stepsix from './Stepsix';
import Stepseven from './Stepseven';
import Stepeight from './Stepeight';
import Stepnine from './Stepnine';
import { Pigeonwrap } from './styles';

// LEGEND!
// Step 1 - intro
// Step 1.1 - clicked 'pigeon'
// Step 2 - ate the chip
// Step 3 - skipped the chip
// Step 4 - run into teens
// Step 5 - Shred it brah!!!
// Step 6 - You make a friend in the crust punk

// TODO: put survey link for survey monkey on last page
// survey q's...hmm did the story make sense? were you confused?
// I know this is open ended but any general suggestions for improvement?

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
        return <Substep text="Yes, a pigeon. A bird. Beautiful royal blue and gray feathers. Orange feetsies." resetSubstep={this.resetSubstep} />;
      }
      return <Stepone changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 2) {
      return <Steptwo changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 3) {
      if (substep === 1) {
        return <Substep text="SIIIIIIIP. The lukewarm caffeine flows through you freely. You are ready for action." resetSubstep={this.resetSubstep} />;
      }
      return <Stepthree changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 4) {
      if (substep === 1) {
        return <Substep text="Probably cooler than you. Wearing t-shirts featuring bands you’ve never heard of: Death by Plastic Burial, Puddleslap, Figboy and the Newtons." resetSubstep={this.resetSubstep} />;
      }
      return <Stepfour changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 5) {
      return <Stepfive changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 6) {
      return <Stepsix changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 7) {
      return <Stepseven changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 8) {
      return <Stepeight changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 9) {
      return <Stepnine changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    }
  }

  render() {
    return (
      <Pigeonwrap>
        {this.renderGameStep()}
        <br />
        <br />
        <button onClick={() => this.changeStep(1)}>RESET GAME</button>
      </Pigeonwrap>
    );
  }
}

export default Pigeonburgh;
