'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../index-bc96dec7.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var toutiao = require('../toutiao-5bf8d7d9.js');

var D = index$1.createNativeComponent('d-0');
var F = index$1.createNativeComponent('f-0');


var Hello = (function () {
  return React.createElement(toutiao.View, null, React.createElement(F, null), React.createElement(D, null));
});

var Nihao = (function () {
  return React.createElement(toutiao.View, null, React.createElement(Hello, null));
});

var _page = function _page() {
  return React.createElement(toutiao.View, null, React.createElement(Nihao, null));
};

var index2 = Page(index$1.createPageConfig(_page));

exports.default = index2;
