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

var DataTable = (function (_React$Component) {
    _inherits(DataTable, _React$Component);

    function DataTable() {
        _classCallCheck(this, DataTable);

        _React$Component.apply(this, arguments);
    }

    DataTable.prototype._getCellClass = function _getCellClass(column) {
        return !column.numeric ? 'mdl-data-table__cell--non-numeric' : '';
    };

    DataTable.prototype.render = function render() {
        var _this = this;

        var _props = this.props;
        var className = _props.className;
        var columns = _props.columns;
        var data = _props.data;
        var selectable = _props.selectable;

        var otherProps = _objectWithoutProperties(_props, ['className', 'columns', 'data', 'selectable']);

        var classes = _classnames2['default']('mdl-data-table mdl-js-data-table', {
            'mdl-data-table--selectable': selectable
        }, className);

        return _react2['default'].createElement(
            'table',
            _extends({ className: classes }, otherProps),
            _react2['default'].createElement(
                'thead',
                null,
                _react2['default'].createElement(
                    'tr',
                    null,
                    columns.map(function (column) {
                        return _react2['default'].createElement(
                            'th',
                            { key: column.name, style: { textAlign: "center" }, className: _this._getCellClass(column) },
                            column.label
                        );
                    })
                )
            ),
            _react2['default'].createElement(
                'tbody',
                null,
                data.map(function (e, i) {
                    return _react2['default'].createElement(
                        'tr',
                        { key: e.key ? e.key : i },
                        columns.map(function (column) {
                            return _react2['default'].createElement(
                                'td',
                                { key: column.name, style: { textAlign: "center" }, className: _this._getCellClass(column) },
                                e[column.name]
                            );
                        })
                    );
                })
            )
        );
    };

    _createClass(DataTable, null, [{
        key: 'propTypes',
        value: {
            className: _react.PropTypes.string,
            columns: _react.PropTypes.arrayOf(_react.PropTypes.shape({
                label: _react.PropTypes.string,
                name: _react.PropTypes.string,
                numeric: _react.PropTypes.bool
            })).isRequired,
            data: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
            selectable: _react.PropTypes.bool
        },
        enumerable: true
    }]);

    return DataTable;
})(_react2['default'].Component);

exports['default'] = _utilsMdlUpgrade2['default'](DataTable);
module.exports = exports['default'];