# Copy Relative Path Import

VSCode extension that copies import declarations based on selected text in the active file.

Inspired by [vscode-copy-relative-path](https://github.com/alexdima/vscode-copy-relative-path).

---

Set up a keybinding to use `copyRelativePathImport`, or access from the context menu in your editor. Multiple selections will be copied as multiple imports.

```js
// Single selections will be copied like this
import {helloWorld} from 'some/nested/directory/multiple';

// Multiple selections will be copied like this
import {helloWorld, testing, multipleThings} from 'some/nested/directory/multiple';
```

If you execute the same command with the copied value already in your clipboard, it will copy the relative path only.


![copy-relative-path-import](https://user-images.githubusercontent.com/1461792/230654490-df7f93e2-07c1-4bbf-b7a3-bf97ba2cada3.gif)
