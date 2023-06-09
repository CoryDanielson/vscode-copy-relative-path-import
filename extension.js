const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('copyRelativePathImport', function () {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
		  return; // No open text editor
		}

		let selectedText = editor.document.getText(editor.selection);

		if (editor.selections.length) {
			// copy multiple selections as a list of imports. ie: getFirstName, getLastName
			selectedText = editor.selections.map(selection => editor.document.getText(selection)).join(', ');
		}

		let activeFilePath = vscode.workspace.asRelativePath(editor.document.uri);
		const extensionDotsToSlice = activeFilePath.endsWith('.d.ts') ? 2 : 1;
		if (activeFilePath.includes('.')) {
			activeFilePath = activeFilePath.split('.').slice(0, -extensionDotsToSlice).join('.');
		}

		const importStatement = `import {${selectedText}} from '${activeFilePath}';`;

		vscode.env.clipboard.readText().then(text => {
			if (!selectedText || text !== importStatement) {
				vscode.env.clipboard.writeText(importStatement);
			} else {
				vscode.env.clipboard.writeText(activeFilePath);
			}
		})
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
