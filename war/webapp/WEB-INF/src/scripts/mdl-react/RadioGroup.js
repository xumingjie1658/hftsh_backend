'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var RadioGroup = (function (_React$Component) {
    _inherits(RadioGroup, _React$Component);

    function RadioGroup() {
        var _this = this;

        _classCallCheck(this, RadioGroup);

        _React$Component.apply(this, arguments);

        this._handleChange = function (value) {
            _this.props.onChange(value);
        };
    }

    RadioGroup.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props;
        var name = _props.name;
        var onChange = _props.onChange;
        var value = _props.value;
        var children = _props.children;
        var container = _props.container;
        var childContainer = _props.childContainer;

        var otherProps = _objectWithoutProperties(_props, ['name', 'onChange', 'value', 'children', 'container', 'childContainer']);

        return _react2['default'].createElement(container, otherProps, _react2['default'].Children.map(children, function (child) {
            var clonedChild = _react2['default'].cloneElement(child, {
                name: name,
                checked: child.props.value === value,
                onChange: _this2._handleChange
            });

            return childContainer ? _react2['default'].createElement(childContainer, {}, clonedChild) : clonedChild;
        }));
    };

    _createClass(RadioGroup, null, [{
        key: 'propTypes',
        value: {
            childContainer: _react.PropTypes.string,
            children: _react.PropTypes.arrayOf(function (props, propName, componentName) {
                var prop = props[propName];
                if (prop.type !== _Radio2['default']) {
                    return new Error('`' + componentName + '` only accepts `Radio` as children.');
                }
            }),
            container: _react.PropTypes.string,
            name: _react.PropTypes.string.isRequired,
            onChange: _react.PropTypes.func.isRequired,
            value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            container: 'div'
        },
        enumerable: true
    }]);

    return RadioGroup;
})(_react2['default'].Component);

exports['default'] = RadioGroup;
module.exports = exports['default'];