import React, { PureComponent } from 'react';
import Marquee from '../components/Marquee';
import Bio from '../components/Bio';
import FeaturedProjects from '../components/FeaturedProjects';
import Footer from '../components/Footer';

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <Marquee />
        <Bio />
        <FeaturedProjects />
        <Footer />
      </div>
    );
  }
}