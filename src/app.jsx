/** @jsx React.DOM */

//require("../bower_components/ionic/release/css/ionic.css")
//require("../styles/styles.css")

var $ = require('jquery');

var React = require('react/addons');
//var ReactIonic = require('./react-ionic');


var d = require('./demo');
var Demo = d.demo();

$('body').append("<div id='content'>");

React.render(
	<Demo />, document.getElementById('content')
)
