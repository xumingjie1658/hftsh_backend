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

var _utilsMDLComponent = require('./utils/MDLComponent');

var _utilsMDLComponent2 = _interopRequireDefault(_utilsMDLComponent);

var Tooltip = (function (_React$Component) {
    _inherits(Tooltip, _React$Component);

    function Tooltip() {
        _classCallCheck(this, Tooltip);

        _React$Component.apply(this, arguments);
    }

    Tooltip.prototype.render = function render() {
        var _props = this.props;
        var label = _props.label;
        var large = _props.large;
        var children = _props.children;

        var otherProps = _objectWithoutProperties(_props, ['label', 'large', 'children']);

        var id = Math.random().toString(36).substr(2);

        if (typeof label === 'string') {
            label = _react2['default'].createElement(
                'span',
                null,
                label
            );
        }

        var element;
        if (typeof children === 'string') {
            element = _react2['default'].createElement(
                'span',
                null,
                children
            );
        } else {
            element = _react2['default'].Children.only(this.props.children);
        }

        return _react2['default'].createElement(
            'div',
            _extends({ style: { display: 'inline-block' } }, otherProps),
            _react2['default'].cloneElement(element, { id: id }),
            _react2['default'].createElement(
                _utilsMDLComponent2['default'],
                null,
                _react2['default'].cloneElement(label, {
                    htmlFor: id,
                    className: _classnames2['default']('mdl-tooltip', {
                        'mdl-tooltip--large': large
                    })
                })
            )
        );
    };

    _createClass(Tooltip, null, [{
        key: 'propTypes',
        value: {
            children: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]).isRequired,
            label: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]).isRequired,
            large: _react.PropTypes.bool
        },
        enumerable: true
    }]);

    return Tooltip;
})(_react2['default'].Component);

exports['default'] = Tooltip;
module.exports = exports['default'];