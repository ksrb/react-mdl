'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _mdlbase = require('./mdlbase');

var _mdlbase2 = _interopRequireDefault(_mdlbase);

var Radio = (function (_MDL$UpgradedComponent) {
  _inherits(Radio, _MDL$UpgradedComponent);

  function Radio() {
    var _this = this;

    _classCallCheck(this, Radio);

    _MDL$UpgradedComponent.apply(this, arguments);

    this._handleChange = function (event) {
      _this.props.onChange(event.target.value);
    };
  }

  Radio.prototype.render = function render() {
    var _props = this.props;
    var checked = _props.checked;
    var className = _props.className;
    var disabled = _props.disabled;
    var name = _props.name;
    var ripple = _props.ripple;
    var value = _props.value;

    var inputId = 'radio-' + name.replace(/\s+/g, '') + '-' + value.replace(/\s+/g, '');

    // enable ripple by default
    ripple = ripple !== false;

    var classes = _classnames2['default']('mdl-radio mdl-js-radio', {
      'mdl-js-ripple-effect': ripple
    }, className);

    return _react2['default'].createElement(
      'label',
      { className: classes, htmlFor: inputId },
      _react2['default'].createElement('input', {
        type: 'radio',
        id: inputId,
        className: 'mdl-radio__button',
        name: name,
        value: value,
        checked: checked,
        disabled: disabled,
        onChange: this._handleChange
      }),
      _react2['default'].createElement(
        'span',
        { className: 'mdl-radio__label' },
        this.props.children
      )
    );
  };

  _createClass(Radio, null, [{
    key: 'propTypes',
    value: {
      checked: _react.PropTypes.bool,
      className: _react.PropTypes.string,
      disabled: _react.PropTypes.bool,
      name: _react.PropTypes.string,
      onChange: _react.PropTypes.func,
      ripple: _react.PropTypes.bool,
      value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired
    },
    enumerable: true
  }]);

  return Radio;
})(_mdlbase2['default'].UpgradedComponent);

exports['default'] = Radio;
module.exports = exports['default'];