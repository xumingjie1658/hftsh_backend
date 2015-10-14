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

var _utilsMdlUpgrade = require('./utils/mdlUpgrade');

var _utilsMdlUpgrade2 = _interopRequireDefault(_utilsMdlUpgrade);

var _utilsBasicClassCreator = require('./utils/basicClassCreator');

var _utilsBasicClassCreator2 = _interopRequireDefault(_utilsBasicClassCreator);

var Menu = (function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu() {
        _classCallCheck(this, Menu);

        _React$Component.apply(this, arguments);
    }

    Menu.prototype.render = function render() {
        var _classNames;

        var _props = this.props;
        var align = _props.align;
        var className = _props.className;
        var ripple = _props.ripple;
        var target = _props.target;
        var valign = _props.valign;

        var otherProps = _objectWithoutProperties(_props, ['align', 'className', 'ripple', 'target', 'valign']);

        var classes = _classnames2['default']('mdl-menu mdl-js-menu', (_classNames = {}, _classNames['mdl-menu--' + valign + '-' + align] = true, _classNames['mdl-js-ripple-effect'] = ripple, _classNames), className);

        return _react2['default'].createElement(
            'ul',
            _extends({ className: classes, htmlFor: target }, otherProps),
            this.props.children
        );
    };

    _createClass(Menu, null, [{
        key: 'propTypes',
        value: {
            align: _react.PropTypes.oneOf(['left', 'right']),
            className: _react.PropTypes.string,
            ripple: _react.PropTypes.bool,
            target: _react.PropTypes.string.isRequired,
            valign: _react.PropTypes.oneOf(['bottom', 'top'])
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            align: 'left',
            valign: 'bottom',
            ripple: true
        },
        enumerable: true
    }]);

    return Menu;
})(_react2['default'].Component);

exports['default'] = _utilsMdlUpgrade2['default'](Menu);
var MenuItem = _utilsBasicClassCreator2['default']('MenuItem', 'mdl-menu__item', 'li');
exports.MenuItem = MenuItem;