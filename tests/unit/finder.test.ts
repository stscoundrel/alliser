import finder from '../../src/finder';

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
});
