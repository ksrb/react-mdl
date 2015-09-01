'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import MDL from './mdlbase';

class Textfield extends MDL.UpgradedComponent {

  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    expandable: PropTypes.bool,
    expandableIcon: PropTypes.string,
    floatingLabel: PropTypes.bool,
    inputClassName: PropTypes.string,
    label: PropTypes.string.isRequired,
    maxRows: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    pattern: PropTypes.string,
    required: PropTypes.bool,
    rows: PropTypes.number,
    style: PropTypes.object,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }

  componentDidUpdate(prevProps) {
    if ( this.props.required !== prevProps.required || this.props.pattern !== prevProps.pattern) {
      React.findDOMNode(this).MaterialTextfield.checkValidity();
    }
    if (this.props.disabled !== prevProps.disabled) {
      React.findDOMNode(this).MaterialTextfield.checkDisabled();
    }
  }

  _handleChange = (e) => {
    this.props.onChange(e.target.value);
  }

  render() {
    let { className, inputClassName, error, expandable, expandableIcon, floatingLabel, label, maxRows, onChange, rows, style, value, ...otherProps } = this.props;

    let hasRows = !!rows;
    let inputId = 'textfield-' + label.replace(/[^a-z0-9]/gi, '');
    let inputTag = hasRows || maxRows > 1 ? 'textarea' : 'input';

    let input = React.createElement(inputTag, {
      className: classNames('mdl-textfield__input', inputClassName),
      id: inputId,
      key: inputId,
      value,
      onChange: this._handleChange,
      rows,
      ...otherProps,
    });

    let inputAndLabelError = [
      input,
      (<label key="label" className="mdl-textfield__label" htmlFor={inputId}>{label}</label>),
      !error ? null : (<span key="error" className="mdl-textfield__error">{error}</span>),
    ];

    let containerClasses = classNames('mdl-textfield mdl-js-textfield', {
      'mdl-textfield--floating-label': floatingLabel,
      'mdl-textfield--expandable': expandable,
    }, className);

    let field = (expandable)
      ? React.createElement('div', {className: 'mdl-textfield__expandable-holder'}, inputAndLabelError)
      : inputAndLabelError;

    return (
      <div className={containerClasses} style={style}>
        {!expandable ? null : (
          <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor={inputId}>
            <i className="material-icons">{expandableIcon}</i>
          </label>
        )}
        {field}
      </div>
    );
  }
}

export default Textfield;
