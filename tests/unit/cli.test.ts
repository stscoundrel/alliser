import cli from '../../src/cli';

const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => jest.fn());
const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => jest.fn());
const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => jest.fn());

describe('Alliser CLI', () => {
  beforeEach(() => {
    mockExit.mockReset();
    mockConsoleLog.mockReset();
    mockConsoleError.mockReset();
  });

  test('Complains if not proper amount of arguments', () => {
    cli.main(['.ts,.tsx']);

    // Exit code.
    expect(mockExit).toHaveBeenCalledWith(1);

    // Logs.
    expect(mockConsoleError).toHaveBeenCalledWith('Alliser expects two arguments: comma separated list of extensions (eg. .ts,.tsx and comma separated folders (eg. src,tests)');
    expect(mockConsoleLog).not.toHaveBeenCalled();
  });

  test('Self check: valid & exit status 0 on source', () => {
    cli.main(['.ts,.tsx', 'src']);

    // Exit code.
    expect(mockExit).toHaveBeenCalledWith(0);

    // Logs.
    expect(mockConsoleLog).toHaveBeenCalledWith('Alliser found no issues in src');
    expect(mockConsoleError).not.toHaveBeenCalled();
  });

  test('Self check: invalid & non-zero exit status on src + test folder', () => {
    cli.main(['.ts,.tsx', 'src,tests']);

    // Exit code.
    expect(mockExit).toHaveBeenCalledWith(1);

    // Logs.
    expect(mockConsoleError).toHaveBeenCalledWith('Alliser found errors: following files are not allowed formats (.ts, .tsx)');
    expect(mockConsoleError.mock.calls[1][0].includes('tests/fixtures/index.cs')).toBeTruthy();
    expect(mockConsoleError.mock.calls[1][0].includes('tests/fixtures/index.rs')).toBeTruthy();
    expect(mockConsoleError.mock.calls[1][0].includes('tests/fixtures/index.js')).toBeTruthy();
  });
});
