import React, { Component } from "react";

// Load Highcharts
var Highcharts = require("highcharts");

// Load a module
require("highcharts/modules/funnel")(Highcharts);

var Highcharts = require("highcharts"),
  addFunnel = require("highcharts/modules/funnel");
// After window is present, normally on componentDidMount or in the callback of ReactDOM.render
addFunnel(Highcharts);
