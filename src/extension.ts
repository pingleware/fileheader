// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import path from 'path';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.addFileHeader', () => {
        addFileHeader();
    });

    context.subscriptions.push(disposable);
}

function addFileHeader() {
    const editor = vscode.window.activeTextEditor;

    if (editor) {
		const filePath = editor.document.fileName;
        const fileName = path.basename(filePath); // Get only the base name with extension
		const creationDate = new Date();

		let fileHeader = ``;

		//if (fileName.endsWith(".php",fileName.length - 4)) {
			fileHeader = `
/**
 * File: ${fileName}
 * Created: ${formatDate(creationDate)}
 * Last Modified: <?php echo date("Y-m-d", filemtime(__FILE__)); ?>
 * License: CC-BY-4.0
 * File Header Created By: PINGLEWARE: Add File Header from PRESSPAGE ENTERTAINMENT INC dba PINGLEWARE <maintainers@pingleware.work>
 */\n\n`;
		//}
		//if (fileHeader.length > 0) {
			const currentPosition = editor.selection.start;

			editor.edit((editBuilder) => {
				editBuilder.insert(currentPosition, fileHeader);
			});	
		//}
    }
}

function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    return date.toLocaleDateString('en-US', options);
}

// This method is called when your extension is deactivated
export function deactivate() {}
