'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import MDL from './mdlbase';

class Button extends MDL.UpgradedComponent {
  static propTypes = {
    accent: PropTypes.bool,
    className: PropTypes.string,
    colored: PropTypes.bool,
    primary: PropTypes.bool,
    raised: PropTypes.bool,
    ripple: PropTypes.bool,
  }

  render() {
    let { accent, className, colored,
      primary, raised, ripple, ...otherProps } = this.props;

      // enable ripple by default
      ripple = ripple !== false;

      let buttonClasses = classNames('mdl-button mdl-js-button', {
        'mdl-js-ripple-effect': ripple,
        'mdl-button--raised': raised,
        'mdl-button--colored': colored,
        'mdl-button--primary': primary,
        'mdl-button--accent': accent,
      }, className);

      return (
        <button className={buttonClasses} {...otherProps}>
          {this.props.children}
        </button>
      );
  }
}

export default Button;
