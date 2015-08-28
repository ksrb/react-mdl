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

var Slider = (function (_MDL$UpgradedComponent) {
  _inherits(Slider, _MDL$UpgradedComponent);

  function Slider() {
    var _this = this;

    _classCallCheck(this, Slider);

    _MDL$UpgradedComponent.apply(this, arguments);

    this._handleChange = function (event) {
      _this.props.onChange(parseFloat(event.target.value));
    };
  }

  Slider.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var max = _props.max;
    var min = _props.min;
    var onChange = _props.onChange;
    var value = _props.value;

    var otherProps = _objectWithoutProperties(_props, ['className', 'max', 'min', 'onChange', 'value']);

    var classes = _classnames2['default']('mdl-slider mdl-js-slider', className);

    return _react2['default'].createElement('input', _extends({
      className: classes,
      type: 'range',
      min: min,
      max: max,
      value: value,
      tabIndex: '0',
      onChange: this._handleChange
    }, otherProps));
  };

  _createClass(Slider, null, [{
    key: 'propTypes',
    value: {
      className: _react.PropTypes.string,
      max: _react.PropTypes.number.isRequired,
      min: _react.PropTypes.number.isRequired,
      onChange: _react.PropTypes.func.isRequired,
      value: _react.PropTypes.number
    },
    enumerable: true
  }]);

  return Slider;
})(_mdlbase2['default'].UpgradedComponent);

exports['default'] = Slider;
module.exports = exports['default'];