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

export interface Constants{
	Classes : Array<object>;
}

export class Classes implements Constants{
	Classes = [
	{
		name: 'WidgetTreeRoot', methods: [
			{ name: 'id', val: undefined },
		], derives: null
	},

	{
		name: 'Widget', methods: [
			{ name: 'id', val: undefined },
			{ name: 'class', val: undefined },
			{ name: 'visible', val: Boolean },
			{ name: 'enabled', val: Boolean },
			{ name: 'tooltip_text', val: undefined },
			{ name: 'x', val: undefined },
			{ name: 'y', val: undefined },
			{ name: 'width', val: undefined },
			{ name: 'height', val: undefined },
			{ name: 'background_color', val: Colors }
		], derives: null
	},

	{
		name: 'Container', methods: [
			{ name: 'layout', val: undefined }
		], derives: 'Widget'
	},

	{
		name: 'Layout', methods: [
			{ name: 'padding', val: undefined }
		], derives: null
	},

	{
		name: 'BoxLayout', methods: [
			{ name: 'spacing', val: undefined }
		], derives: 'Layout'
	},

	{
		name: 'Button', methods: [
			{ name: 'active', val: Boolean },
			{ name: 'toggleable', val: Boolean }
		], derives: 'widget'
	},

	{
		name: 'ScrollableWidget', methods: [
			{ name: 'scroll', val: undefined }
		], derives: 'Widget'
	},

	{
		name: 'ToolWindow', methods: [
			{ name: 'x', val: undefined },
			{ name: 'y', val: undefined },
			{ name: 'position', val: undefined },
			{ name: 'title', val: undefined }
		], derives: 'WidgetTreeRoot'
	},

	{
		name: 'TextEditor', methods: [
			{ name: 'content', val: undefined },
			{ name: 'placeholder', val: undefined },
			{ name: 'multiline', val: undefined }
		], derives: 'ScrollableWidget'
	},


	{ name: 'BasicLayout', methods: [], derives: 'Layout' },

	{ name: 'VerticalBoxLayout', methods: [], derives: 'BoxLayout' },

	{ name: 'HorizontalBoxLayout', methods: [], derives: 'BoxLayout' },

	{
		name: 'Application', methods: [
			{ name: 'theme', val: undefined },
			{ name: 'main_widget', val: undefined }
		], derives: 'WidgetTreeRoot'
	},

	{
		name: 'ArrowButton', methods: [
			{ name: 'arrow_type', val: ArrowDirection },
			{ name: 'arrow_size', val: undefined }
		], derives: 'Button'
	},

	{
		name: 'Border', methods: [
			{ name: 'child', val: undefined }
		], derives: 'Container'
	},

	{
		name: 'CheckBox', methods: [
			{ name: 'caption', val: undefined },
			{ name: 'box_style', val: CheckBoxStyle }
		], derives: 'Button'
	},

	{
		name: 'ColorPicker', methods: [
			{ name: 'default_color', val: Colors }
		], derives: 'Container'
	},

	{ name: 'Console', methods: [], derives: 'ScrollableWidget' },

	{ name: 'ContextMenu', methods: [], derives: 'Widget' },

	{
		name: 'DateBox', methods: [
			{ name: 'foreground_color', val: Colors },
			{ name: 'text_color', val: Colors }
		], derives: 'Container'
	},

	{
		name: 'FileExplorer', methods: [
			{ name: 'type', val: FileExplorerTypes },
			{ name: 'path', val: undefined }
		], derives: 'ToolWindow'
	},

	{
		name: 'FilePrompt', methods: [
			{ name: 'ext', val: undefined }
		], derives: 'ToolWindow'
	},

	{ name: 'Frame', methods: [], derives: 'Container' },

	{
		name: 'Grid', methods: [
			{ name: 'spacing', val: undefined },
			{ name: 'line_height', val: undefined },
			{ name: 'width', val: undefined },
			{ name: 'height', val: undefined }
		], derives: 'Container'
	},

	{
		name: 'ImageButton', methods: [
			{ name: 'img', val: undefined }
		], derives: 'Button'
	},

	{
		name: 'Image', methods: [
			{ name: 'path', val: undefined }
		], derives: 'Widget'
	},

	{
		name: 'ListBox', methods: [
			{ name: 'sorted', val: Boolean },
			{ name: 'allow_multichoose', val: Boolean },
			{ name: 'line_height', val: undefined },
			{ name: 'index', val: undefined },
			{ name: 'items', val: undefined }
		], derives: 'Container'
	},

	{
		name: 'MessageBox', methods: [
			{ name: 'buttons', val: MsgBoxButtons }
		], derives: 'ToolWindow'
	},

	{
		name: 'ProgressBar', methods: [
			{ name: 'content', val: undefined },
			{ name: 'value', val: undefined },
			{ name: 'scrollbar_type', val: ProgreessBarTypes },
			{ name: 'min', val: undefined },
			{ name: 'max', val: undefined },
			{ name: 'step', val: undefined },
			{ name: 'color', val: Colors }
		], derives: 'Widget'
	},

	{ name: 'Propmpt', methods: [], derives: 'ToolWindow' },

	{
		name: 'RadioButton', methods: [
			{ name: 'caption', val: undefined }
		], derives: 'Button'
	},

	{
		name: 'RadioGroup', methods: [
			{ name: 'index', val: undefined },
			{ name: 'items', val: undefined }
		], derives: 'Container'
	},

	{
		name: 'SelectWidget', methods: [
			{ name: 'index', val: undefined },
			{ name: 'items', val: undefined }
		], derives: 'Widget'
	},

	{
		name: 'Menu', methods: [
			{ name: 'index', val: undefined },
			{ name: 'items', val: undefined }
		], derives: null
	},

	{
		name: 'Slider', methods: [
			{ name: 'value', val: undefined },
			{ name: 'mode', val: SliderMode },
			{ name: 'exponent', val: undefined },
			{ name: 'wraparound', val: Boolean },
			{ name: 'step', val: undefined },
			{ name: 'min', val: undefined },
			{ name: 'max', val: undefined },
			{ name: 'caption', val: undefined },
			{ name: 'text_position', val: TextPosition }
		], derives: 'Widget'
	},

	{
		name: 'StateTextButton', methods: [
			{ name: 'font_size', val: undefined },
			{ name: 'foreground_color', val: Colors },
			{ name: 'text_color', val: Colors },
			{ name: 'index', val: undefined },
			{ name: 'items', val: undefined }
		], derives: 'Widget'
	},

	{
		name: 'TabWidget', methods: [
			{ name: 'index', val: undefined },
			{ name: 'items', val: undefined }
		], derives: 'Container'
	},

	{
		name: 'TextBox', methods: [
			{ name: 'limit', val: undefined },
			{ name: 'data_type', val: TextBoxMode },
			{ name: 'min', val: undefined },
			{ name: 'max', val: undefined },
		], derives: 'TextEditor'
	},

	{
		name: 'TextButton', methods: [
			{ name: 'caption', val: undefined },
			{ name: 'img', val: undefined },
			{ name: 'font_size', val: undefined },
			{ name: 'text_align', val: TextAlignment }
		], derives: 'Button'
	},

	{
		name: 'TextField', methods: [
			{ name: 'content', val: undefined },
			{ name: 'font_size', val: undefined },
			{ name: 'text_align', val: TextAlignment },
			{ name: 'padding', val: undefined }
		], derives: 'Widget'
	},

	{
		name: 'UnitSlider', methods: [
			{ name: 'value', val: undefined },
			{ name: 'step', val: undefined },
			{ name: 'min', val: undefined },
			{ name: 'max', val: undefined },
			{ name: 'caption', val: undefined },
			{ name: 'unit', val: Units }
		], derives: 'Widget'
	},

	{
		name: 'ValueSlider', methods: [
			{ name: 'unit', val: undefined }
		], derives: 'Slider'
	}
];
}
