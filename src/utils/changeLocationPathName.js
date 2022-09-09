export const changeLocationPathName = (path) => {
  if (path === "/") {
    return null;
  } else {
    return path[1].toUpperCase() + path.slice(2);
  }
};
