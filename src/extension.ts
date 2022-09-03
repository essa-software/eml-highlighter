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

			if (linePrefix.endsWith('layout:') || (!linePrefix.endsWith('main_widget:') && !linePrefix.endsWith('child:') && type != null && type != 'Container')) {
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

	const ProcessBarTypes = [
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


	const classes = [
		{
			name: 'WidgetTreeRoot', methods: [
				{name: 'id', val: undefined},
			], derives: null
		},

		{
			name: 'Widget', methods: [
				{name: 'id', val: undefined},
				{name: 'class', val: undefined},
				{name: 'visible', val: Boolean},
				{name: 'enabled', val: Boolean},
				{name: 'tooltip_text', val: undefined},
				{name: 'x', val: undefined},
				{name: 'y', val: undefined},
				{name: 'width', val: undefined},
				{name: 'height', val: undefined},
				{name: 'background_color', val: Colors}
			], derives: null
		},

		{
			name: 'Container', methods: [
				{name: 'layout', val: undefined}
			], derives: 'Widget'
		},

		{
			name: 'Layout', methods: [
				{name: 'padding', val: undefined}
			], derives: null
		},

		{
			name: 'BoxLayout', methods: [
				{name: 'spacing', val: undefined}
			], derives: 'Layout'
		},

		{
			name: 'Button', methods: [
				{name: 'active', val: Boolean},
				{name: 'toggleable', val: Boolean}
			], derives: 'widget'
		},

		{
			name: 'ScrollableWidget', methods: [
				{name: 'scroll', val: undefined}
			], derives: 'Widget'
		},

		{
			name: 'ToolWindow', methods: [
				{name: 'x', val: undefined},
				{name: 'y', val: undefined},
				{name: 'position', val: undefined},
				{name: 'title', val: undefined}
			], derives: 'WidgetTreeRoot'
		},

		{
			name: 'TextEditor', methods: [
				{name: 'content', val: undefined},
				{name: 'placeholder', val: undefined},
				{name: 'multiline', val: undefined}
			], derives: 'ScrollableWidget'
		},


		{ name: 'BasicLayout', methods: [], derives: 'Layout' },

		{ name: 'VerticalBoxLayout', methods: [], derives: 'BoxLayout' },

		{ name: 'HorizontalBoxLayout', methods: [], derives: 'BoxLayout' },

		{
			name: 'Application', methods: [
				{name: 'theme', val: undefined},
				{name: 'main_widget', val: undefined}
			], derives: 'WidgetTreeRoot'
		},

		{
			name: 'ArrowButton', methods: [
				{name: 'arrow_type', val: ArrowDirection},
				{name: 'arrow_size', val: undefined}
			], derives: 'Button'
		},

		{
			name: 'Border', methods: [
				{name: 'child', val: undefined}
			], derives: 'Container'
		},

		{
			name: 'CheckBox', methods: [
				{name: 'caption', val: undefined},
				{name: 'box_style', val: CheckBoxStyle}
			], derives: 'Button'
		},

		{
			name: 'ColorPicker', methods: [
				{name: 'default_color', val: Colors}
			], derives: 'Container'
		},

		{ name: 'Console', methods: [], derives: 'ScrollableWidget' },

		{ name: 'ContextMenu', methods: [], derives: 'Widget' },

		{
			name: 'DateBox', methods: [
				{name: 'foreground_color', val: Colors},
				{name: 'text_color', val: Colors}
			], derives: 'Container'
		},

		{
			name: 'FileExplorer', methods: [
				{name: 'type', val: FileExplorerTypes},
				{name: 'path', val: undefined}
			], derives: 'ToolWindow'
		},

		{
			name: 'FilePrompt', methods: [
				{name: 'ext', val: undefined}
			], derives: 'ToolWindow'
		},

		{ name: 'Frame', methods: [], derives: 'Container' },

		{
			name: 'Grid', methods: [
				{name: 'spacing', val: undefined},
				{name: 'line_height', val: undefined},
				{name: 'width', val: undefined},
				{name: 'height', val: undefined}
			], derives: 'Container'
		},

		{
			name: 'ImageButton', methods: [
				{name: 'img', val: undefined}
			], derives: 'Button'
		},

		{
			name: 'Image', methods: [
				{name: 'path', val: undefined}
			], derives: 'Widget'
		},

		{
			name: 'ListBox', methods: [
				{name: 'sorted', val: Boolean},
				{name: 'allow_multichoose', val: Boolean},
				{name: 'line_height', val: undefined},
				{name: 'index', val: undefined},
				{name: 'items', val: undefined}
			], derives: 'Container'
		},

		{
			name: 'MessageBox', methods: [
				{name: 'buttons', val: MsgBoxButtons}
			], derives: 'ToolWindow'
		},

		{
			name: 'ProgressBar', methods: [
				{name: 'content', val: undefined},
				{name: 'value', val: undefined},
				{name: 'scrollbar_type', val: ProcessBarTypes},
				{name: 'min', val: undefined},
				{name: 'max', val: undefined},
				{name: 'step', val: undefined},
				{name: 'color', val: Colors}
			], derives: 'Widget'
		},

		{ name: 'Propmpt', methods: [], derives: 'ToolWindow' },

		{
			name: 'RadioButton', methods: [
				{name: 'caption', val: undefined}
			], derives: 'Button'
		},

		{
			name: 'RadioGroup', methods: [
				{name: 'index', val: undefined},
				{name: 'items', val: undefined}
			], derives: 'Container'
		},

		{
			name: 'SelectWidget', methods: [
				{name: 'index', val: undefined},
				{name: 'items', val: undefined}
			], derives: 'Widget'
		},

		{
			name: 'Menu', methods: [
				{name: 'index', val: undefined},
				{name: 'items', val: undefined}
			], derives: null
		},

		{
			name: 'Slider', methods: [
				{name: 'value', val: undefined},
				{name: 'mode', val: SliderMode},
				{name: 'exponent', val: undefined},
				{name: 'wraparound', val: Boolean},
				{name: 'step', val: undefined},
				{name: 'min', val: undefined},
				{name: 'max', val: undefined},
				{name: 'caption', val: undefined},
				{name: 'text_position', val: TextPosition}
			], derives: 'Widget'
		},

		{
			name: 'StateTextButton', methods: [
				{name: 'font_size', val: undefined},
				{name: 'foreground_color', val: Colors},
				{name: 'text_color', val: Colors},
				{name: 'index', val: undefined},
				{name: 'items', val: undefined}
			], derives: 'Widget'
		},

		{
			name: 'TabWidget', methods: [
				{name: 'index', val: undefined},
				{name: 'items', val: undefined}
			], derives: 'Container'
		},

		{
			name: 'TextBox', methods: [
				{name: 'limit', val: undefined},
				{name: 'data_type', val: TextBoxMode},
				{name: 'min', val: undefined},
				{name: 'max', val: undefined},
			], derives: 'TextEditor'
		},

		{
			name: 'TextButton', methods: [
				{name: 'caption', val: undefined},
				{name: 'img', val: undefined},
				{name: 'font_size', val: undefined},
				{name: 'text_align', val: TextAlignment}
			], derives: 'Button'
		},

		{
			name: 'TextField', methods: [
				{name: 'content', val: undefined},
				{name: 'font_size', val: undefined},
				{name: 'text_align', val: TextAlignment},
				{name: 'padding', val: undefined}
			], derives: 'Widget'
		},

		{
			name: 'UnitSlider', methods: [
				{name: 'value', val: undefined},
				{name: 'step', val: undefined},
				{name: 'min', val: undefined},
				{name: 'max', val: undefined},
				{name: 'caption', val: undefined},
				{name: 'unit', val: Units}
			], derives: 'Widget'
		},

		{
			name: 'ValueSlider', methods: [
				{name: 'unit', val: undefined}
			], derives: 'Slider'
		}
	];

	const Properties = vscode.languages.registerCompletionItemProvider(
		'eml',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
<<<<<<< HEAD
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
=======
>>>>>>> accd7db (Values support (kind of))

				let type = get_type(document, position);

				if (type == null) {
					return undefined;
				}

				const result = new Array();
				while (type != null) {
					for (const c of classes) {
						if (c.name == type) {
							for (const m of c.methods) {
								const method = new vscode.CompletionItem(m.name + ': ', vscode.CompletionItemKind.Method);
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

	const Values = vscode.languages.registerCompletionItemProvider(
		'eml',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
				let linePrefix = document.lineAt(position).text.substr(0, position.character - 1).trim();

				let type = get_type(document, position);

				if (type == null) {
					return undefined;
				}

				while(type != null){
					for (const c of classes) {
						if (c.name == type) {
							for (const m of c.methods) {
								if(linePrefix.endsWith(m.name)){
									return m.val;
								}
							}

							type = c.derives;
							break;
						}
					}
				}

				return undefined;
			}
		}
	);

	context.subscriptions.push(RegisterClasses, Keywords, Properties, Values, ColorThemeElements, BgFgTextColorTheme, TextBoxColorTheme, SelectionColorTheme, HoverableWidgetColorTheme, ButtonColorTheme);
}
