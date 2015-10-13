'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import MDL from './mdlbase';

class ProgressBar extends MDL.UpgradedComponent {
  static propTypes = {
    buffer: PropTypes.number,
    className: PropTypes.string,
    indeterminate: PropTypes.bool,
    progress: PropTypes.number,
  }

  componentDidMount(){
    super();
    this.setProgress(this.props.progress);
    this.setBuffer(this.props.buffer);
  }

  componentDidUpdate() {
    this.setProgress(this.props.progress);
    this.setBuffer(this.props.buffer);
  }

  setProgress(progress) {
    if (!this.props.indeterminate && typeof progress !== 'undefined') {
      ReactDOM.findDOMNode(this).MaterialProgress.setProgress(progress);
    }
  }

  setBuffer(buffer) {
    if (typeof buffer !== 'undefined') {
      ReactDOM.findDOMNode(this).MaterialProgress.setBuffer(buffer);
    }
  }

  render() {
    let { buffer, className, indeterminate, progress, ...otherProps } = this.props;

    let classes = classNames('mdl-progress mdl-js-progress', {
      'mdl-progress__indeterminate': indeterminate,
    }, className);

    return <div className={classes} {...otherProps}></div>;
  }
}

export default ProgressBar;
