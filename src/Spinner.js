'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import MDL from './mdlbase';

class Spinner extends MDL.UpgradedComponent {
  static propTypes = {
    className: PropTypes.string,
    singleColor: PropTypes.bool,
  }

  render() {
    let { className, singleColor, ...otherProps } = this.props;

    let classes = classNames('mdl-spinner mdl-js-spinner is-active', {
      'mdl-spinner--single-color': singleColor,
    }, className);

    return <div className={classes} {...otherProps}></div>;
  }
}

export default Spinner;
