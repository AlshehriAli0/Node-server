export const createPathRegex = (path: string) => {
  // if path isnt dynamic (no url param) return
  if (!path.includes(":")) {
    return path;
  }
};
