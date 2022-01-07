import finder from './finder';
import { filterByExtensions } from './extensions';
import { getDefaultIgnores } from './ignores';

export const check = (extensions: string[], folders: string[]): string[] => {
  const ignores = getDefaultIgnores();
  const files = finder.listFilesinFolders(folders);

  return filterByExtensions(files, extensions, ignores);
};

export default {
  check,
};
