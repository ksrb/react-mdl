'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import MDL from './mdlbase';

class Radio extends MDL.UpgradedComponent {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    ripple: PropTypes.bool,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  }

  _handleChange = (event) => {
    this.props.onChange(event.target.value);
  }

  render() {
    let { checked, className, disabled, name, ripple, value } = this.props;
    let inputId = 'radio-' + name.replace(/\s+/g, '') + '-' + value.replace(/\s+/g, '');

    // enable ripple by default
    ripple = ripple !== false;

    let classes = classNames('mdl-radio mdl-js-radio', {
      'mdl-js-ripple-effect': ripple,
    }, className);

    return (
      <label className={classes} htmlFor={inputId}>
        <input
          type="radio"
          id={inputId}
          className="mdl-radio__button"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={this._handleChange}
          />
          <span className="mdl-radio__label">{this.props.children}</span>
        </label>
    );
  }
}

export default Radio;
