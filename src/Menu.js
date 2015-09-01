'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import MDL from './mdlbase';

class Menu extends MDL.UpgradedComponent {
  static propTypes = {
    align: PropTypes.oneOf(['left', 'right']),
    className: PropTypes.string,
    ripple: PropTypes.bool,
    target: PropTypes.string.isRequired,
    valign: PropTypes.oneOf(['bottom', 'top']),
  }

  static defaultProps = {
    align: 'left',
    valign: 'bottom',
    ripple: true,
  }

  render() {
    let { align, className, ripple, target, valign, ...otherProps} = this.props;

    let classes = classNames('mdl-menu mdl-js-menu', {
      [`mdl-menu--${valign}-${align}`]: true,
      'mdl-js-ripple-effect': ripple,
    }, className);

    return (
      <ul className={classes} htmlFor={target} {...otherProps}>
        {this.props.children}
      </ul>
    );
  }
}

class MenuItem extends React.Component {
  render() {
    let { className, ...otherProps } = this.props;

    return (
      <li className={classNames('mdl-menu__item', className)} {...otherProps}>
        {this.props.children}
      </li>
    );
  }
}

export default Menu;
export { MenuItem };

