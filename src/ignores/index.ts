const DEFAULT_IGNORES = [
  '.git',
  '.github',
  'node_modules',
];

export const getDefaultIgnores = (): string[] => DEFAULT_IGNORES;

export const doesNotContainIgnores = (
  path: string,
  ignores: string[] = getDefaultIgnores(),
) : boolean => {
  let isAllowed = true;
  ignores.forEach((ignore) => {
    if (path.includes(ignore)) {
      isAllowed = false;
    }
  });
  return isAllowed;
};

export default {
  getDefaultIgnores,
};
