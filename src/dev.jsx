$('body').append("<div id='content' class='content padding'></div>");

$('#content').append("<div class='list'></div>")

$('#content').append("<div id='header'></div>");


$('#content').append("<div id='button'></div>");

var Header = ReactIonic.header();
var Button = ReactIonic.button();
var Icon = ReactIonic.icon();
var headerLeftButton = <Button label={'Left Button'} color={'positive'} />;
var headerMiddleButton = <Button label={'Middle Button'} color={'positive'} />;
var headerRightButton = <Button label={'Right Button'} color={'steady'} />;

/*React.render(
	<Header title={'Title'} color={'stable'} leftButton={headerLeftButton} rightButton={headerRightButton} />, document.getElementById('header')
);*/

React.render(
	<Button label={'Button title'} color={'royal'} />, document.getElementById('button')	
);

$('#content').append("<div id='blockButton'></div>");
React.render(
	<Button label={'Block Button'} color={'balanced'} block={true} />, document.getElementById('blockButton')
);

$('#content').append("<div id='fullWidthButton'></div>");

React.render(
	<Button label={'Full Width Block Button'} color={'energized'} full={true} />, document.getElementById('fullWidthButton')
);

$('#content').append("<div id='outlineButton'></div>");

React.render(
	<Button label={'Outlined Button'} color={'calm'} outline={true} />, document.getElementById('outlineButton')
);

$('#content').append("<div id='iconButton'></div>");


var StarIcon = <Icon icon={'ion-star'} />	

React.render(
	<Button color={'positive'} label={'Starry Button'} icon={StarIcon} iconPosition={'left'} />, document.getElementById('iconButton')
);


$('#content').append("<div id='buttonBar'></div>");

var ButtonBar = ReactIonic.buttonBar();

var buttons = [];
buttons.push(headerLeftButton);
buttons.push(headerMiddleButton);
buttons.push(headerRightButton);

React.render(
	<ButtonBar buttons={buttons} />, document.getElementById('buttonBar')
);



$('#content').append("<div id='listItem'></div>");
$('#content').append("<div id='listButton'></div>");

var ListItem = ReactIonic.listItem();

var IconRight = <Icon icon={'ion-mic-a'} />
var IconLeft = <Icon icon={'ion-person-stalker'} />

React.render(
	<ListItem itemText={'List Item Text'} iconLeft={IconLeft} iconRight={IconRight} itemNote={'Note for Item'} />, document.getElementById('listItem')
)

var StarIcon = <Icon icon={'ion-star'} />

var ListButton = <Button icon={StarIcon} color={'positive'} label={' '} />

React.render(
	<ListItem itemText={'List Button'} buttonRight={ListButton} />, document.getElementById('listButton')
)

$('#content').append("<div id='itemAvatar'></div>");

React.render(
	<ListItem itemText={'Is man, indeed, a walrus at heart?'} avatar={'http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/article_main_half/public/3/68//tusk_lead.jpg?itok=jRLeKNlY'} avatarTitle={'Mr. Tusk'} />, document.getElementById('itemAvatar')
	
)


$('#content').append("<div id='itemThumbnail'></div>");

React.render(
	<ListItem itemText={'Featuring Harley Quinn Smith'} thumbnailTitle={'Yoga Hosers'} thumbnail={'http://www.flickeringmyth.com/wp-content/uploads/2014/08/yoga-hosers-105885.jpg'} itemThumbnailLeft={true} />, document.getElementById('itemThumbnail')
)

var InputItem = ReactIonic.inputItem();
var InputItemInset = ReactIonic.inputItemInset();

$('#content').append("<div id='inputItem'></div>");
$('#content').append("<div id='inputItemInset'></div>");

React.render(
	<InputItem placeholder={'Placeholder'} label={'Stacked label'} labelStacked={true} labelFloating={false} />, document.getElementById('inputItem')
)

React.render(
	<InputItemInset placeholder={'Inset Input Item'} label={'Inset Input Label'} button={headerRightButton} />, document.getElementById('inputItemInset')
)


$('#content').append("<div id='textareaInput'></div>");

React.render(
	<InputItem placeholder={'Textarea placeholder'} textarea={true} />, document.getElementById('textareaInput')
)

$('#content').append("<div id='headerwithinput'></div>");


var resetButton = <Button label={'Cancel'} rightButton={true} color={'clear'} />;

var DerpPut = <InputItem placeholder={'Placeholder'} button={resetButton} itemInset={true} />;

React.render(
	<Header color={'stable'} input={DerpPut} />, document.getElementById('header')
);


var IconInput = ReactIonic.inputItem();
	
$('#content').append("<div id='inputwithicon'></div>");

var Icon = ReactIonic.icon();

var StalkerIcon = <Icon icon='ion-person-stalker' placeholder={true} />;

React.render(
	<IconInput placeholder={'Input with stalker icon'} icon={StalkerIcon} />, document.getElementById('inputwithicon')
);


$('#content').append("<div id='toggle'></div>");

var Toggle = ReactIonic.toggle();

//var FoobarToggle = <Toggle label={'Foobar'} color={'positive'} />;

React.render(
	<Toggle label={'Foobar toggle'} color={'positive'} />, document.getElementById('toggle') 
)

$('#content').append("<div id='checkbox'></div>");

var CheckboxItem = ReactIonic.checkbox();

React.render(
	<CheckboxItem label={'Checkbox label'} color={'energized'} />, document.getElementById('checkbox')
)


$('#content').append("<div id='radio'></div>");
var RadioButtonItem = ReactIonic.radioButton();

React.render(
	<div className="list">
		<RadioButtonItem label={'Radiobutton Item'}   color={'energized'} name={'group'} radioId={'button1'} />
		<RadioButtonItem label={'Radiobutton Item 2'} color={'energized'} name={'group'} radioId={'button2'} />
	</div>, document.getElementById('radio')
)


$('#content').append("<div id='range'></div>");

var RangeSlider = ReactIonic.rangeSlider();

var LowVolume = <Icon icon={'ion-volume-low'} />;
var HighVolume = <Icon icon={'ion-volume-high'} />;

React.render(
	<RangeItem leftIcon={LowVolume} rightIcon={HighVolume} color={'assertive'} />, document.getElementById('range')
)

$('#content').append("<div id='select'></div>");

var ArrowDownIcon = <Icon icon={'ion-ios7-arrow-down'} />;
var SelectItem = ReactIonic.selectItem();

React.render(
	<SelectItem label={'Select Item Label'} icon={ArrowDownIcon} />, document.getElementById('select')
)

$('#content').append("<div id='tabs'></div>");

var GearIcon = <Icon icon={'ion-gear-a'} />;
var HomeIcon = <Icon icon={'ion-home'} />;
var Tab = ReactIonic.tabItem();

React.render(
	<div className="tabs-striped tabs-bottom tabs-background-positive tabs-light">	
		<div className="tabs">
			<Tab icon={GearIcon} label={'Asetukset'} active={true} />
			<Tab icon={HomeIcon} label={'Koti'} />
		</div>
	</div>, document.getElementById('tabs')
)

/*var Footer = ReactIonic.footer();
$('#content').append("<div id='footer'></div>");

React.render(
	<Footer color={'royal'} title={'Footer Title'} />, document.getElementById('footer')
);*/