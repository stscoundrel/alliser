import finder from '../../src/finder';
import { getDefaultIgnores } from '../../src/ignores';

describe('Finder tests', () => {
  test('Lists subfolders & files in a folder', () => {
    const expected = [
      './tests/fixtures/index.cs',
      './tests/fixtures/index.js',
      './tests/fixtures/index.py',
      './tests/fixtures/index.rs',
      './tests/fixtures/index.ts',
      './tests/fixtures/subfolder1/submodule.ts',
      './tests/fixtures/subfolder1/submodule2.js',
      './tests/fixtures/subfolder2/subfolder2-3/submodule.ts',
      './tests/fixtures/subfolder2/submodule.js',
    ];

    const result = finder.listFiles('./tests/fixtures');

    expect(result).toEqual(expected);
  });

  test('Lists subfolders & files in list of folders', () => {
    const folders = [
      './tests/fixtures/subfolder1',
      './tests/fixtures/subfolder2',
    ];

    const expected = [
      './tests/fixtures/subfolder1/submodule.ts',
      './tests/fixtures/subfolder1/submodule2.js',
      './tests/fixtures/subfolder2/subfolder2-3/submodule.ts',
      './tests/fixtures/subfolder2/submodule.js',
    ];

    const result = finder.listFilesinFolders(folders);

    expect(result).toEqual(expected);
  });

  test('Does not list ignored folders', () => {
    // Scanning top level could result in node_modules etc loops.
    const results = finder.listFilesinFolders(['.']);

    // Assert ignores were not scanned in the first place.
    results.forEach((result) => {
      getDefaultIgnores().forEach((ignore) => expect(result.includes(ignore)).toBeFalsy());
    });
  });
});
