import alliser from '../../src';

describe('Alliser ignore tests', () => {
  test('Does not scan default ignores (eg. node_modules, .git)', () => {
    const result = alliser.check(['.ts'], ['.']);

    // We expect reasonable amount of files to exit in project.
    expect(result.length > 0).toBeTruthy();
    expect(result.length < 100).toBeTruthy();

    result.forEach((filePath) => expect(filePath.includes('node_modules')).toBeFalsy());
    result.forEach((filePath) => expect(filePath.includes('.git')).toBeFalsy());
    result.forEach((filePath) => expect(filePath.includes('.github')).toBeFalsy());
  });
});
