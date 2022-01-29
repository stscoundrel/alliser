const DEFAULT_IGNORES = [
  '.git',
  '.github',
];

const VENDOR_IGNORES = [
  'node_modules',
  'bower_components',
  'vendor',
];

const IGNORES = [...DEFAULT_IGNORES, ...VENDOR_IGNORES];

export const getDefaultIgnores = (): string[] => IGNORES;

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
