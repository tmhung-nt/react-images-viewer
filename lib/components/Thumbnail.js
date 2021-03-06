'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _util = require('../utils/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Thumbnail(_ref) {
  var index = _ref.index,
      src = _ref.src,
      thumbnail = _ref.thumbnail,
      active = _ref.active,
      _onClick = _ref.onClick,
      theme = _ref.theme;

  var url = thumbnail || src;
  var classes = _noImportant.StyleSheet.create((0, _util.deepMerge)(defaultStyles, theme));

  return _react2.default.createElement('div', {
    className: (0, _noImportant.css)(classes.thumbnail, active && classes.thumbnail__active),
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      _onClick(index);
    },
    style: { backgroundImage: 'url("' + url + '")' }
  });
}

Thumbnail.propTypes = {
  theme: _propTypes2.default.object,
  active: _propTypes2.default.bool,
  index: _propTypes2.default.number,
  onClick: _propTypes2.default.func.isRequired,
  src: _propTypes2.default.string,
  thumbnail: _propTypes2.default.string
};

var defaultStyles = {
  thumbnail: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: 2,
    boxShadow: 'inset 0 0 0 1px hsla(0, 0%, 100%, .2)',
    cursor: 'pointer',
    display: 'inline-block',
    height: _theme2.default.thumbnail.size,
    margin: _theme2.default.thumbnail.gutter,
    overflow: 'hidden',
    width: _theme2.default.thumbnail.size
  },
  thumbnail__active: {
    boxShadow: 'inset 0 0 0 2px ' + _theme2.default.thumbnail.activeBorderColor
  }
};

exports.default = Thumbnail;