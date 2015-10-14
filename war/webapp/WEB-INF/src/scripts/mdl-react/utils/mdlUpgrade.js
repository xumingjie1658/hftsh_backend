'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MDLComponent = require('./MDLComponent');

var _MDLComponent2 = _interopRequireDefault(_MDLComponent);

exports['default'] = function (Component) {
    var render = Component.prototype.render;

    Component.prototype.render = function () {
        return _react2['default'].createElement(
            _MDLComponent2['default'],
            null,
            render.call(this)
        );
    };

    return Component;
};

module.exports = exports['default'];