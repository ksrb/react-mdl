'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from './Icon';
import MDL from './mdlbase';

class IconToggle extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    ripple: PropTypes.bool,
  }

  _handleChange = (event) => {
    this.props.onChange(event.target.checked);
  }

  render() {
    let { className, checked, disabled, id, name, ripple, ...otherProps } = this.props;
    let inputId = 'icon-toggle-' + id;

    // enable ripple by default
    ripple = ripple !== false;

    let classes = classNames('mdl-icon-toggle mdl-js-icon-toggle', {
      'mdl-js-ripple-effect': ripple,
    }, className);

    return (
      <label className={classes} htmlFor={inputId}>
        <input
          type="checkbox"
          id={inputId}
          className="mdl-icon-toggle__input"
          checked={checked}
          disabled={disabled}
          onChange={this._handleChange}
          />
          <Icon className="mdl-icon-toggle__label" name={name} />
        </label>
    );
  }
}

export default IconToggle;
