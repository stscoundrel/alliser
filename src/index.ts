import finder from './finder';
import { filterByExtensions } from './extensions';

export const check = (extensions: string[], folders: string[]): string[] => {
  const files = finder.listFilesinFolders(folders);

  return filterByExtensions(files, extensions);
};

export default {
  check,
};
