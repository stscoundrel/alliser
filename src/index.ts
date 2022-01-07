import finder from './finder';
import { filterByExtensions } from './extensions';
import { getDefaultIgnores } from './ignores';

export const check = (extensions: string[], folders: string[]): string[] => {
  const ignores = getDefaultIgnores();
  const files = finder.listFilesinFolders(folders);

  return filterByExtensions(files, extensions, ignores);
};

export const validate = (extensions: string[], folders: string[]): void => {
  const incorrects = check(extensions, folders);

  if (incorrects.length === 0) {
    console.log(`Alliser found no issues in ${folders.join(', ')}`);
    process.exit(0);
  } else {
    console.error(`Alliser found errors: following files are not allowed formats (${extensions.join(', ')})`);
    console.error(incorrects.join('\n'));
    process.exit(1);
  }
};

export default {
  check,
  validate,
};
