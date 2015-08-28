'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import MDL from './mdlbase';

class Tooltip extends MDL.UpgradedComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]).isRequired,
    label: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]).isRequired,
    large: PropTypes.bool,
  }

  render() {
    let { label, large, children, ...otherProps } = this.props;
    let id = Math.random().toString(36).substr(2);

    if (typeof label === 'string') {
      label = <span>{label}</span>;
    }

    let element;
    if (typeof children === 'string') {
      element = <span>{children}</span>;
    }
    else {
      element = React.Children.only(this.props.children);
    }

    return (
      <div style={{display: 'inline-block'}} {...otherProps}>
        {React.cloneElement(element, {id})}
        {React.cloneElement(label, {
          htmlFor: id,
          className: classNames('mdl-tooltip', { 'mdl-tooltip--large': large }),
        })}
        </div>
    );
  }
}

export default Tooltip;
