'use strict';

import React from 'react';

class MdlLogo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg
        className={this.props.className}
        width='22px'
        version='1.1'
        x='0px'
        y='0px'
        viewBox='-246.1 338 118.1 118.1'>
        <circle cx='-187.1' cy='397' r='59.1'/>
        <rect
          x='-223.4'
          y='360.8'
          fill='none'
          stroke='#FFFFFF'
          strokeWidth='2'
          strokeMiterlimit='10'
          width='72.6'
          height='72.6'/>
        <polyline
          fill='none'
          stroke='#FFFFFF'
          strokeWidth='2'
          strokeMiterlimit='10'
          points='-223.4,360.8 -187.1,431.5 -150.8,360.8 '/>
      </svg>
    );
  }

}

export default MdlLogo;
