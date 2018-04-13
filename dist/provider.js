"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _context = require("./context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Provider = function (_Component) {
  _inherits(Provider, _Component);

  function Provider() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { initialState: {}, actions: {} };

    _classCallCheck(this, Provider);

    var _this = _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).call(this, props));

    _this.mapActions = function () {
      return Object.keys(_this.props.actions).reduce(function (acc, key) {
        return _extends({}, acc, _defineProperty({}, key, _this.createAction(_this.props.actions[key])));
      }, {});
    };

    _this.createAction = function (actionDefinition) {
      return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var newState = actionDefinition.apply(undefined, [_this.state].concat(args));
        _this.setState(newState);
      };
    };

    _this.state = _extends({}, props.initialState);
    return _this;
  }

  _createClass(Provider, [{
    key: "render",
    value: function render() {
      var actions = this.mapActions();
      var value = { actions: actions, state: this.state };

      return _react2.default.createElement(
        _context.Provider,
        { value: value },
        this.props.children
      );
    }
  }]);

  return Provider;
}(_react.Component);

exports.default = Provider;