const getExtension = (filename: string): string => `.${filename.split('.').pop()}`;

export const filterByExtensions = (
  files: string[],
  extensions: string[],
  ignores: string[],
): string[] => (
  files
    .filter((file) => !ignores.some((ignore) => file.includes(ignore)))
    .filter((file) => !extensions.some((extension) => extension === getExtension(file)))
);

export default {
  filterByExtensions,
};
