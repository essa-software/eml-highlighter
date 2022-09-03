import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	function get_type(document: vscode.TextDocument, position: vscode.Position) {
		let counter = 0;
		for (let i = position.line - 1; i >= 0; i--) {
			let line = document.lineAt(i).text;
			if (line.endsWith('}')) {
				counter--;
			}

			if (line.endsWith('{')) {
				counter++;
				line = line.substr(0, line.length - 1).trim();
				const splitted = line.split(' ');

				for (let word of splitted) {
					if (word.startsWith('@') && counter > 0) {
						word = word.substr(1, word.length - 1).trim();

						return word;
					}
				}
			}

		}

		return null;
	}

	const RegisterClasses = vscode.languages.registerCompletionItemProvider('eml', {
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
			const linePrefix = document.lineAt(position).text.substr(0, position.character - 1).trim();

			const type = get_type(document, position);

			if (linePrefix.endsWith('layout:') || (!linePrefix.endsWith('main_widget:') && type != null && type != 'Container')) {
				return undefined;
			}

			const Application = new vscode.CompletionItem('Application', vscode.CompletionItemKind.Class);
			Application.documentation = new vscode.MarkdownString('Represents a root element of the application. Every ESSA program is supposed to have only one *@Application* node.');

			const ArrowButton = new vscode.CompletionItem('ArrowButton', vscode.CompletionItemKind.Class);
			ArrowButton.documentation = new vscode.MarkdownString('Special button type with an arrow towards specified direction on it.');

			const Border = new vscode.CompletionItem('Border', vscode.CompletionItemKind.Class);
			Border.documentation = new vscode.MarkdownString('Special container type with only one child filling its whole space.');

			const Canvas = new vscode.CompletionItem('Canvas', vscode.CompletionItemKind.Class);
			Canvas.documentation = new vscode.MarkdownString('');

			const CheckBox = new vscode.CompletionItem('CheckBox', vscode.CompletionItemKind.Class);
			CheckBox.documentation = new vscode.MarkdownString('');

			const ColorPicker = new vscode.CompletionItem('ColorPicker', vscode.CompletionItemKind.Class);
			ColorPicker.documentation = new vscode.MarkdownString('');

			const Console = new vscode.CompletionItem('Console', vscode.CompletionItemKind.Class);
			Console.documentation = new vscode.MarkdownString('');

			const Container = new vscode.CompletionItem('Container', vscode.CompletionItemKind.Class);
			Container.documentation = new vscode.MarkdownString('');

			const ContextMenu = new vscode.CompletionItem('ContextMenu', vscode.CompletionItemKind.Class);
			ContextMenu.documentation = new vscode.MarkdownString('');

			const DateBox = new vscode.CompletionItem('DateBox', vscode.CompletionItemKind.Class);
			DateBox.documentation = new vscode.MarkdownString('');

			const FileExplorer = new vscode.CompletionItem('FileExplorer', vscode.CompletionItemKind.Class);
			FileExplorer.documentation = new vscode.MarkdownString('');

			const FilePrompt = new vscode.CompletionItem('FilePrompt', vscode.CompletionItemKind.Class);
			FilePrompt.documentation = new vscode.MarkdownString('');

			const Frame = new vscode.CompletionItem('Frame', vscode.CompletionItemKind.Class);
			Frame.documentation = new vscode.MarkdownString('');

			const Grid = new vscode.CompletionItem('Grid', vscode.CompletionItemKind.Class);
			Grid.documentation = new vscode.MarkdownString('');

			const Image = new vscode.CompletionItem('Image', vscode.CompletionItemKind.Class);
			Image.documentation = new vscode.MarkdownString('');

			const ImageButton = new vscode.CompletionItem('ImageButton', vscode.CompletionItemKind.Class);
			ImageButton.documentation = new vscode.MarkdownString('');

			const ListBox = new vscode.CompletionItem('ListBox', vscode.CompletionItemKind.Class);
			ListBox.documentation = new vscode.MarkdownString('');

			const Menu = new vscode.CompletionItem('Menu', vscode.CompletionItemKind.Class);
			Menu.documentation = new vscode.MarkdownString('');

			const MessageBox = new vscode.CompletionItem('MessageBox', vscode.CompletionItemKind.Class);
			MessageBox.documentation = new vscode.MarkdownString('');

			const ProgressBar = new vscode.CompletionItem('ProgressBar', vscode.CompletionItemKind.Class);
			ProgressBar.documentation = new vscode.MarkdownString('');

			const Prompt = new vscode.CompletionItem('Prompt', vscode.CompletionItemKind.Class);
			Prompt.documentation = new vscode.MarkdownString('');

			const RadioButton = new vscode.CompletionItem('RadioButton', vscode.CompletionItemKind.Class);
			RadioButton.documentation = new vscode.MarkdownString('');

			const RadioGroup = new vscode.CompletionItem('RadioGroup', vscode.CompletionItemKind.Class);
			RadioGroup.documentation = new vscode.MarkdownString('');

			const Scrollable = new vscode.CompletionItem('Scrollable', vscode.CompletionItemKind.Class);
			Scrollable.documentation = new vscode.MarkdownString('');

			const SelectWidget = new vscode.CompletionItem('SelectWidget', vscode.CompletionItemKind.Class);
			SelectWidget.documentation = new vscode.MarkdownString('');

			const Slider = new vscode.CompletionItem('Slider', vscode.CompletionItemKind.Class);
			Slider.documentation = new vscode.MarkdownString('');

			const StateTextButton = new vscode.CompletionItem('StateTextButton', vscode.CompletionItemKind.Class);
			StateTextButton.documentation = new vscode.MarkdownString('');

			const TabWidget = new vscode.CompletionItem('TabWidget', vscode.CompletionItemKind.Class);
			TabWidget.documentation = new vscode.MarkdownString('');

			const TextBox = new vscode.CompletionItem('TextBox', vscode.CompletionItemKind.Class);
			TextBox.documentation = new vscode.MarkdownString('');

			const TextButton = new vscode.CompletionItem('TextButton', vscode.CompletionItemKind.Class);
			TextButton.documentation = new vscode.MarkdownString('');

			const TextEditor = new vscode.CompletionItem('TextEditor', vscode.CompletionItemKind.Class);
			TextEditor.documentation = new vscode.MarkdownString('');

			const TextField = new vscode.CompletionItem('TextField', vscode.CompletionItemKind.Class);
			TextField.documentation = new vscode.MarkdownString('');

			const ToolWindow = new vscode.CompletionItem('ToolWindow', vscode.CompletionItemKind.Class);
			ToolWindow.documentation = new vscode.MarkdownString('');

			const UnitSlider = new vscode.CompletionItem('UnitSlider', vscode.CompletionItemKind.Class);
			UnitSlider.documentation = new vscode.MarkdownString('');

			const ValueSlider = new vscode.CompletionItem('ValueSlider', vscode.CompletionItemKind.Class);
			ValueSlider.documentation = new vscode.MarkdownString('');

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
				Scrollable, SelectWidget, Slider, StateTextButton,
				TabWidget, TextBox, TextButton, TextEditor, TextField, ToolWindow,
				UnitSlider,
				ValueSlider
			];
		}
	}, '@');

	const RegisterLayoutClasses = vscode.languages.registerCompletionItemProvider('eml', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
			const linePrefix = document.lineAt(position).text.substr(0, position.character - 1).trim();

			if (!linePrefix.endsWith('layout:')) {
				return undefined;
			}

			const BasicLayout = new vscode.CompletionItem('@BasicLayout', vscode.CompletionItemKind.Class);
			BasicLayout.documentation = new vscode.MarkdownString('');

			const BoxLayout = new vscode.CompletionItem('@BoxLayout', vscode.CompletionItemKind.Class);
			BoxLayout.documentation = new vscode.MarkdownString('');

			const HorizontalBoxLayout = new vscode.CompletionItem('@HorizontalBoxLayout', vscode.CompletionItemKind.Class);
			HorizontalBoxLayout.documentation = new vscode.MarkdownString('');

			const VerticalBoxLayout = new vscode.CompletionItem('@VerticalBoxLayout', vscode.CompletionItemKind.Class);
			VerticalBoxLayout.documentation = new vscode.MarkdownString('');

			return [
				BasicLayout, BoxLayout,
				HorizontalBoxLayout,
				VerticalBoxLayout
			];
		}
	}, '@');

	// TODO: Use something other instead of INI in theme

	const ColorThemeElements = vscode.languages.registerCompletionItemProvider(
		'ini',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				return [
					new vscode.CompletionItem('gutter', vscode.CompletionItemKind.Variable),
					new vscode.CompletionItem('label', vscode.CompletionItemKind.Variable),
					new vscode.CompletionItem('list_even', vscode.CompletionItemKind.Variable),
					new vscode.CompletionItem('list_odd', vscode.CompletionItemKind.Variable),
					new vscode.CompletionItem('menu', vscode.CompletionItemKind.Variable),
					new vscode.CompletionItem('tooltip', vscode.CompletionItemKind.Variable),
					new vscode.CompletionItem('textbox', vscode.CompletionItemKind.Variable),
					new vscode.CompletionItem('selection', vscode.CompletionItemKind.Variable),
					new vscode.CompletionItem('image_button', vscode.CompletionItemKind.Variable),
					new vscode.CompletionItem('text_button', vscode.CompletionItemKind.Variable),
					new vscode.CompletionItem('tab_button', vscode.CompletionItemKind.Variable)
				];
			}
		}
	);

	const Keywords = vscode.languages.registerCompletionItemProvider(
		'eml',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				return [
					new vscode.CompletionItem('define', vscode.CompletionItemKind.Keyword),
					new vscode.CompletionItem('external', vscode.CompletionItemKind.Keyword),
					new vscode.CompletionItem('asset', vscode.CompletionItemKind.Keyword)
				];
			}
		}
	);

	const BgFgTextColorTheme = vscode.languages.registerCompletionItemProvider(
		'ini',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.substr(0, position.character);

				const contents = ['gutter', 'label', 'list_even', 'list_odd', 'menu', 'tooltip', 'focused', 'unfocused', 'hovered', 'unhovered', 'normal', 'disabled'];

				let valid = false;
				for (const c of contents) {
					if (linePrefix.endsWith(c + '.')) {
						valid = true;

						break;
					}
				}

				if (!valid) {
					return undefined;
				}

				if (!valid) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('background', vscode.CompletionItemKind.Property),
					new vscode.CompletionItem('foreground', vscode.CompletionItemKind.Property),
					new vscode.CompletionItem('text', vscode.CompletionItemKind.Property),
				];
			}
		},
		'.'
	);

	const TextBoxColorTheme = vscode.languages.registerCompletionItemProvider(
		'ini',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.substr(0, position.character);

				const contents = ['textbox'];

				let valid = false;
				for (const c of contents) {
					if (linePrefix.endsWith(c + '.')) {
						valid = true;

						break;
					}
				}

				if (!valid) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('disabled', vscode.CompletionItemKind.Property),
					new vscode.CompletionItem('normal', vscode.CompletionItemKind.Property),
				];
			}
		},
		'.'
	);

	const SelectionColorTheme = vscode.languages.registerCompletionItemProvider(
		'ini',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.substr(0, position.character);

				const contents = ['selection'];

				let valid = false;
				for (const c of contents) {
					if (linePrefix.endsWith(c + '.')) {
						valid = true;

						break;
					}
				}

				if (!valid) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('focused', vscode.CompletionItemKind.Property),
					new vscode.CompletionItem('unfocused', vscode.CompletionItemKind.Property),
				];
			}
		},
		'.'
	);

	const HoverableWidgetColorTheme = vscode.languages.registerCompletionItemProvider(
		'ini',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.substr(0, position.character);

				const contents = ['active', 'inactive', 'normal'];

				let valid = false;
				for (const c of contents) {
					if (linePrefix.endsWith(c + '.')) {
						valid = true;

						break;
					}
				}

				if (!valid) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('hovered', vscode.CompletionItemKind.Property),
					new vscode.CompletionItem('unhovered', vscode.CompletionItemKind.Property),
				];
			}
		},
		'.'
	);

	const ButtonColorTheme = vscode.languages.registerCompletionItemProvider(
		'ini',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.substr(0, position.character);

				const contents = ['image_button', 'text_button', 'tab_button'];

				let valid = false;
				for (const c of contents) {
					if (linePrefix.endsWith(c + '.')) {
						valid = true;

						break;
					}
				}

				if (!valid) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('active', vscode.CompletionItemKind.Property),
					new vscode.CompletionItem('inactive', vscode.CompletionItemKind.Property),
					new vscode.CompletionItem('normal', vscode.CompletionItemKind.Property),
					new vscode.CompletionItem('disabled', vscode.CompletionItemKind.Property),
				];
			}
		},
		'.'
	);

	const Properties = vscode.languages.registerCompletionItemProvider(
		'eml',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
				const classes = [
					{
						name: 'WidgetTreeRoot', methods: [
							'id'
						], derives: null
					},

					{
						name: 'Widget', methods: [
							'id',
							'class',
							'visible',
							'enabled',
							'tooltip_text',
							'x',
							'y',
							'width',
							'height',
							'background_color'
						], derives: null
					},

					{
						name: 'Container', methods: [
							'layout'
						], derives: 'Widget'
					},

					{
						name: 'Layout', methods: [
							'padding'
						], derives: null
					},

					{
						name: 'BoxLayout', methods: [
							'spacing'
						], derives: 'Layout'
					},

					{
						name: 'Button', methods: [
							'active',
							'toggleable',
						], derives: 'widget'
					},

					{
						name: 'ScrollableWidget', methods: [
							'scroll'
						], derives: 'Widget'
					},

					{
						name: 'ToolWindow', methods: [
							'x',
							'y',
							'position',
							'title'
						], derives: 'WidgetTreeRoot'
					},

					{
						name: 'TextEditor', methods: [
							'content',
							'placeholder',
							'multiline',
						], derives: 'ScrollableWidget'
					},

					{ name: 'BasicLayout', methods: [], derives: 'Layout' },

					{ name: 'VerticalBoxLayout', methods: [], derives: 'BoxLayout' },

					{ name: 'HorizontalBoxLayout', methods: [], derives: 'BoxLayout' },

					{
						name: 'Application', methods: [
							'theme',
							'main_widget'
						], derives: 'WidgetTreeRoot'
					},

					{
						name: 'ArrowButton', methods: [
							'arrow_type',
							'arrow_size'
						], derives: 'Button'
					},

					{
						name: 'Border', methods: [
							'child'
						], derives: 'Container'
					},

					{
						name: 'CheckBox', methods: [
							'caption',
							'box_style'
						], derives: 'Button'
					},

					{
						name: 'ColorPicker', methods: [
							'color'
						], derives: 'Container'
					},

					{ name: 'Console', methods: [], derives: 'ScrollableWidget' },

					{ name: 'ContextMenu', methods: [], derives: 'Widget' },

					{
						name: 'DateBox', methods: [
							'foreground_color',
							'text_color'
						], derives: 'Container'
					},

					{
						name: 'FileExplorer', methods: [
							'type',
							'path'
						], derives: 'ToolWindow'
					},

					{
						name: 'FilePrompt', methods: [
							'ext'
						], derives: 'ToolWindow'
					},

					{ name: 'Frame', methods: [], derives: 'Container' },

					{
						name: 'Grid', methods: [
							'spacing',
							'line_height',
							'width',
							'height'
						], derives: 'Container'
					},

					{
						name: 'ImageButton', methods: [
							'img'
						], derives: 'Button'
					},

					{
						name: 'Image', methods: [
							'path'
						], derives: 'Widget'
					},

					{
						name: 'ListBox', methods: [
							'sorted',
							'allow_multichoose',
							'line_height',
							'index',
							'items'
						], derives: 'Container'
					},

					{
						name: 'MessageBox', methods: [
							'buttons'
						], derives: 'ToolWindow'
					},

					{
						name: 'ProgressBar', methods: [
							'content',
							'value',
							'scrollbar_type',
							'min',
							'max',
							'step',
							'color'
						], derives: 'Widget'
					},

					{ name: 'Propmpt', methods: [], derives: 'ToolWindow' },

					{
						name: 'RadioButton', methods: [
							'caption'
						], derives: 'Button'
					},

					{
						name: 'RadioGroup', methods: [
							'index',
							'items'
						], derives: 'Container'
					},

					{
						name: 'SelectWidget', methods: [
							'index',
							'items'
						], derives: 'Widget'
					},

					{
						name: 'Menu', methods: [
							'index',
							'items'
						], derives: null
					},

					{
						name: 'Slider', methods: [
							'value',
							'mode',
							'exponent',
							'wraparound',
							'step',
							'min',
							'max',
							'caption',
							'text_position'
						], derives: 'Widget'
					},

					{
						name: 'StateTextButton', methods: [
							'font_size',
							'foreground_color',
							'text_color',
							'index',
							'items'
						], derives: 'Widget'
					},

					{
						name: 'TabWidget', methods: [
							'index',
							'items'
						], derives: 'Container'
					},

					{
						name: 'TextBox', methods: [
							'limit',
							'data_type',
							'min',
							'max'
						], derives: 'TextEditor'
					},

					{
						name: 'TextButton', methods: [
							'caption',
							'img',
							'font_size',
							'text_align'
						], derives: 'Button'
					},

					{
						name: 'TextField', methods: [
							'content',
							'font_size',
							'text_align',
							'padding'
						], derives: 'Widget'
					},

					{
						name: 'UnitSlider', methods: [
							'value',
							'step',
							'min',
							'max',
							'caption',
							'unit'
						], derives: 'Widget'
					},

					{
						name: 'ValueSlider', methods: [
							'unit'
						], derives: 'Slider'
					}
				];

				let type = get_type(document, position);

				if (type == null) {
					return undefined;
				}

				const result = [];
				while (type != null) {
					for (const c of classes) {
						if (c.name == type) {
							for (const m of c.methods) {
								const method = new vscode.CompletionItem(m + ': ', vscode.CompletionItemKind.Method);
								result.push(method);
							}

							type = c.derives;
							break;
						}
					}
				}

				return result;
			}
		}
	);

	context.subscriptions.push(RegisterClasses, Keywords, Properties, ColorThemeElements, BgFgTextColorTheme, TextBoxColorTheme, SelectionColorTheme, HoverableWidgetColorTheme, ButtonColorTheme);
}
