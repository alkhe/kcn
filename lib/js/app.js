"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var Flux = _interopRequire(require("alt"));

var _ = _interopRequire(require("lodash"));

module.exports = React.createClass({
	displayName: "exports",

	render: function render() {
		return React.createElement(
			"div",
			null,
			"Welcome to kcn: Node Kancolle"
		);
	}
});