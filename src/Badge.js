'use strict';

import React, { PropTypes } from 'react';

class Badge extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]).isRequired,
    text: PropTypes.string.isRequired,
  }

  render() {
    let { children } = this.props;
    let element = (typeof children === 'string')
      ? <span>{children}</span>
      : React.Children.only(this.props.children);

    return React.cloneElement(element, {
      className: 'mdl-badge',
      'data-badge': this.props.text,
    });
  }
}

export default Badge;
