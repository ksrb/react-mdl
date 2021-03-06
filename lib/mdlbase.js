/*global componentHandler*/
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var MDLComponent = (function (_React$Component) {
  _inherits(MDLComponent, _React$Component);

  function MDLComponent() {
    _classCallCheck(this, MDLComponent);

    _React$Component.apply(this, arguments);
  }

  return MDLComponent;
})(_react2['default'].Component);

var MDLUpgradedComponent = (function (_MDLComponent) {
  _inherits(MDLUpgradedComponent, _MDLComponent);

  function MDLUpgradedComponent() {
    _classCallCheck(this, MDLUpgradedComponent);

    _MDLComponent.apply(this, arguments);
  }

  MDLUpgradedComponent.prototype.componentDidMount = function componentDidMount() {
    componentHandler.upgradeElement(_reactDom2['default'].findDOMNode(this));
  };

  MDLUpgradedComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    componentHandler.downgradeElements(_reactDom2['default'].findDOMNode(this));
  };

  return MDLUpgradedComponent;
})(MDLComponent);

exports['default'] = {
  UpgradedComponent: MDLUpgradedComponent,
  Component: MDLComponent
};
module.exports = exports['default'];