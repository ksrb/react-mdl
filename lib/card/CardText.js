'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var CardText = (function (_React$Component) {
  _inherits(CardText, _React$Component);

  function CardText() {
    _classCallCheck(this, CardText);

    _React$Component.apply(this, arguments);
  }

  CardText.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;

    var otherProps = _objectWithoutProperties(_props, ['className']);

    return _react2['default'].createElement(
      'div',
      _extends({ className: _classnames2['default']('mdl-card__supporting-text', className) }, otherProps),
      this.props.children
    );
  };

  return CardText;
})(_react2['default'].Component);

exports['default'] = CardText;
module.exports = exports['default'];