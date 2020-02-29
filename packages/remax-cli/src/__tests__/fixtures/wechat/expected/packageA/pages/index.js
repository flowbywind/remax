'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../../index-d1de7ef5.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var wechat = require('../../wechat-81d1e24a.js');

var pageA = function pageA() {
  var props = {};
  var TextElement = React.cloneElement(React.createElement(wechat.Text, null));

  function handleClick() {}

  function handleTouchStart() {}

  return React.createElement(wechat.View, null, React.createElement(wechat.View, index$1._extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo"), TextElement);
};

var _page = pageA;
var index = Page(index$1.createPageConfig(_page));

exports.default = index;
