/** @jsx React.DOM */

require("../bower_components/ionic/release/css/ionic.css")
require("../bower_components/ionicons/css/ionicons.css")
require("../styles/styles.css")

var $ = require('jquery');

var React = require('react/addons');
var ReactIonic = require('./react-ionic');


var Demo = React.createClass({
	render: function () {
		
		var Header = ReactIonic.header();
		var Icon = ReactIonic.icon();
		var Button = ReactIonic.button();
		
		var ButtonBar = ReactIonic.buttonBar();
		
		return (
			<div>
				<Header title={"Header Demo"} color={'positive'} />
			
				<div className="padding header-hack">
					<pre><code><blockquote>
						var Header = ReactIonic.header(); <br/>
						return ( <br/>
							&lt;Header title=&#123;"Header Demo"&#125; color=&#123;'positive'&#125;  /> <br/>
						) <br/>
					</blockquote></code></pre>
				</div>

				<div className="padding extra-margin">
					<Icon icon={'ion-home'} color={'energized'} extraClasses={'big-icon extra-margin'} />
					<Icon icon={'ion-star'} color={'assertive'} extraClasses={'big-icon extra-margin'} />
					<Icon icon={'ion-female'} color={'calm'} extraClasses={'big-icon extra-margin'} />
					<Icon icon={'ion-male'} color={'calm'} extraClasses={'big-icon extra-margin'} />
					<Icon icon={'ion-transgender'} color={'calm'} extraClasses={'big-icon extra-margin'} />
					<Icon icon={'ion-coffee'} color={'dark'} extraClasses={'big-icon extra-margin'} />
					<Icon icon={'ion-ios-book-outline'} color={'royal'} extraClasses={'big-icon extra-margin'} />
					<Icon icon={'ion-android-compass'} color={'balanced'} extraClasses={'big-icon extra-margin'} />
				</div>
						
				<div className="padding">
					<pre><code><blockquote>
						var Icon = ReactIonic.icon(); <br/>
						return ( <br/>
							&lt;Icon icon=&#123;'ion-home'&#125; color=&#123;'energized'&#125; extraClasses=&#123;'big-icon extra-margin'&#125; /> <br/>
							&lt;Icon icon=&#123;'ion-star'&#125; color=&#123;'assertive'&#125; extraClasses=&#123;'big-icon extra-margin'&#125; /> <br/>
							&lt;Icon icon=&#123;'ion-female'&#125; color=&#123;'calm'&#125; extraClasses=&#123;'big-icon extra-margin'&#125; /> <br/>
							&lt;Icon icon=&#123;'ion-male'&#125; color=&#123;'calm'&#125; extraClasses=&#123;'big-icon extra-margin'&#125; /> <br/>
							&lt;Icon icon=&#123;'ion-transgender'&#125; color=&#123;'calm'&#125; extraClasses=&#123;'big-icon extra-margin'&#125; /> <br/>
							&lt;Icon icon=&#123;'ion-coffee'&#125; color=&#123;'dark'&#125; extraClasses=&#123;'big-icon extra-margin'&#125; /> <br/>
							&lt;Icon icon=&#123;'ion-ios-book-outline'&#125; color=&#123;'royal'&#125; extraClasses=&#123;'big-icon extra-margin'&#125; /> <br/>
							&lt;Icon icon=&#123;'ion-android-compass'&#125; color=&#123;'balanced'&#125; extraClasses=&#123;'big-icon extra-margin'&#125; /> <br/>
						) <br/>
					</blockquote></code></pre> 
				</div>
						
				<div className="padding">
					<Button label={'Demo Button'} color={'positive'} extraClasses={'extra-margin'} />
					<Button label={'Small Button'} color={'energized'} small={'true'} extraClasses={'extra-margin'} />
					<Button label={'Large Button'} color={'balanced'} large={'true'} extraClasses={'extra-margin'} />
					<Button label={' Icon Button'} color={'calm'} extraClasses={'extra-margin'} icon={<Icon icon='ion-star'/>}  iconPosition={'left'}  />
					<Button label={' Outline Button'} color={'calm'} extraClasses={'extra-margin'} outline={'true'} />
					<Button label={' Clear Button '} color={'calm'} extraClasses={'extra-margin'} clear={'true'} icon={<Icon icon={'ion-ios7-arrow-right'} color={'calm'} />} iconPosition={'right'} />
						
					<Button color={'positive'} icon={<Icon icon={'ion-gear-a'} color={'steady'} /> } />
					<Button color={'positive'} icon={<Icon icon={'ion-gear-a'} color={'steady'} /> } clear={'true'} />
						
					<Button label={'Block Button'} block={'true'} color={'assertive'} />
				</div>
						
				<Button label={'Full Width Block Button'} full={'true'} color={'steady'} />
						
				<ButtonBar buttons={[<Button label={' First Button'} icon={<Icon icon={'ion-home'} color={'dark'} />} iconPosition={'left'} color={'light'} key={'button1'} />, <Button label={'Second Button'} color={'dark'} key={'button2'} />, <Button label={'Third Button'} color={'dark'} key={'button3'} /> ]} />
						
				<div className="padding">
						
					<pre><code><blockquote>
						
						var Icon = ReactIonic.icon(); <br /> 
						var Button = ReactIonic.button(); <br />
						var ButtonBar = ReactIonic.buttonBar(); <br />
						
						return ( <br />

							&lt;Button label=&#123;'Demo Button'&#125; color=&#123;'positive'&#125; extraClasses=&#123;'extra-margin'&#125; /> <br/>
							&lt;Button label=&#123;'Small Button'&#125; color=&#123;'energized'&#125; small=&#123;'true'&#125; extraClasses=&#123;'extra-margin'&#125; /> <br/>
							&lt;Button label=&#123;'Large Button'&#125; color=&#123;'balanced'&#125; large=&#123;'true'&#125; extraClasses=&#123;'extra-margin'&#125; /> <br/>
							&lt;Button label=&#123;' Icon Button'&#125; color=&#123;'calm'&#125; extraClasses=&#123;'extra-margin'&#125; icon=&#123;&lt;Icon icon='ion-star'/>&#125; iconPosition=&#123;'left'&#125; /> <br/>
							&lt;Button label=&#123;' Outline Button'&#125; color=&#123;'calm'&#125; extraClasses=&#123;'extra-margin'&#125; outline=&#123;'true'&#125; /> <br/>
							&lt;Button label=&#123;' Clear Button '&#125; color=&#123;'calm'&#125; extraClasses=&#123;'extra-margin'&#125; clear=&#123;'true'&#125; icon=&#123;&lt;Icon icon=&#123;'ion-ios7-arrow-right'&#125; color=&#123;'calm'&#125; />&#125; iconPosition=&#123;'right'&#125; /> <br/>
						
							&lt;Button color=&#123;'positive'&#125; icon=&#123;&lt;Icon icon=&#123;'ion-gear-a'&#125; color=&#123;'steady'&#125; /> &#125; /> <br/>
							&lt;Button color=&#123;'positive'&#125; icon=&#123;&lt;Icon icon=&#123;'ion-gear-a'&#125; color=&#123;'steady'&#125; /> &#125; clear=&#123;'true'&#125; /> <br/>
						
							&lt;Button label=&#123;'Block Button'&#125; block=&#123;'true'&#125; color=&#123;'assertive'&#125; /> <br/>
							
							&lt;Button label=&#123;'Full Width Block Button'&#125; full=&#123;'true'&#125; color=&#123;'dark'&#125; /> <br />
							
							
							
							&lt;ButtonBar buttons=&#123;[ <br />
								&lt;Button label=&#123;' First Button'&#125; icon=&#123;&lt;Icon icon=&#123;'ion-home'&#125; color=&#123;'dark'&#125; />&#125; iconPosition=&#123;'left'&#125; color=&#123;'light'&#125; />, <br/>
								&lt;Button label=&#123;'Second Button'&#125; color=&#123;'dark'&#125; />, <br/>
								&lt;Button label=&#123;'Third Button'&#125; color=&#123;'dark'&#125; /> <br/>
							 ]&#125; /> <br/>				
							
						)
						
					</blockquote></code></pre>
				</div>
			</div>
		)
	},
	
});



//React.render(<Demo />);

module.exports = {
	demo: function() {
		return Demo;
	},
	
}