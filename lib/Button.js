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

var Button = (function (_MDL$UpgradedComponent) {
  _inherits(Button, _MDL$UpgradedComponent);

  function Button() {
    _classCallCheck(this, Button);

    _MDL$UpgradedComponent.apply(this, arguments);
  }

  Button.prototype.render = function render() {
    var _props = this.props;
    var accent = _props.accent;
    var className = _props.className;
    var colored = _props.colored;
    var primary = _props.primary;
    var raised = _props.raised;
    var ripple = _props.ripple;

    var otherProps = _objectWithoutProperties(_props, ['accent', 'className', 'colored', 'primary', 'raised', 'ripple']);

    var buttonClasses = _classnames2['default']('mdl-button mdl-js-button', {
      'mdl-js-ripple-effect': ripple,
      'mdl-button--raised': raised,
      'mdl-button--colored': colored,
      'mdl-button--primary': primary,
      'mdl-button--accent': accent
    }, className);

    return _react2['default'].createElement(
      'button',
      _extends({ className: buttonClasses }, otherProps),
      this.props.children
    );
  };

  _createClass(Button, null, [{
    key: 'propTypes',
    value: {
      accent: _react.PropTypes.bool,
      className: _react.PropTypes.string,
      colored: _react.PropTypes.bool,
      primary: _react.PropTypes.bool,
      raised: _react.PropTypes.bool,
      ripple: _react.PropTypes.bool
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      ripple: true
    },
    enumerable: true
  }]);

  return Button;
})(_mdlbase2['default'].UpgradedComponent);

exports['default'] = Button;
module.exports = exports['default'];