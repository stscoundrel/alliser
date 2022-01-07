import alliser from '../../src';

describe('Alliser file extension tests', () => {
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

    const result = alliser.listFiles('./tests/fixtures');

    expect(result).toEqual(expected);
  });
});
