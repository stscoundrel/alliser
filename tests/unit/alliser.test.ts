import alliser from '../../src';

describe('Alliser tests', () => {
  test('Self check: no non-TS files in actual source code', () => {
    const result = alliser.check(['.ts'], ['./src']);

    expect(result.length).toBe(0);
  });

  test('Self check: should have non-js files in actual source code', () => {
    const result = alliser.check(['.js'], ['src']);

    expect(result.length > 0).toBeTruthy();
    expect(result).toContain('src/index.ts');
  });

  test('Tests check: should have non-ts files in tests folder', () => {
    const result = alliser.check(['.ts'], ['tests']);

    expect(result.length > 0).toBeTruthy();
    expect(result).toContain('tests/fixtures/index.rs');
    expect(result).toContain('tests/fixtures/index.cs');
    expect(result).toContain('tests/fixtures/index.py');
    expect(result).toContain('tests/fixtures/index.js');

    // Should not appear in results.
    expect(result).not.toContain('tests/fixtures/index.ts');
  });

  test('Tests check: extension list filters out results', () => {
    const result = alliser.check(['.ts', '.js', '.rs'], ['tests']);

    expect(result.length > 0).toBeTruthy();
    expect(result).toContain('tests/fixtures/index.cs');
    expect(result).toContain('tests/fixtures/index.py');

    // Should've been filtered out.
    expect(result).not.toContain('tests/fixtures/index.rs');
    expect(result).not.toContain('tests/fixtures/index.js');
  });
});
