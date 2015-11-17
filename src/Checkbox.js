'use strict';

import React, { PropTypes } from 'react';
import MDL from './mdlbase';

class Checkbox extends MDL.UpgradedComponent {
  static propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }

  _handleChange = (event) => {
    this.props.onChange(event.target.checked);
  }

  render() {
    let { checked, disabled, id, label } = this.props;

    let inputId = 'checkbox-' + (label || id).replace(/\s+/g, '');

    return (
      <label className="mdl-checkbox mdl-js-checkbox" htmlFor={inputId}>
        <input
          type="checkbox"
          id={inputId}
          className='mdl-checkbox__input'
          checked={checked}
          disabled={disabled}
          onChange={this._handleChange}
          />
          {this.props.label ? <span className="mdl-checkbox__label">{label}</span> : null}
      </label>
    );
  }
}

export default Checkbox;
