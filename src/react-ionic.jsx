/** @jsx React.DOM */

var React = require('react/addons');

var ButtonBar = React.createClass({
	render: function() {
		console.log(this.props);
		return (
			<div className="button-bar">
				{this.props.buttons.map(function(button) {
					return button
				})}
			</div>
		);
	},
});

var Icon = React.createClass({
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
			<i className={classes}></i>
		)
	},
	
})


var Button = React.createClass({
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
			<button className={classes} onClick={this.handleClick}>
			
				{this.props.iconPosition === 'left'
					? this.props.icon
					: null
				}
				
				{this.props.label
					? this.props.label
					: null
				}
				
				{!this.props.iconPosition
					? this.props.icon
					: null
				}
				
				{this.props.iconPosition === 'right'
					? this.props.icon
					: null
				}
				
			</button>
		);
		
	},
	
});

var Header = React.createClass({
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
			<div className={classes}>
				{this.props.input}
			
				{this.props.leftButton}
				
				<h1 className="title">
					{title}
				</h1>
					
				{this.props.rightButton}
			</div>
		);
	},
});

var Footer = React.createClass({
	render: function () {
		var title = this.props.title;
		
		var classes = "bar " + "bar-footer " + "bar-" + this.props.color;
		
		console.log(this.props);
		console.log(classes);
		
		return (
			<div className={classes}>
				{this.props.leftButton}
				
				<h1 className="title">
					{title}
				</h1>
					
				{this.props.rightButton}
			</div>
		);
	},
});

var ListItem = React.createClass({
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
			<a className={itemClasses} onClick={this.handleClick}>
			
				{this.props.buttonLeft}
				
				{this.props.iconLeft}				
			
				{this.props.thumbnail
					?
						[
							<img src={this.props.thumbnail} href="#" />,
							<h2>{this.props.thumbnailTitle}</h2>
						]
						
					: null
				}
			
				{this.props.avatar
					? <img src={this.props.avatar} href="#" />
					: null
				}
				
				{this.props.avatarTitle
					? <h2>{this.props.avatarTitle}</h2>
					: null
				}
			

				{this.props.thumbnailTitle || this.props.avatarTitle
					? <p>{this.props.itemText}</p>
					: <span>{this.props.itemText}</span>
				}
				
				{this.props.itemNote
					? <span className='item-note'>{this.props.itemNote}</span>
					: null
				}
				
				{this.props.iconRight}
				
				{this.props.buttonRight}
				
			</a>
		)
	},
});

var InputItem = React.createClass({
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
			textarea = <textarea placeholder={placeholder} onChange={this.handleChange}></textarea>
		}
		else {
			input = <input type="text" placeholder={placeholder} onChange={this.handleChange} />
		}

		return (
			<label className={labelClasses}>
				
				{this.props.icon}
			
				{this.props.label && !this.props.insetItem
					? <span className='input-label'>{this.props.label}</span>
					: null
				}
					
				{textarea}
				
				{input}
				
			</label>
		)
	},
	
});

var InputItemInset = React.createClass({
	render: function () {
		
		return (
			<div className="item item-input-inset">
				<InputItem label={this.props.label} type={this.props.label} labelStacked={this.props.labelStacked} labelFloating={this.props.labelFloating} textarea={this.props.textarea} handleChange={this.props.handleChange} itemInset={true} placeholder={this.props.placeholder} />

				{this.props.button}
			</div>
		)
	},
	
});

var ToggleItem = React.createClass({
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
			<div className='item item-toggle'>
				{this.props.label}
				<label className={classes}>
					<input type="checkbox" checked={checked} onChange={this.handleChecked} />
					<div className='track'>
						<div className='handle'></div>
					</div>
				</label>
			</div>
		)
	},
});

CheckboxItem = React.createClass({
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
			<div className='item item-checkbox'>
				<label className={classes}>
					<input type="checkbox" checked={this.state.checked} onChange={this.handleChange} />
				</label>
				{this.props.label}			
			</div>
		)
	},
});

RadioButtonItem = React.createClass({
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
			<label className="item item-radio">
				<input type="radio" onChange={this.handleChange.bind(null, this.props.radioId)} name={this.props.name} />
				<div className="item-content">
					{this.props.label}
				</div>
				<i className="radio-icon ion-checkmark"></i>
			</label>
		)
	},
})

RangeItem = React.createClass({
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
			<div className={classes}>
				{this.props.leftIcon}
				<input type="range" name={this.props.name} min={this.props.min} max={this.props.max} onChange={this.handleChange}/>
				{this.props.rightIcon}
			</div>
		)
	},
	
});

SelectItem = React.createClass({
	render: function () {

		var cx = React.addons.classSet;
		var classes = cx({
			'item': true,
			'item-input': true,
			'item-select': true,
		});
		
		console.log("select item classes " + classes);
		
		return (
			<label className={classes}>
				<div className="input-label">
					{this.props.label}
				</div>
					
				<select>
					<option>Blue</option>
					<option>Green</option>
					<option>Red</option>
				</select>
			</label>
		)
	},
});

TabItem = React.createClass({
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
			<a className={classes} onClick={this.handleClick}>
				{this.props.label} &nbsp;
				{this.props.icon}
			</a>
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