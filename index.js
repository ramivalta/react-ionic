/** @jsx React.DOM */

var React = require('react/addons');

var ButtonBar = React.createClass({displayName: 'ButtonBar',
	render: function() {
		console.log(this.props);
		return (
			React.createElement("div", {className: "button-bar"}, 
				this.props.buttons.map(function(button) {
					return button
				})
			)
		);
	},
});

var Icon = React.createClass({displayName: 'Icon',
	render: function () {
		var cx = React.addons.classSet;
		var classes = cx({
			'icon': true,
			'placeholder-icon': this.props.placeholder,
			'icon-left': this.props.iconPosition === 'left',
			'icon-right': this.props.iconPosition === 'right',
		});
		
		if (this.props.icon) {
			classes += " " + this.props.icon;
		}
		
		var color = this.props.color || 'light';
		
		var colorClass = color;
		
		var extraClasses = this.props.extraClasses || '';
		classes += " " + colorClass + " " + extraClasses;
		
		console.log("icon classes " + classes);
		
		return (
			React.createElement("i", {className: classes})
		)
	},
	
})


var Button = React.createClass({displayName: 'Button',
	handleClick: function () {
		if (!this.props.handleClick)
			alert ("Button was clicked but no click handler was provided");
		else {
			this.props.handleClick();
		}
	},
	
	
	render: function () {
		var cx = React.addons.classSet;
		
		var classes = cx({
			'button' : true,
			'button-block' : this.props.block,
			'button-full' : this.props.full,
			'button-small' : this.props.small,
			'button-large' : this.props.large,
			'button-outline' : this.props.outline,
			'button-clear' : this.props.clear,
			'icon-left' : this.props.iconPosition === 'left',
			'icon-right' : this.props.iconPosition === 'right',
			'button-icon' : !this.props.label && this.props.icon && this.props.clear
		});
		
		if (this.props.label)
			label = this.props.label;

		if (this.props.color)
			color = "button-" + this.props.color;
		
		classes += " " + color;
		
		if (this.props.extraClasses)
			classes += " " + this.props.extraClasses;
		
		
		console.log(classes);
		
		return (
			React.createElement("button", {className: classes, onClick: this.handleClick}, 
			
				this.props.iconPosition === 'left'
					? this.props.icon
					: null, 
				
				
				this.props.label
					? this.props.label
					: null, 
				
				
				!this.props.iconPosition
					? this.props.icon
					: null, 
				
				
				this.props.iconPosition === 'right'
					? this.props.icon
					: null
				
				
			)
		);
		
	},
	
});

var Header = React.createClass({displayName: 'Header',
	// tää on testaamatta
	render: function () {
		var title = this.props.title;
		
		var cx = React.addons.classSet;
		
		var classes = cx({
			'bar' : true,
			'bar-header' : true,
			'item-input-inset' : this.props.input
		});
		
		var color = this.props.color || 'light';
		var colorClass = " " + "bar-" + color;
		
		classes += colorClass;
		
		console.log(classes);
		
		return (
			React.createElement("div", {className: classes}, 
				this.props.input, 
			
				this.props.leftButton, 
				
				React.createElement("h1", {className: "title"}, 
					title
				), 
					
				this.props.rightButton
			)
		);
	},
});

var Footer = React.createClass({displayName: 'Footer',
	render: function () {
		var title = this.props.title;
		
		var classes = "bar " + "bar-footer " + "bar-" + this.props.color;
		
		console.log(this.props);
		console.log(classes);
		
		return (
			React.createElement("div", {className: classes}, 
				this.props.leftButton, 
				
				React.createElement("h1", {className: "title"}, 
					title
				), 
					
				this.props.rightButton
			)
		);
	},
});

