import * as vscode from 'vscode';

export interface ini{
	BgFgTextColorTheme : vscode.Disposable;
	TextBoxColorTheme : vscode.Disposable;
	SelectionColorTheme : vscode.Disposable;
	HoverableWidgetColorTheme : vscode.Disposable;
	ButtonColorTheme : vscode.Disposable;
}

export class inifile implements ini{
	BgFgTextColorTheme = vscode.languages.registerCompletionItemProvider(
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

	TextBoxColorTheme = vscode.languages.registerCompletionItemProvider(
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

	SelectionColorTheme = vscode.languages.registerCompletionItemProvider(
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

	HoverableWidgetColorTheme = vscode.languages.registerCompletionItemProvider(
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

	ButtonColorTheme = vscode.languages.registerCompletionItemProvider(
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
}