export function toPath(path: string | null | null): Array<any> | undefined {
  if (path === undefined || path === null) {
    return undefined;
  }
  return path.replace(/\[/g, '.').replace(/\]/g, '').split('.');
}
