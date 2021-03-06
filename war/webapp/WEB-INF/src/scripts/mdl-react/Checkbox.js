'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsMdlUpgrade = require('./utils/mdlUpgrade');

var _utilsMdlUpgrade2 = _interopRequireDefault(_utilsMdlUpgrade);

var Checkbox = (function (_React$Component) {
    _inherits(Checkbox, _React$Component);

    function Checkbox() {
        var _this = this;

        _classCallCheck(this, Checkbox);

        _React$Component.apply(this, arguments);

        this._handleChange = function (event) {
            _this.props.onChange(event.target.checked);
        };
    }

    Checkbox.prototype.render = function render() {
        var _props = this.props;
        var checked = _props.checked;
        var disabled = _props.disabled;
        var id = _props.id;
        var label = _props.label;
        var ripple = _props.ripple;

        var inputId = 'checkbox-' + (label || id).replace(/\s+/g, '');
        var classes = _classnames2['default']('mdl-checkbox mdl-js-checkbox', {
            'mdl-js-ripple-effect': ripple
        });

        return _react2['default'].createElement(
            'label',
            { className: classes, htmlFor: id },
            _react2['default'].createElement('input', {
                type: 'checkbox',
                id: inputId,
                className: 'mdl-checkbox__input',
                checked: checked,
                disabled: disabled,
                onChange: this._handleChange
            }),
            this.props.label ? _react2['default'].createElement(
                'span',
                { className: 'mdl-checkbox__label' },
                label
            ) : null
        );
    };

    _createClass(Checkbox, null, [{
        key: 'propTypes',
        value: {
            checked: _react.PropTypes.bool,
            disabled: _react.PropTypes.bool,
            id: _react.PropTypes.string,
            label: _react.PropTypes.string,
            onChange: _react.PropTypes.func.isRequired,
            ripple: _react.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            ripple: true
        },
        enumerable: true
    }]);

    return Checkbox;
})(_react2['default'].Component);

exports['default'] = _utilsMdlUpgrade2['default'](Checkbox);
module.exports = exports['default'];