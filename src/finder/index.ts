import fs from 'fs';

const isDirectory = (path: string): boolean => fs.statSync(path).isDirectory();

export const listFiles = (folderPath: string) : string[] => {
  const allFiles: string[] = [];
  const files = fs.readdirSync(folderPath);

  files.forEach((file) => {
    const fullPath = `${folderPath}/${file}`;
    if (isDirectory(fullPath)) {
      allFiles.push(...listFiles(fullPath));
    } else {
      allFiles.push(fullPath);
    }
  });

  return allFiles;
};

export const listFilesinFolders = (folders: string[]): string[] => {
  const files: string[] = [];

  folders.forEach((folder) => files.push(...listFiles(folder)));

  return files;
};

export default {
  listFiles,
  listFilesinFolders,
};
