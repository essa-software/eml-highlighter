import * as vscode from 'vscode';
import { Classes } from './constants';
import { inifile } from './ini';

export function activate(context: vscode.ExtensionContext) {
	// const filetype = 'eml';
	const filetype = 'plaintext';

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

	const RegisterClasses = vscode.languages.registerCompletionItemProvider(
		filetype,
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
				const linePrefix = document.lineAt(position).text.substr(0, position.character).trim();

				const type = get_type(document, position);

				if (linePrefix.endsWith('layout:') || !linePrefix.includes('@') || (!linePrefix.endsWith('main_widget:') && !linePrefix.endsWith('child:') && type != null && type != 'Container')) {
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
		},
		'@'
	);

	const RegisterLayoutClasses = vscode.languages.registerCompletionItemProvider(
		filetype,
		{

			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
				const linePrefix = document.lineAt(position).text.substr(0, position.character).trim();

				if (!linePrefix.endsWith('layout:')) {
					return undefined;
				}

				const BasicLayout = new vscode.CompletionItem('BasicLayout', vscode.CompletionItemKind.Class);
				BasicLayout.documentation = new vscode.MarkdownString('');

				const BoxLayout = new vscode.CompletionItem('BoxLayout', vscode.CompletionItemKind.Class);
				BoxLayout.documentation = new vscode.MarkdownString('');

				const HorizontalBoxLayout = new vscode.CompletionItem('HorizontalBoxLayout', vscode.CompletionItemKind.Class);
				HorizontalBoxLayout.documentation = new vscode.MarkdownString('');

				const VerticalBoxLayout = new vscode.CompletionItem('VerticalBoxLayout', vscode.CompletionItemKind.Class);
				VerticalBoxLayout.documentation = new vscode.MarkdownString('');

				return [
					BasicLayout, BoxLayout,
					HorizontalBoxLayout,
					VerticalBoxLayout
				];
			}
		},
		'@'
	);

	const Keywords = vscode.languages.registerCompletionItemProvider(
		filetype,
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

	let classes = new Classes();

	const Properties = vscode.languages.registerCompletionItemProvider(
		filetype,
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
				const linePrefix = document.lineAt(position).text.substr(0, position.character - 1).trim();

				let type = get_type(document, position);

				if (type == null || linePrefix.endsWith(':')) {
					return undefined;
				}

				const result = new Array();
				while (type != null) {
					for (const c of classes.Classes) {
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
		filetype,
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
				let linePrefix = document.lineAt(position).text.substr(0, position.character - 1).trim();
				linePrefix = linePrefix.substr(0, linePrefix.length - 1);

				let type = get_type(document, position);

				if (type == null) {
					return undefined;
				}

				while (type != null) {
					for (const c of classes.Classes) {
						if (c.name == type) {
							for (const m of c.methods) {
								if (linePrefix.endsWith(m.name)) {
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

	let ini = new inifile();

	context.subscriptions.push(RegisterClasses, Keywords, Properties, Values);
	context.subscriptions.push(ini.ColorThemeElements, ini.BgFgTextColorTheme, ini.TextBoxColorTheme, ini.SelectionColorTheme, ini.HoverableWidgetColorTheme, ini.ButtonColorTheme);
}
