'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _mdlbase = require('./mdlbase');

var _mdlbase2 = _interopRequireDefault(_mdlbase);

var Textfield = (function (_MDL$UpgradedComponent) {
  _inherits(Textfield, _MDL$UpgradedComponent);

  function Textfield() {
    var _this = this;

    _classCallCheck(this, Textfield);

    _MDL$UpgradedComponent.apply(this, arguments);

    this._handleChange = function (e) {
      _this.props.onChange(e.target.value);
    };
  }

  Textfield.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.required !== prevProps.required || this.props.pattern !== prevProps.pattern) {
      _react2['default'].findDOMNode(this).MaterialTextfield.checkValidity();
    }
    if (this.props.disabled !== prevProps.disabled) {
      _react2['default'].findDOMNode(this).MaterialTextfield.checkDisabled();
    }
  };

  Textfield.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var inputClassName = _props.inputClassName;
    var error = _props.error;
    var expandable = _props.expandable;
    var expandableIcon = _props.expandableIcon;
    var floatingLabel = _props.floatingLabel;
    var label = _props.label;
    var maxRows = _props.maxRows;
    var onChange = _props.onChange;
    var rows = _props.rows;
    var style = _props.style;
    var value = _props.value;

    var otherProps = _objectWithoutProperties(_props, ['className', 'inputClassName', 'error', 'expandable', 'expandableIcon', 'floatingLabel', 'label', 'maxRows', 'onChange', 'rows', 'style', 'value']);

    var hasRows = !!rows;
    var inputId = 'textfield-' + label.replace(/[^a-z0-9]/gi, '');
    var inputTag = hasRows || maxRows > 1 ? 'textarea' : 'input';

    var input = _react2['default'].createElement(inputTag, _extends({
      className: _classnames2['default']('mdl-textfield__input', inputClassName),
      id: inputId,
      key: inputId,
      value: value,
      onChange: this._handleChange,
      rows: rows
    }, otherProps));

    var inputAndLabelError = [input, _react2['default'].createElement(
      'label',
      { key: 'label', className: 'mdl-textfield__label', htmlFor: inputId },
      label
    ), !error ? null : _react2['default'].createElement(
      'span',
      { key: 'error', className: 'mdl-textfield__error' },
      error
    )];

    var containerClasses = _classnames2['default']('mdl-textfield mdl-js-textfield', {
      'mdl-textfield--floating-label': floatingLabel,
      'mdl-textfield--expandable': expandable
    }, className);

    var field = expandable ? _react2['default'].createElement('div', { className: 'mdl-textfield__expandable-holder' }, inputAndLabelError) : inputAndLabelError;

    return _react2['default'].createElement(
      'div',
      { className: containerClasses, style: style },
      !expandable ? null : _react2['default'].createElement(
        'label',
        { className: 'mdl-button mdl-js-button mdl-button--icon', htmlFor: inputId },
        _react2['default'].createElement(
          'i',
          { className: 'material-icons' },
          expandableIcon
        )
      ),
      field
    );
  };

  _createClass(Textfield, null, [{
    key: 'propTypes',
    value: {
      className: _react.PropTypes.string,
      disabled: _react.PropTypes.bool,
      error: _react.PropTypes.string,
      expandable: _react.PropTypes.bool,
      expandableIcon: _react.PropTypes.string,
      floatingLabel: _react.PropTypes.bool,
      inputClassName: _react.PropTypes.string,
      label: _react.PropTypes.string.isRequired,
      maxRows: _react.PropTypes.number,
      onChange: _react.PropTypes.func.isRequired,
      pattern: _react.PropTypes.string,
      required: _react.PropTypes.bool,
      rows: _react.PropTypes.number,
      style: _react.PropTypes.object,
      value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
    },
    enumerable: true
  }]);

  return Textfield;
})(_mdlbase2['default'].UpgradedComponent);

exports['default'] = Textfield;
module.exports = exports['default'];