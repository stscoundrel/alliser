# Alliser

Detect & list not allowed file extensions in a project. Scans project & compares findings against list of allowed filetypes.

### Motivation

In some project setups, one can use incorrect file extension without actually breaking the project. An example of this would be a TypeScript project, where one accidentally writes Jest test-files in .js instead of .ts. Jest allows that, and project gets randomly littered with .js files that do work. Or maybe you just want to let team members know, that a particular filetype or programming language is discouraged.

Alliser goes through files, and lets you know if you have non-allowed file types within the project.

### Install

`yarn add alliser`

##### Usage

```javascript

```

#### What's in the name?

"Alliser" is picked from GRR Martins "A Song Of Ice And Fire". Alliser Thorne is a character who would definitely tell you if you're of "the wrong type".