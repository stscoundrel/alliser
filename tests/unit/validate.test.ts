import alliser from '../../src';

describe('Alliser validation flow tests', () => {
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
  beforeEach(() => {
    mockExit.mockReset();
  });

  test('Self check: valid & exit status 0 on source', () => {
    alliser.validate(['.ts'], ['src']);

    expect(mockExit).toHaveBeenCalledWith(0);
  });

  test('Self check: invalid & non-zero exit status on test folder', () => {
    alliser.validate(['.ts'], ['tests']);
    expect(mockExit).toHaveBeenCalledWith(666);
  });
});
