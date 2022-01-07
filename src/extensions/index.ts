const getExtension = (filename: string): string => `.${filename.split('.').pop()}`;

export const filterByExtensions = (files: string[], extensions: string[]): string[] => (
  files.filter((file) => !extensions.some((extension) => extension === getExtension(file)))
);

export default {
  filterByExtensions,
};
