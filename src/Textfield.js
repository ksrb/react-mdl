'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
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
    onChange: PropTypes.func,
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
    if (this.props.required !== prevProps.required ||
        this.props.pattern !== prevProps.pattern ||
          this.props.value !== prevProps.value) {
      ReactDOM.findDOMNode(this).MaterialTextfield.checkValidity();
    }
    if (this.props.disabled !== prevProps.disabled) {
      ReactDOM.findDOMNode(this).MaterialTextfield.checkDisabled();
    }
    if (this.props.error && !this.props.pattern) {
      // At every re-render, mdl will set 'is-invalid' class according to the 'pattern' props validity
      // If we want to force the error display, we have to override mdl 'is-invalid' value.
      let elt = ReactDOM.findDOMNode(this);
      elt.className = classNames(elt.className, 'is-invalid');
    }
    if (this.props.value !== prevProps.value) {
      ReactDOM.findDOMNode(this).MaterialTextfield.checkDirty();
    }
  }

  _handleChange = (e) => {
    this.props.onChange(e.target.value, e.target.validity.valid);
  }

  render() {
    let { className, inputClassName, error, expandable, expandableIcon, floatingLabel, label, maxRows, onChange, rows, style, value, ...otherProps } = this.props;

    let hasRows = !!rows;
    let inputId = 'textfield-' + label.replace(/[^a-z0-9]/gi, '');
    let inputTag = hasRows || maxRows > 1 ? 'textarea' : 'input';

    let inputProps = {
      className: classNames('mdl-textfield__input', inputClassName),
      id: inputId,
      key: inputId,
      value,
      rows,
      ...otherProps,
    };

    if (onChange) { inputProps.onChange = this._handleChange; }

    let input = React.createElement(inputTag, inputProps);

    let inputAndLabelError = [
      input,
      <label key="label" className="mdl-textfield__label" htmlFor={inputId}>{label}</label>,
        error ? (
          <span key="error" className="mdl-textfield__error">{error}</span>
      ) : null,
    ];

    let containerClasses = classNames('mdl-textfield mdl-js-textfield', {
      'mdl-textfield--floating-label': floatingLabel,
      'mdl-textfield--expandable': expandable,
    }, className);

    let field = (expandable) ? <div className='mdl-textfield__expandable-holder'>{inputAndLabelError}</div> : inputAndLabelError;

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
