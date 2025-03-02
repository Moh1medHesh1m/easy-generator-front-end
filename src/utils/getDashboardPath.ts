// refactor to return path
export function setActivePath(pathName: string | null) {
  const str = pathName?.toString().split('/');
  const path = str?.filter((paths) => paths !== '');
  const currPath = path![path!.length - 1];
  let activePath: number = 0;
  if (currPath === 'home') {
    activePath = 0;
  }
  if (currPath === 'tasks') {
    activePath = 1;
  }
  if (currPath === 'my-publishes') {
    activePath = 2;
  }
  if (currPath === 'manage-users') {
    activePath = 3;
  }
  if (currPath === 'users-hours-report') {
    activePath = 4;
  }
  if (currPath === 'edit-time') {
    activePath = 5;
  }
  if (currPath === 'hours-report') {
    activePath = 6;
  }
  if (currPath === 'company-settings') {
    activePath = 7;
  }
  if (currPath === 'user-hours-report') {
    activePath = 8;
  }
  return activePath;
}
