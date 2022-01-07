const DEFAULT_IGNORES = [
  '.git',
  '.github',
  'node_modules',
];

export const getDefaultIgnores = (): string[] => DEFAULT_IGNORES;

export default {
  getDefaultIgnores,
};
