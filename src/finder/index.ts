import fs from 'fs';
import { doesNotContainIgnores, getDefaultIgnores } from '../ignores';

const isDirectory = (path: string): boolean => fs.statSync(path).isDirectory();

export const listFiles = (
  folderPath: string,
  ignores: string[],
) : string[] => {
  const allFiles: string[] = [];
  const files = fs.readdirSync(folderPath);

  files
    .filter((file) => doesNotContainIgnores(file, ignores))
    .forEach((file) => {
      const fullPath = `${folderPath}/${file}`;
      if (isDirectory(fullPath)) {
        allFiles.push(...listFiles(fullPath, ignores));
      } else {
        allFiles.push(fullPath);
      }
    });

  return allFiles;
};

export const listFilesinFolders = (
  folders: string[],
  ignores: string[] = getDefaultIgnores(),
): string[] => {
  const files: string[] = [];

  folders
    .forEach((folder) => files
      .push(...listFiles(folder, ignores)));

  return files;
};

export default {
  listFiles,
  listFilesinFolders,
};
