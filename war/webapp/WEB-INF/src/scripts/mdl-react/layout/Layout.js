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

var _utilsMdlUpgrade = require('../utils/mdlUpgrade');

var _utilsMdlUpgrade2 = _interopRequireDefault(_utilsMdlUpgrade);

var _utilsBasicClassCreator = require('../utils/basicClassCreator');

var _utilsBasicClassCreator2 = _interopRequireDefault(_utilsBasicClassCreator);

var Layout = (function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout() {
        _classCallCheck(this, Layout);

        _React$Component.apply(this, arguments);
    }

    Layout.prototype.render = function render() {
        var _props = this.props;
        var className = _props.className;
        var fixedDrawer = _props.fixedDrawer;
        var fixedHeader = _props.fixedHeader;
        var fixedTabs = _props.fixedTabs;

        var otherProps = _objectWithoutProperties(_props, ['className', 'fixedDrawer', 'fixedHeader', 'fixedTabs']);

        var classes = _classnames2['default']('mdl-layout mdl-js-layout', {
            'mdl-layout--fixed-drawer': fixedDrawer,
            'mdl-layout--fixed-header': fixedHeader,
            'mdl-layout--fixed-tabs': fixedTabs
        }, className);

        return _react2['default'].createElement(
            'div',
            _extends({ className: classes }, otherProps),
            this.props.children
        );
    };

    _createClass(Layout, null, [{
        key: 'propTypes',
        value: {
            className: _react.PropTypes.string,
            fixedDrawer: _react.PropTypes.bool,
            fixedHeader: _react.PropTypes.bool,
            fixedTabs: _react.PropTypes.bool
        },
        enumerable: true
    }]);

    return Layout;
})(_react2['default'].Component);

exports['default'] = _utilsMdlUpgrade2['default'](Layout);

var _Header2 = require('./Header');

var _Header3 = _interopRequireDefault(_Header2);

exports.Header = _Header3['default'];

var _Drawer2 = require('./Drawer');

var _Drawer3 = _interopRequireDefault(_Drawer2);

exports.Drawer = _Drawer3['default'];

var _HeaderRow2 = require('./HeaderRow');

var _HeaderRow3 = _interopRequireDefault(_HeaderRow2);

exports.HeaderRow = _HeaderRow3['default'];

var _Navigation2 = require('./Navigation');

var _Navigation3 = _interopRequireDefault(_Navigation2);

exports.Navigation = _Navigation3['default'];

var _HeaderTabs2 = require('./HeaderTabs');

var _HeaderTabs3 = _interopRequireDefault(_HeaderTabs2);

exports.HeaderTabs = _HeaderTabs3['default'];

var _Spacer2 = require('./Spacer');

var _Spacer3 = _interopRequireDefault(_Spacer2);

exports.Spacer = _Spacer3['default'];
var Content = _utilsBasicClassCreator2['default']('Content', 'mdl-layout__content', 'main');
exports.Content = Content;