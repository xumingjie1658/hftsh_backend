'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _reactDom = require('react-dom');

var MDLComponent = (function (_Component) {
    _inherits(MDLComponent, _Component);

    function MDLComponent() {
        _classCallCheck(this, MDLComponent);

        _Component.apply(this, arguments);
    }

    MDLComponent.prototype.componentDidMount = function componentDidMount() {
        componentHandler.upgradeElement(_reactDom.findDOMNode(this));
    };

    MDLComponent.prototype.componentWillUnmount = function componentWillUnmount() {
        componentHandler.downgradeElements(_reactDom.findDOMNode(this));
    };

    MDLComponent.prototype.render = function render() {
        return _react.Children.only(this.props.children);
    };

    return MDLComponent;
})(_react.Component);

exports['default'] = MDLComponent;
module.exports = exports['default'];