# Alliser

Detect & list not allowed file extensions in a project. Scans project & compares findings against list of allowed filetypes.

Also available for your CI as batteries included [Github Action](https://github.com/marketplace/actions/alliser-action).

### Install

`yarn add alliser`

### Motivation

In some project setups, one can use incorrect file extension without actually breaking the project. An example of this would be a TypeScript project, where one accidentally writes Jest test-files in .js instead of .ts. Jest allows that, and project gets randomly littered with .js files that do work. Or maybe you just want to let team members know, that a particular filetype or programming language is discouraged.

Alliser goes through files, and lets you know if you have non-allowed file types within the project.


### Usage

There are two main ways to use Alliser: run it yourself in JS/TS code, or run it via command line.

##### Command line usage

Command line version exits with status 0 if no conflicting files are found. If files are found, exit status is 1 and files are listed to console.

Run in one folder (src), looking for files that dont match one type (.ts)

```bash
alliser .ts src
```

Or in multiple folders & multiple extensions

```bash
alliser .ts,.tsx src,tests,bin
```

Possible output for incorrect files:

```bash
Alliser found errors: following files are not allowed formats (.ts)
tests/fixtures/index.cs
tests/fixtures/index.js
tests/fixtures/index.py
tests/fixtures/index.rs
tests/fixtures/subfolder1/submodule2.js
tests/fixtures/subfolder2/submodule.js
```

##### Programmatic use

You can also use Alliser to just fetch list of problematic files, and do your own thing with them.

```javascript
import alliser from 'alliser';

// Accepts an array of extensions, and an array of folders.
const incorrectFiles = alliser.check(['.ts', '.tsx'], ['src', 'tests'])

console.log(incorrectFiles);
// [
//   tests/fixtures/index.cs
//   tests/fixtures/index.js
//   tests/fixtures/index.py
//   tests/fixtures/index.rs
//   tests/fixtures/subfolder1/submodule2.js
//   tests/fixtures/subfolder2/submodule.js
// ]

```

#### Default ignores

Alliser is smart enough not to list files from folders like `node_modules` or `.git`. If you feel like some common ignore is missing from defaults, PRs & issues are welcome.


#### What's in the name?

"Alliser" is picked from GRR Martins "A Song Of Ice And Fire". Alliser Thorne is a character who would definitely tell you if you're of "the wrong type".
