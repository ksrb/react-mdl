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

var _clamp = require('clamp');

var _clamp2 = _interopRequireDefault(_clamp);

var shadows = ['mdl-shadow--2dp', 'mdl-shadow--3dp', 'mdl-shadow--4dp', 'mdl-shadow--6dp', 'mdl-shadow--8dp'];

var Card = (function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    _classCallCheck(this, Card);

    _React$Component.apply(this, arguments);
  }

  Card.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var shadowLevel = _props.shadowLevel;

    var otherProps = _objectWithoutProperties(_props, ['className', 'shadowLevel']);

    shadowLevel = _clamp2['default'](shadowLevel || 0, 0, shadows.length - 1);

    var classes = _classnames2['default']('mdl-card', shadows[shadowLevel], className);

    return _react2['default'].createElement(
      'div',
      _extends({ className: classes }, otherProps),
      this.props.children
    );
  };

  _createClass(Card, null, [{
    key: 'propTypes',
    value: {
      className: _react.PropTypes.string,
      shadowLevel: _react.PropTypes.number
    },
    enumerable: true
  }]);

  return Card;
})(_react2['default'].Component);

exports['default'] = Card;

var _CardTitle2 = require('./CardTitle');

var _CardTitle3 = _interopRequireDefault(_CardTitle2);

exports.CardTitle = _CardTitle3['default'];

var _CardActions2 = require('./CardActions');

var _CardActions3 = _interopRequireDefault(_CardActions2);

exports.CardActions = _CardActions3['default'];

var _CardText2 = require('./CardText');

var _CardText3 = _interopRequireDefault(_CardText2);

exports.CardText = _CardText3['default'];

var _CardMenu2 = require('./CardMenu');

var _CardMenu3 = _interopRequireDefault(_CardMenu2);

exports.CardMenu = _CardMenu3['default'];