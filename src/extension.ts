import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const RegisterClasses = vscode.languages.registerCompletionItemProvider('plaintext', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			const Application = new vscode.CompletionItem('Application', vscode.CompletionItemKind.Class);
			Application.documentation = new vscode.MarkdownString('Reprezents a root element of the application. Every ESSA program is supposed to have only one *@Application* node.');

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

			const ImageButton = new vscode.CompletionItem('ImageButton', vscode.CompletionItemKind.Class);
			ImageButton.documentation = new vscode.MarkdownString('');

			const ListBox = new vscode.CompletionItem('ListBox', vscode.CompletionItemKind.Class);
			ListBox.documentation = new vscode.MarkdownString('');

			const ListView = new vscode.CompletionItem('ListView', vscode.CompletionItemKind.Class);
			ListView.documentation = new vscode.MarkdownString('');

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

			const Menu = new vscode.CompletionItem('Menu', vscode.CompletionItemKind.Class);
			Menu.documentation = new vscode.MarkdownString('');

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
				ImageButton,
				ListBox, ListView,
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

	const ColorThemeElements = vscode.languages.registerCompletionItemProvider(
		'plaintext',
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

	const BgFgTextColorTheme = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.substr(0, position.character);

				const contents = ['gutter', 'label', 'list_even', 'list_odd', 'menu', 'tooltip', 'focused', 'unfocused', 'hovered', 'unhovered', 'normal', 'disabled'];

				let valid = false;
				for(let c of contents){
					if(linePrefix.endsWith(c + '.')){
						valid = true;

						break;
					}
				}

				if(!valid){
					return undefined;
				}

				if(!valid){
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
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.substr(0, position.character);

				const contents = ['textbox'];

				let valid = false;
				for(let c of contents){
					if(linePrefix.endsWith(c + '.')){
						valid = true;

						break;
					}
				}

				if(!valid){
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
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.substr(0, position.character);

				const contents = ['selection'];

				let valid = false;
				for(let c of contents){
					if(linePrefix.endsWith(c + '.')){
						valid = true;

						break;
					}
				}

				if(!valid){
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
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.substr(0, position.character);

				const contents = ['active', 'inactive', 'normal'];

				let valid = false;
				for(let c of contents){
					if(linePrefix.endsWith(c + '.')){
						valid = true;

						break;
					}
				}

				if(!valid){
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
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.substr(0, position.character);

				const contents = ['image_button', 'text_button', 'tab_button'];

				let valid = false;
				for(let c of contents){
					if(linePrefix.endsWith(c + '.')){
						valid = true;

						break;
					}
				}

				if(!valid){
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

	context.subscriptions.push(RegisterClasses, ColorThemeElements, BgFgTextColorTheme, TextBoxColorTheme, SelectionColorTheme, HoverableWidgetColorTheme, ButtonColorTheme);
}
