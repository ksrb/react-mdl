'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function(defaultClassName, element = 'div') {
  class BasicClass extends React.Component {
    static propTypes = {
      className: PropTypes.string,
    }

    render() {
      let { className, ...otherProps } = this.props;

      return React.createElement(element, {
        className: classNames(defaultClassName, className),
        ...otherProps,
      }, this.props.children);
    }
  }

  return BasicClass;
}
