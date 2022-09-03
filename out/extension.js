"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    const provider1 = vscode.languages.registerCompletionItemProvider('plaintext', {
        provideCompletionItems(document, position, token, context) {
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
    const provider2 = vscode.languages.registerCompletionItemProvider('plaintext', {
        provideCompletionItems(document, position) {
            // get all text until the `position` and check if it reads `console.`
            // and if so then complete if `log`, `warn`, and `error`
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('console.')) {
                return undefined;
            }
            return [
                new vscode.CompletionItem('log', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('warn', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('error', vscode.CompletionItemKind.Method),
            ];
        }
    }, '.' // triggered whenever a '.' is being typed
    );
    context.subscriptions.push(provider1, provider2);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map