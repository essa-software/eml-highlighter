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

	function get_method(document: vscode.TextDocument, position: vscode.Position) {
		let counter = 0;
		for (let i = position.line - 1; i >= 0; i--) {
			let line = document.lineAt(i).text.trim();
			if (line.endsWith('}')) {
				counter--;
			}

			if (line.endsWith('{')) {
				counter++;
				line = line.substr(0, line.length - 1).trim();
				const splitted = line.split(' ');

				for (let word of splitted) {
					if (word.endsWith(':') && counter == 1) {
						word = word.substr(0, word.length - 1).trim();

						return word;
					}
				}
			}

		}

		return null;
	}

	let classes = new Classes();

	const RegisterClasses = vscode.languages.registerCompletionItemProvider(
		filetype,
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
				let linePrefix = document.lineAt(position).text.substr(0, position.character).trim();
				const type = get_type(document, position);
				const method = get_method(document, position);

				if ((!linePrefix.includes('@') || linePrefix.includes(':') || type != null) && method != 'widgets') {
					return undefined;
				}

				return classes.ClassIds()
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

	const Properties = vscode.languages.registerCompletionItemProvider(
		filetype,
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
				const linePrefix = document.lineAt(position).text.substr(0, position.character - 1).trim();

				let type = get_type(document, position);

				if (type == null || linePrefix.includes(':')) {
					return undefined;
				}

				let first = true;

				const result = new Array();
				while (type != null) {
					for (const c of classes.Classes) {
						if (c.name == type) {
							for (const m of c.methods) {
								if (m.inherit || first) {
									const method = new vscode.CompletionItem(m.name + ': ', vscode.CompletionItemKind.Method);
									method.documentation = m.desc;
									result.push(method);
								}
							}

							first = false;
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
