import * as path from 'path'

export function getFilename(fileFullPath: string) {
  return fileFullPath.substring(
    fileFullPath.lastIndexOf("/") + 1,
    fileFullPath.length
  );
}

export function getFilePath(fileFullPath: string) {
  return fileFullPath.substring(0, fileFullPath.lastIndexOf("/"));
}

export function getRelativePath(from:string, to: string) {
  return path.relative(from,to)
}

export default { getFilename, getFilePath };
