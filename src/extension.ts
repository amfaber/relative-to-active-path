// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from "path";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed



export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "relative-to-active-path" is now active!');
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('relative-to-active-path.relpath', async (uri:vscode.Uri) => {
		let currentlyopen = vscode.window.activeTextEditor?.document.uri.fsPath;
		let target = uri.fsPath;
		if (typeof currentlyopen !== "undefined"){
			currentlyopen = path.dirname(currentlyopen);
			// console.log(path.relative(currentlyopen, target));
			vscode.env.clipboard.writeText(path.relative(currentlyopen, target));
		}
	});
	
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