var ListItem = React.createClass({displayName: 'ListItem',
	handleClick: function () {
		if (this.props.handleClick)
			this.props.handleClick();
		
		console.log("list item clicked");
	},
	
	render: function () {
		
		
		var cx = React.addons.classSet;
		
		var itemClasses = cx({
			'item' : true,
			'item-icon-left' : this.props.iconLeft,
			'item-icon-right' : this.props.iconRight,
		    'item-button-left' : this.props.buttonLeft,
			'item-button-right' : this.props.buttonRight,
			'item-avatar' : this.props.avatar,
			'item-thumbnail-left' : this.props.itemThumbnailLeft,
			'item-thumbnail-right' : this.props.itemThumbnailRight,
			'item-divider': this.props.divider,
			'item-text-wrap': this.props.wrapText,
			'item-body': this.props.body
		});
		
		
		return (
			React.createElement("a", {className: itemClasses, onClick: this.handleClick}, 
			
				this.props.buttonLeft, 
				
				this.props.iconLeft, 				
			
				this.props.thumbnail
					?
						[
							React.createElement("img", {src: this.props.thumbnail, href: "#"}),
							React.createElement("h2", null, this.props.thumbnailTitle)
						]
						
					: null, 
				
			
				this.props.avatar
					? React.createElement("img", {src: this.props.avatar, href: "#"})
					: null, 
				
				
				this.props.avatarTitle
					? React.createElement("h2", null, this.props.avatarTitle)
					: null, 
				
			

				this.props.thumbnailTitle || this.props.avatarTitle
					? React.createElement("p", null, this.props.itemText)
					: React.createElement("span", null, this.props.itemText), 
				
				
				this.props.itemNote
					? React.createElement("span", {className: "item-note"}, this.props.itemNote)
					: null, 
				
				
				this.props.iconRight, 
				
				this.props.buttonRight
				
			)
		)
	},
});

var InputItem = React.createClass({displayName: 'InputItem',
	handleChange: function (event) {
		if (!this.props.handleChange)
			console.log(event.target.value);
		else this.props.handleChange(event.target.value);
	},
	
	render: function () {
		
		var placeholder = this.props.placeholder || "",
			type = this.props.type || "text",
			textarea,
			input;
	
		var cx = React.addons.classSet;
		
		var labelClasses = cx({
			'item': true,
			'item-input': true,
			'item-stacked-label' : this.props.labelStacked,
			'item-floating-label': this.props.labelFloating,
			'item-input-wrapper': this.props.itemInset
		});

		if (this.props.textarea) {
			textarea = React.createElement("textarea", {placeholder: placeholder, onChange: this.handleChange})
		}
		else {
			input = React.createElement("input", {type: "text", placeholder: placeholder, onChange: this.handleChange})
		}

		return (
			React.createElement("label", {className: labelClasses}, 
				
				this.props.icon, 
			
				this.props.label && !this.props.insetItem
					? React.createElement("span", {className: "input-label"}, this.props.label)
					: null, 
				
					
				textarea, 
				
				input
				
			)
		)
	},
	
});

var InputItemInset = React.createClass({displayName: 'InputItemInset',
	render: function () {
		
		return (
			React.createElement("div", {className: "item item-input-inset"}, 
				React.createElement(InputItem, {label: this.props.label, type: this.props.label, labelStacked: this.props.labelStacked, labelFloating: this.props.labelFloating, textarea: this.props.textarea, handleChange: this.props.handleChange, itemInset: true, placeholder: this.props.placeholder}), 

				this.props.button
			)
		)
	},
	
});

var ToggleItem = React.createClass({displayName: 'ToggleItem',
	getInitialState: function () {
		return {
			checked: true
		}
	},
	
	handleChecked: function (event) {
		var toggle = this.state.checked ? false : true;
		console.log(toggle);
		
		if (this.props.handleChange)
			this.props.handleChange(toggle);

		this.setState({
			checked: toggle
		});
	},
	
	render: function () {
		var cx = React.addons.classSet;
		var color = this.props.color;
		var colorClass = 'toggle-' + color;
		var classes = cx({
			'toggle': true,
		});
		
		var checked = this.props.checked || this.state.checked;
			
		classes += " " + colorClass;
		
		return (
			React.createElement("div", {className: "item item-toggle"}, 
				this.props.label, 
				React.createElement("label", {className: classes}, 
					React.createElement("input", {type: "checkbox", checked: checked, onChange: this.handleChecked}), 
					React.createElement("div", {className: "track"}, 
						React.createElement("div", {className: "handle"})
					)
				)
			)
		)
	},
});

