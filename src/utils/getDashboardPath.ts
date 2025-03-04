// refactor to return path
export function setActivePath(pathName: string | null) {
  const str = pathName?.toString().split('/');
  const path = str?.filter((paths) => paths !== '');
  const currPath = path![path!.length - 1];
  let activePath: number = 0;
  if (currPath === 'home') {
    activePath = 0;
  }

  return activePath;
}
