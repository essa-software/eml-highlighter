import * as vscode from 'vscode';

const Boolean = [
	new vscode.CompletionItem('true', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('false', vscode.CompletionItemKind.Value)
];

const CheckBoxStyle = [
	new vscode.CompletionItem('cross', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('mark', vscode.CompletionItemKind.Value)
];

const FileExplorerTypes = [
	new vscode.CompletionItem('files', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('folders', vscode.CompletionItemKind.Value)
];

const SliderMode = [
	new vscode.CompletionItem('linear', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('exponential', vscode.CompletionItemKind.Value)
];

const TextBoxMode = [
	new vscode.CompletionItem('number', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('string', vscode.CompletionItemKind.Value)
];

const ProgreessBarTypes = [
	new vscode.CompletionItem('percentage', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('value', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('none', vscode.CompletionItemKind.Value)
];

const MsgBoxButtons = [
	new vscode.CompletionItem('YesNo', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Ok', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('None', vscode.CompletionItemKind.Value)
];

const ArrowDirection = [
	new vscode.CompletionItem('up', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('down', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('left', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('right', vscode.CompletionItemKind.Value)
];

const TextPosition = [
	new vscode.CompletionItem('top', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('bottom', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('left', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('right', vscode.CompletionItemKind.Value)
];

const Units = [
	new vscode.CompletionItem('Length', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Mass', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Velocity', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Time', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Information', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('None', vscode.CompletionItemKind.Value)
];

const TextAlignment = [
	new vscode.CompletionItem('TopLeft', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Top', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('TopRight', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('CenterLeft', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Center', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('CenterRight', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('BottomLeft', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Bottom', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('BottomRight', vscode.CompletionItemKind.Value)
];

const Colors = [
	new vscode.CompletionItem('Transparent', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('AliceBlue', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('AntiqueWhite', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Aqua', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Aquamarine', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Azure', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Beige', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Bisque', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Black', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('BlanchedAlmond', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Blue', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('BlueViolet', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Brown', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('BurlyWood', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('CadetBlue', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Chartreuse', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Chocolate', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Coral', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('CornflowerBlue', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Cornsilk', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Crimson', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Cyan', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DarkBlue', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DarkCyan', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DarkGoldenRod', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DarkGray', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DarkGrey', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DarkGreen', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DarkKhaki', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DarkMagenta', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DarkOliveGreen', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DarkOrange', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DarkOrchid', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DarkRed', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DarkSalmon', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DarkSeaGreen', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DarkSlateBlue', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DarkSlateGray', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DarkSlateGrey', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DarkTurquoise', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DarkViolet', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DeepPink', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DeepSkyBlue', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DimGray', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DimGrey', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('DodgerBlue', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('FireBrick', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('FloralWhite', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('ForestGreen', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Fuchsia', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Gainsboro', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('GhostWhite', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Gold', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('GoldenRod', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Gray', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Grey', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Green', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('GreenYellow', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('HoneyDew', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('HotPink', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('IndianRed', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Indigo', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Ivory', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Khaki', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Lavender', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('LavenderBlush', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('LawnGreen', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('LemonChiffon', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('LightBlue', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('LightCoral', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('LightCyan', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('LightGoldenRodYellow', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('LightGray', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('LightGrey', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('LightGreen', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('LightPink', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('LightSalmon', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('LightSeaGreen', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('LightSkyBlue', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('LightSlateGray', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('LightSlateGrey', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('LightSteelBlue', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('LightYellow', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Lime', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('LimeGreen', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Linen', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Magenta', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Maroon', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('MediumAquaMarine', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('MediumBlue', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('MediumOrchid', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('MediumPurple', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('MediumSeaGreen', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('MediumSlateBlue', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('MediumSpringGreen', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('MediumTurquoise', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('MediumVioletRed', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('MidnightBlue', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('MintCream', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('MistyRose', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Moccasin', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('NavajoWhite', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Navy', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('OldLace', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Olive', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('OliveDrab', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Orange', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('OrangeRed', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Orchid', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('PaleGoldenRod', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('PaleGreen', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('PaleTurquoise', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('PaleVioletRed', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('PapayaWhip', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('PeachPuff', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Peru', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Pink', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Plum', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('PowderBlue', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Purple', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('RebeccaPurple', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Red', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('RosyBrown', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('RoyalBlue', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('SaddleBrown', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Salmon', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('SandyBrown', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('SeaGreen', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('SeaShell', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Sienna', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Silver', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('SkyBlue', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('SlateBlue', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('SlateGray', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('SlateGrey', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Snow', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('SpringGreen', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('SteelBlue', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Tan', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Teal', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Thistle', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Tomato', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Turquoise', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Violet', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Wheat', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('White', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('WhiteSmoke', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('Yellow', vscode.CompletionItemKind.Value),
	new vscode.CompletionItem('YellowGreen', vscode.CompletionItemKind.Value)
];

export interface Constants {
	Classes: Array<object>;
	ClassIds(): vscode.CompletionItem[];
	LayoutIds(): vscode.CompletionItem[];
}

export class Classes implements Constants {
	ClassIds = function () {
		const Application = new vscode.CompletionItem('Application', vscode.CompletionItemKind.Class);
		Application.documentation = new vscode.MarkdownString('Represents a root element of the application.');

		const ArrowButton = new vscode.CompletionItem('ArrowButton', vscode.CompletionItemKind.Class);
		ArrowButton.documentation = new vscode.MarkdownString('Special button type with an arrow towards specified direction on it.');

		const Border = new vscode.CompletionItem('Border', vscode.CompletionItemKind.Class);
		Border.documentation = new vscode.MarkdownString('Special container type with only one child filling its whole space.');

		const Canvas = new vscode.CompletionItem('Canvas', vscode.CompletionItemKind.Class);
		Canvas.documentation = new vscode.MarkdownString('A widget designed to draw simple shapes in your ESSA Application');

		const CheckBox = new vscode.CompletionItem('CheckBox', vscode.CompletionItemKind.Class);
		CheckBox.documentation = new vscode.MarkdownString('Toggleable widget with a box which changes its state when toggled.');

		const ColorPicker = new vscode.CompletionItem('ColorPicker', vscode.CompletionItemKind.Class);
		ColorPicker.documentation = new vscode.MarkdownString('Widget desiged for color choose inside ESSA Application.');

		const Console = new vscode.CompletionItem('Console', vscode.CompletionItemKind.Class);
		Console.documentation = new vscode.MarkdownString('ListWidget designed to print lines from input');

		const Container = new vscode.CompletionItem('Container', vscode.CompletionItemKind.Class);
		Container.documentation = new vscode.MarkdownString('Very basic widget with a powerful possibility of storing other widgets in it. Every ESSA Container has to have specified its layout.');

		const ContextMenu = new vscode.CompletionItem('ContextMenu', vscode.CompletionItemKind.Class);
		ContextMenu.documentation = new vscode.MarkdownString('A navigation bar menu at the top side of ESSA Application.');

		const DateBox = new vscode.CompletionItem('DateBox', vscode.CompletionItemKind.Class);
		DateBox.documentation = new vscode.MarkdownString('Utility for displaying calendar inside the application.');

		const FileExplorer = new vscode.CompletionItem('FileExplorer', vscode.CompletionItemKind.Class);
		FileExplorer.documentation = new vscode.MarkdownString('Window wich allows you to choose file from your device.');

		const FilePrompt = new vscode.CompletionItem('FilePrompt', vscode.CompletionItemKind.Class);
		FilePrompt.documentation = new vscode.MarkdownString('Integrated pop up with @TextBox and a button \'browse\' for browsing files via @FileExplorer');

		const Frame = new vscode.CompletionItem('Frame', vscode.CompletionItemKind.Class);
		Frame.documentation = new vscode.MarkdownString('Basic container with border.');

		const Grid = new vscode.CompletionItem('Grid', vscode.CompletionItemKind.Class);
		Grid.documentation = new vscode.MarkdownString('Widget for creating grids and tables.');

		const Image = new vscode.CompletionItem('Image', vscode.CompletionItemKind.Class);
		Image.documentation = new vscode.MarkdownString('Basic widget for displaying an image.');

		const ImageButton = new vscode.CompletionItem('ImageButton', vscode.CompletionItemKind.Class);
		ImageButton.documentation = new vscode.MarkdownString('Button with an image in it.');

		const ListBox = new vscode.CompletionItem('ListBox', vscode.CompletionItemKind.Class);
		ListBox.documentation = new vscode.MarkdownString('Widget with toggleable lines. Multichoose is possible there.');

		const Menu = new vscode.CompletionItem('Menu', vscode.CompletionItemKind.Class);
		Menu.documentation = new vscode.MarkdownString('Widget for creating menus (e.g.: settings grouped into several TabWidgets).');

		const MessageBox = new vscode.CompletionItem('MessageBox', vscode.CompletionItemKind.Class);
		MessageBox.documentation = new vscode.MarkdownString('Basic pop up for displaying short messages or errors.');

		const ProgressBar = new vscode.CompletionItem('ProgressBar', vscode.CompletionItemKind.Class);
		ProgressBar.documentation = new vscode.MarkdownString('Widget for displaying progress in ongoing task.');

		const Prompt = new vscode.CompletionItem('Prompt', vscode.CompletionItemKind.Class);
		Prompt.documentation = new vscode.MarkdownString('Message Box with buttons under the message');

		const RadioButton = new vscode.CompletionItem('RadioButton', vscode.CompletionItemKind.Class);
		RadioButton.documentation = new vscode.MarkdownString('Toggleable widget with a circle showing its status.');

		const RadioGroup = new vscode.CompletionItem('RadioGroup', vscode.CompletionItemKind.Class);
		RadioGroup.documentation = new vscode.MarkdownString('Container of several RadioButtons grouped together, only one button can be checked at the time.');

		const Scrollable = new vscode.CompletionItem('Scrollable', vscode.CompletionItemKind.Class);
		Scrollable.documentation = new vscode.MarkdownString('Widget with elements you can scroll.');

		const ComboBox = new vscode.CompletionItem('ComboBox', vscode.CompletionItemKind.Class);
		ComboBox.documentation = new vscode.MarkdownString('Widget with expandable elements you can choose from.');

		const Slider = new vscode.CompletionItem('Slider', vscode.CompletionItemKind.Class);
		Slider.documentation = new vscode.MarkdownString('Widget with a bar which you are able to change its position. By that, @Slider also changes its value.');

		const StateTextButton = new vscode.CompletionItem('StateTextButton', vscode.CompletionItemKind.Class);
		StateTextButton.documentation = new vscode.MarkdownString('Button with several states possible (more than 2)');

		const TabWidget = new vscode.CompletionItem('TabWidget', vscode.CompletionItemKind.Class);
		TabWidget.documentation = new vscode.MarkdownString('Widget which stores several containers which you can toggle by switching its tabs.');

		const TextBox = new vscode.CompletionItem('TextBox', vscode.CompletionItemKind.Class);
		TextBox.documentation = new vscode.MarkdownString('Widget where you can write short input. No multiline support.');

		const TextButton = new vscode.CompletionItem('TextButton', vscode.CompletionItemKind.Class);
		TextButton.documentation = new vscode.MarkdownString('Button with a text displayed on it.');

		const TextEditor = new vscode.CompletionItem('TextEditor', vscode.CompletionItemKind.Class);
		TextEditor.documentation = new vscode.MarkdownString('Widget for writing or editing longer text blobs.');

		const TextField = new vscode.CompletionItem('TextField', vscode.CompletionItemKind.Class);
		TextField.documentation = new vscode.MarkdownString('Widget which stores uneditable text line.');

		const ToolWindow = new vscode.CompletionItem('ToolWindow', vscode.CompletionItemKind.Class);
		ToolWindow.documentation = new vscode.MarkdownString('A base pop ups class. It creates an empty window.');

		const UnitSlider = new vscode.CompletionItem('UnitSlider', vscode.CompletionItemKind.Class);
		UnitSlider.documentation = new vscode.MarkdownString('Slider with handles various quantities.');

		const ValueSlider = new vscode.CompletionItem('ValueSlider', vscode.CompletionItemKind.Class);
		ValueSlider.documentation = new vscode.MarkdownString('Slider with an unit label next to it.');

		return [
			Application, ArrowButton,
			Border,
			Canvas, CheckBox, ColorPicker, Console, Container, ContextMenu,
			DateBox,
			FileExplorer, FilePrompt, Frame,
			Grid,
			Image, ImageButton,
			ListBox,
			Menu, MessageBox,
			ProgressBar, Prompt,
			RadioButton, RadioGroup,
			Scrollable, ComboBox, Slider, StateTextButton,
			TabWidget, TextBox, TextButton, TextEditor, TextField, ToolWindow,
			UnitSlider,
			ValueSlider
		];
	}

	LayoutIds = function () {
		const BasicLayout = new vscode.CompletionItem('BasicLayout', vscode.CompletionItemKind.Class);
		BasicLayout.documentation = new vscode.MarkdownString('Base layout class.');

		const BoxLayout = new vscode.CompletionItem('BoxLayout', vscode.CompletionItemKind.Class);
		BoxLayout.documentation = new vscode.MarkdownString('Layout where widget fills entire space in both directions by default.');

		const HorizontalBoxLayout = new vscode.CompletionItem('HorizontalBoxLayout', vscode.CompletionItemKind.Class);
		HorizontalBoxLayout.documentation = new vscode.MarkdownString('Layout where widget fills entire space in horizontal axis by default.');

		const VerticalBoxLayout = new vscode.CompletionItem('VerticalBoxLayout', vscode.CompletionItemKind.Class);
		VerticalBoxLayout.documentation = new vscode.MarkdownString('Layout where widget fills entire space in vertical axis by default.');

		return [
			BasicLayout, BoxLayout,
			HorizontalBoxLayout,
			VerticalBoxLayout
		];
	}

	Classes = [
		{
			name: 'WidgetTreeRoot', methods: [
				{ name: 'id', val: undefined, inherit: true, desc: 'Specifies a window identification string. IDs ahve to be unique for an entire app.' },
			], derives: null
		},

		{
			name: 'Widget', methods: [
				{ name: 'id', val: undefined, inherit: true, desc: 'Specifies a widget identification string. IDs ahve to be unique for an entire app.' },
				{ name: 'class', val: undefined, inherit: true, desc: 'Specifies a widget class id string.' },
				{ name: 'visible', val: Boolean, inherit: true, desc: 'Specifies a widget visibility.' },
				{ name: 'enabled', val: Boolean, inherit: true, desc: 'Specifies if widget is enabled.' },
				{ name: 'tooltip_text', val: undefined, inherit: true, desc: 'Specifies a widget tooltip content. Tooltips are shown when a cursor hovers widget.' },
				{ name: 'left', val: undefined, inherit: true, desc: 'Specifies a widget x position.' },
				{ name: 'top', val: undefined, inherit: true, desc: 'Specifies a widget y position.' },
				{ name: 'width', val: undefined, inherit: true, desc: 'Specifies a widget x size.' },
				{ name: 'height', val: undefined, inherit: true, desc: 'Specifies a widget y size.' },
				{ name: 'background_color', val: Colors, inherit: true, desc: 'Specifies a color displayed in widget\'s background' }
			], derives: null
		},

		{
			name: 'Container', methods: [
				{ name: 'layout', val: this.LayoutIds(), inherit: false, desc: 'Specifies a container\'s layout. Layout describes way widgets are positioned inside the container.' },
				{ name: 'widgets', val: undefined, inherit: false, desc: 'Specified a list of widgets inside the container' }
			], derives: 'Widget'
		},

		{
			name: 'Layout', methods: [
				{ name: 'padding', val: undefined, inherit: true, desc: 'Specifies elements padding (inner margins)' }
			], derives: null
		},

		{
			name: 'BoxLayout', methods: [
				{ name: 'spacing', val: undefined, inherit: true, desc: 'Specifies elements spacing (outer margins)' }
			], derives: 'Layout'
		},

		{
			name: 'Button', methods: [
				{ name: 'active', val: Boolean, inherit: true, desc: 'Specifies if button is active (toggled)' },
				{ name: 'toggleable', val: Boolean, inherit: true, desc: 'Specifies if button can be toggled.' }
			], derives: 'widget'
		},

		{
			name: 'ScrollableWidget', methods: [
				{ name: 'scroll', val: undefined, inherit: true, desc: 'Sets scroll position.' },
				{ name: 'items', val: undefined, inherit: true, desc: 'Specifies scoll items.' }
			], derives: 'Widget'
		},

		{
			name: 'ToolWindow', methods: [
				{ name: 'left', val: undefined, inherit: true, desc: 'Specifies a window x position.' },
				{ name: 'top', val: undefined, inherit: true, desc: 'Specifies a window y position.' },
				{ name: 'width', val: undefined, inherit: true, desc: 'Specifies a window x size.' },
				{ name: 'height', val: undefined, inherit: true, desc: 'Specifies a window y size.' },
				{ name: 'title', val: undefined, inherit: true, desc: 'Specifies a window caption displayed on top.' }
			], derives: 'WidgetTreeRoot'
		},

		{
			name: 'TextEditor', methods: [
				{ name: 'content', val: undefined, inherit: true, desc: 'Specifies an editor\'s content' },
				{ name: 'placeholder', val: undefined, inherit: true, desc: 'Specifies an editor\'s placeholder (text displayed when no text is written' },
				{ name: 'multiline', val: Boolean, inherit: true, desc: 'Specifies if editor can handle multiline typing.' }
			], derives: 'ScrollableWidget'
		},

		{
			name: 'Slider', methods: [
				{ name: 'value', val: undefined, inherit: true, desc: 'Specifies a slider value bar position.' },
				{ name: 'mode', val: SliderMode, inherit: true, desc: 'Specifies a slider mode (exponential or linear)' },
				{ name: 'exponent', val: undefined, inherit: true, desc: 'Specifies a slider exponent.' },
				{ name: 'wraparound', val: Boolean, inherit: true, desc: 'Specifies if slider\'s value bar can wrap around the slider.' },
				{ name: 'step', val: undefined, inherit: true, desc: 'Specifies slider\'s step.' },
				{ name: 'min', val: undefined, inherit: true, desc: 'Specifies minimum value (default is 0).' },
				{ name: 'max', val: undefined, inherit: true, desc: 'Specifies maximum value (default is 100).' },
				{ name: 'caption', val: undefined, inherit: true, desc: 'Specifies slider\'s caption text.' },
				{ name: 'text_position', val: TextPosition, inherit: true, desc: 'Specifies slider\'s caption position.' }
			], derives: 'Widget'
		},


		{ name: 'BasicLayout', methods: [], derives: 'Layout' },

		{ name: 'VerticalBoxLayout', methods: [], derives: 'BoxLayout' },

		{ name: 'HorizontalBoxLayout', methods: [], derives: 'BoxLayout' },

		{
			name: 'Application', methods: [
				{ name: 'theme', val: undefined, inherit: true, desc: 'Specifies application\'s theme ini file path.' },
				{ name: 'main_widget', val: this.ClassIds(), desc: 'Adds a main widget to the window.' }
			], derives: 'WidgetTreeRoot'
		},

		{
			name: 'ArrowButton', methods: [
				{ name: 'arrow_direction', val: ArrowDirection, inherit: true, desc: 'Specifies an arrow direction.' },
				{ name: 'arrow_size', val: undefined, inherit: true, desc: 'Specifies an arrow size.' }
			], derives: 'Button'
		},

		{
			name: 'Border', methods: [
				{ name: 'child', val: this.ClassIds(), inherit: true, desc: 'Specifies a border\'s cild element. Each border can only have one child element.' }
			], derives: 'Container'
		},

		{
			name: 'CheckBox', methods: [
				{ name: 'caption', val: undefined, inherit: true, desc: 'Specifies checkbox caption.' },
				{ name: 'box_style', val: CheckBoxStyle, inherit: true, desc: 'Specifies checkbox box style (cross and mark, default cross)' }
			], derives: 'Button'
		},

		{
			name: 'ColorPicker', methods: [
				{ name: 'default_color', val: Colors, inherit: true, desc: 'Specifies default ColorPicker color.' }
			], derives: 'Container'
		},

		{ name: 'Console', methods: [], derives: 'ScrollableWidget' },

		{ name: 'ContextMenu', methods: [], derives: 'Widget' },

		{
			name: 'DateBox', methods: [
				{ name: 'foreground_color', val: Colors, inherit: true, desc: 'Specifies DateBox inactive days color.' },
				{ name: 'text_color', val: Colors, inherit: true, desc: 'Specifies DateBox text color' }
			], derives: 'Container'
		},

		{
			name: 'FileExplorer', methods: [
				{ name: 'type', val: FileExplorerTypes, inherit: true, desc: 'Specifies FileExplorer type (files or folders, default files).' },
				{ name: 'path', val: undefined, inherit: true, desc: 'Specifies FileExplorer\'s starting directory.' }
			], derives: 'ToolWindow'
		},

		{
			name: 'FilePrompt', methods: [
				{ name: 'ext', val: undefined, inherit: true, desc: 'Specified extensions needed in FileExplorer' }
			], derives: 'ToolWindow'
		},

		{ name: 'Frame', methods: [], derives: 'Container' },

		{
			name: 'Grid', methods: [
				{ name: 'spacing', val: undefined, inherit: true, desc: 'Specifies spacing between grid cells.' },
				{ name: 'line_height', val: undefined, inherit: true, desc: 'Specifies grid line height.' },
				{ name: 'rows', val: undefined, inherit: true, desc: 'Specifies Grid\'s row count.' },
				{ name: 'cols', val: undefined, inherit: true, desc: 'Specifies Grid\'s column count.' }
			], derives: 'Container'
		},

		{
			name: 'ImageButton', methods: [
				{ name: 'img', val: undefined, inherit: true, desc: 'Specifies image asset.' }
			], derives: 'Button'
		},

		{
			name: 'Image', methods: [
				{ name: 'img', val: undefined, inherit: true, desc: 'Specifies image asset.' }
			], derives: 'Widget'
		},

		{
			name: 'ListBox', methods: [
				{ name: 'sorted', val: Boolean, inherit: true, desc: 'Specifies if listbox should be sorted.' },
				{ name: 'allow_multichoose', val: Boolean, inherit: true, desc: 'Specifies if user can choose multiple elements.' },
				{ name: 'line_height', val: undefined, inherit: true, desc: 'Specifies ListBox\'s line height.' },
				{ name: 'index', val: undefined, inherit: true, desc: 'Specifies a ListBox default item index.' },
				{ name: 'items', val: undefined, inherit: true, desc: 'Specifies a ListBox\'s items' }
			], derives: 'Container'
		},

		{
			name: 'MessageBox', methods: [
				{ name: 'buttons', val: MsgBoxButtons, inherit: true, desc: 'Specifies a Message Box buttons.' }
			], derives: 'ToolWindow'
		},

		{
			name: 'ProgressBar', methods: [
				{ name: 'content', val: undefined, inherit: true, desc: 'Specifies a text displayed on the progress bar' },
				{ name: 'value', val: undefined, inherit: true, desc: 'Specifies progress bar\'s value' },
				{ name: 'progressbar_type', val: ProgreessBarTypes, inherit: true, desc: 'Specifies a progress bar value type.' },
				{ name: 'max', val: undefined, inherit: true, desc: 'Specifies a progressbar maximum value.' },
				{ name: 'step', val: undefined, inherit: true, desc: 'Specifies a progressbar step.' },
				{ name: 'color', val: Colors, inherit: true, desc: 'Specifies a finished progress color.' }
			], derives: 'Widget'
		},

		{ name: 'Propmpt', methods: [], derives: 'ToolWindow' },

		{
			name: 'RadioButton', methods: [
				{ name: 'caption', val: undefined, inherit: true, desc: 'Specifies a RadioButton\'s displayed text.' }
			], derives: 'Button'
		},

		{
			name: 'RadioGroup', methods: [
				{ name: 'index', val: undefined, inherit: true, desc: 'Specifies a RadioGroup\'s default index.' },
				{ name: 'items', val: undefined, inherit: true, desc: 'Specifies a RadioGroup\'s items.' }
			], derives: 'Container'
		},

		{
			name: 'ComboBox', methods: [
				{ name: 'index', val: undefined, inherit: true, desc: 'Specifies a ComboBox default index.' },
				{ name: 'items', val: undefined, inherit: true, desc: 'Specifies a ComboBox items.' }
			], derives: 'Widget'
		},

		{
			name: 'Menu', methods: [
				{ name: 'index', val: undefined, inherit: true, desc: 'Specifies a Menu\'s default index.' },
				{ name: 'items', val: undefined, inherit: true, desc: 'Specifies a Menu\'s items.' }
			], derives: null
		},

		{
			name: 'StateTextButton', methods: [
				{ name: 'font_size', val: undefined, inherit: true, desc: 'Specifies button font size.' },
				{ name: 'text_align', val: undefined, inherit: true, desc: 'Specifies button text alignment.' },
				{ name: 'foreground_color', val: Colors, inherit: true, desc: 'Specifies button foreground color.' },
				{ name: 'text_color', val: Colors, inherit: true, desc: 'Specifies button text color.' },
				{ name: 'index', val: undefined, inherit: true, desc: 'Specifies a button\'s default index.' },
				{ name: 'items', val: undefined, inherit: true, desc: 'Specifies a button\'s items.' }
			], derives: 'Widget'
		},

		{
			name: 'TabWidget', methods: [
				{ name: 'index', val: undefined, inherit: true, desc: 'Specifies TabWidget\'s default index.' },
				{ name: 'items', val: undefined, inherit: true, desc: 'Specifies TabWidget\'s items.' }
			], derives: 'Container'
		},

		{
			name: 'TextBox', methods: [
				{ name: 'limit', val: undefined, inherit: true, desc: 'Specifies TextBox char limit' },
				{ name: 'data_type', val: TextBoxMode, inherit: true, desc: 'Specifies TextBox data type (number or string, default number)' },
				{ name: 'min', val: undefined, inherit: true, desc: 'Specifies TextBox minimum value, valid only for numerical TextBoxes' },
				{ name: 'max', val: undefined, inherit: true, desc: 'Specifies TextBox maximum value, valid only for numerical TextBoxes' },
			], derives: 'TextEditor'
		},

		{
			name: 'TextButton', methods: [
				{ name: 'caption', val: undefined, inherit: true, desc: 'Specifies button content.' },
				{ name: 'font_size', val: undefined, inherit: true, desc: 'Specifies button font size.' },
				{ name: 'text_align', val: undefined, inherit: true, desc: 'Specifies button text alignment.' },
				{ name: 'foreground_color', val: Colors, inherit: true, desc: 'Specifies button foreground color.' },
				{ name: 'text_color', val: Colors, inherit: true, desc: 'Specifies button text color.' },
			], derives: 'Button'
		},

		{
			name: 'TextField', methods: [
				{ name: 'content', val: undefined, inherit: true, desc: 'sPECIFIES TextField\'s content.' },
				{ name: 'font_size', val: undefined, inherit: true, desc: 'Specifies TextField\'s font size.' },
				{ name: 'text_align', val: undefined, inherit: true, desc: 'Specifies TextField\'s text alignment.' },
				{ name: 'foreground_color', val: Colors, inherit: true, desc: 'Specifies TextField\'s foreground color.' },
				{ name: 'text_color', val: Colors, inherit: true, desc: 'Specifies TextField\'s text color.' },
				{ name: 'padding', val: undefined, inherit: true, desc: 'Specifies TextField\'s PADDING' }
			], derives: 'Widget'
		},

		{
			name: 'UnitSlider', methods: [
				{ name: 'unit', val: Units, inherit: true, desc: '' }
			], derives: 'Slider'
		},

		{
			name: 'ValueSlider', methods: [
				{ name: 'unit', val: undefined, inherit: true, desc: '' }
			], derives: 'Slider'
		}
	];
}