CheckboxItem = React.createClass({displayName: 'CheckboxItem',
	getInitialState: function () {
		return {
			checked: this.props.checked
		}
	},
	
	handleChange: function (event) {
		var toggle = this.state.checked ? false : true;
		
		console.log(toggle);
		
		if (this.props.handleChange)
			this.props.handleChange(toggle);
		
		this.setState({
			checked: toggle
		});
	},
	
	render: function () {
		var cx = React.addons.classSet;
		var color = this.props.color;
		var colorClass = 'checkbox-' + color;
		var classes = cx({
			'checkbox': true,
		});
			
		classes += " " + colorClass;
		
		return (
			React.createElement("div", {className: "item item-checkbox"}, 
				React.createElement("label", {className: classes}, 
					React.createElement("input", {type: "checkbox", checked: this.state.checked, onChange: this.handleChange})
				), 
				this.props.label			
			)
		)
	},
});

RadioButtonItem = React.createClass({displayName: 'RadioButtonItem',
	getInitialState: function () {
		return {
			//checked: this.props.checked
		}
	},

	handleChange: function (id) {
		//var checked = this.state.checked ? false : true;
		console.log(this.props.id);
		
		if (this.props.handleChange)
			this.props.handleChange(id);
		
		/*this.setState({
			checked: checked
		});*/
	},
	
	render: function () {
		return (
			React.createElement("label", {className: "item item-radio"}, 
				React.createElement("input", {type: "radio", onChange: this.handleChange.bind(null, this.props.radioId), name: this.props.name}), 
				React.createElement("div", {className: "item-content"}, 
					this.props.label
				), 
				React.createElement("i", {className: "radio-icon ion-checkmark"})
			)
		)
	},
})

RangeItem = React.createClass({displayName: 'RangeItem',
	handleChange: function (event) {
		var val = event.target.value;
		
		console.log(val);
		
		if(this.props.handleChange)
			this.props.handleChange(val);
	},
	
	render: function () {
		
		var cx = React.addons.classSet;
		var classes = cx({
			range: true
		});
		
		var color = this.props.color || 'light';
		var colorClasses = " range-" + color;
		classes += colorClasses;
		
		console.log("rangeslider classes " + classes);
		
		return (
			React.createElement("div", {className: classes}, 
				this.props.leftIcon, 
				React.createElement("input", {type: "range", name: this.props.name, min: this.props.min, max: this.props.max, onChange: this.handleChange}), 
				this.props.rightIcon
			)
		)
	},
	
});

SelectItem = React.createClass({displayName: 'SelectItem',
	render: function () {

		var cx = React.addons.classSet;
		var classes = cx({
			'item': true,
			'item-input': true,
			'item-select': true,
		});
		
		console.log("select item classes " + classes);
		
		return (
			React.createElement("label", {className: classes}, 
				React.createElement("div", {className: "input-label"}, 
					this.props.label
				), 
					
				React.createElement("select", null, 
					React.createElement("option", null, "Blue"), 
					React.createElement("option", null, "Green"), 
					React.createElement("option", null, "Red")
				)
			)
		)
	},
});

TabItem = React.createClass({displayName: 'TabItem',
	handleClick: function () {
		console.log("tab clicked");
		
		if (this.props.handleClick)
			this.props.handleClick();
	},
	
	render: function () {
		var cx = React.addons.classSet;
		var classes = cx({
			'tab-item': true,
			'active' : this.props.active
		});
		
		/*var color = this.props.color || light;
		var colorClass = "tab-" + color*/
		
		return (
			React.createElement("a", {className: classes, onClick: this.handleClick}, 
				this.props.label, "  ", 
				this.props.icon
			)
		)
	},
});


module.exports = {
	header: function () {
		return Header;
	},
	icon: function () {
		return Icon;
	},
	footer: function () {
		return Footer;
	},
	button: function () {
		return Button;
	},
	buttonBar: function () {
		return ButtonBar;
	},
	listItem: function () {
		return ListItem;
	},
	inputItem: function () {
		return InputItem;
	},
	inputItemInset: function () {
		return InputItemInset;
	},
	toggle: function () {
		return ToggleItem;
	},
	checkbox: function () {
		return CheckboxItem;
	},
	radioButton: function () {
		return RadioButtonItem;
	},
	rangeSlider: function () {
		return RangeItem;
	},
	selectItem: function () {
		return SelectItem;
	},
	tab: function () {
		return TabItem;
	},
}
