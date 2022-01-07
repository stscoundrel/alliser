import alliser from '../../src';

const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => jest.fn());
const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => jest.fn());
const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => jest.fn());

describe('Alliser validation flow tests', () => {
  beforeEach(() => {
    mockExit.mockReset();
    mockConsoleLog.mockReset();
    mockConsoleError.mockReset();
  });

  test('Self check: valid & exit status 0 on source', () => {
    alliser.validate(['.ts'], ['src']);

    // Exit code.
    expect(mockExit).toHaveBeenCalledWith(0);

    // Logs.
    expect(mockConsoleLog).toHaveBeenCalledWith('Alliser found no issues in src');
    expect(mockConsoleError).not.toHaveBeenCalled();
  });

  test('Self check: invalid & non-zero exit status on test folder', () => {
    alliser.validate(['.ts'], ['tests']);

    // Exit code.
    expect(mockExit).toHaveBeenCalledWith(1);

    // Logs.
    expect(mockConsoleError).toHaveBeenCalledWith('Alliser found errors: following files are not allowed formats (.ts)');
    expect(mockConsoleError.mock.calls[1][0].includes('tests/fixtures/index.cs')).toBeTruthy();
    expect(mockConsoleError.mock.calls[1][0].includes('tests/fixtures/index.rs')).toBeTruthy();
    expect(mockConsoleError.mock.calls[1][0].includes('tests/fixtures/index.js')).toBeTruthy();
  });
});
