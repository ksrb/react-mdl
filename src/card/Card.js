'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import clamp from 'clamp';

let shadows = [
  'mdl-shadow--2dp',
  'mdl-shadow--3dp',
  'mdl-shadow--4dp',
  'mdl-shadow--6dp',
  'mdl-shadow--8dp',
];

class Card extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    shadowLevel: PropTypes.number,
  }

  render() {
    let { className, shadowLevel, ...otherProps } = this.props;
    shadowLevel = clamp(shadowLevel || 0, 0, shadows.length - 1);

    let classes = classNames('mdl-card', shadows[shadowLevel], className);

    return (
      <div className={classes} {...otherProps}>
        {this.props.children}
        </div>
    );
  }
}

export default Card;
export CardTitle from './CardTitle';
export CardActions from './CardActions';
export CardText from './CardText';
export CardMenu from './CardMenu';
