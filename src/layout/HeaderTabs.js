'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import cloneChildren from '../utils/cloneChildren';

class HeaderTabs extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    ripple: PropTypes.bool,
  }

  static defaultProps = {
    ripple: true,
  }

  render() {
    let { className, ripple, ...otherProps } = this.props;

    let classes = classNames('mdl-layout__tab-bar', {
      'mdl-js-ripple-effect': ripple ,
    }, className);

    return (
      <div className={classes} {...otherProps}>
        {cloneChildren(this.props.children, child => ({
          className: classNames('mdl-layout__tab', child.props.className),
        }))}
      </div>
    );
  }
}

export default HeaderTabs;
