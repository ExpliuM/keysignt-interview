import * as fs from "fs";
import * as path from "path";
import {
  buildDependencyHash,
  buildDependencyHashOutput,
} from "./DependencyHash";
import { getFileExtension } from "./fileHelpers";

const progFilePath = process.argv[2];

if (getFileExtension(progFilePath) !== "prog") {
  console.error('Wrong file type, please provide path to ".prog" file');
  process.exit(-1);
}

if (!fs.existsSync(progFilePath)) {
  console.error("Could not find " + progFilePath + " file");
  process.exit(-1);
}

try {
  const progFileFullRelativePath = process.argv[2];
  const progFileFullPath = path.resolve(progFileFullRelativePath);

  console.log(
    buildDependencyHashOutput(
      buildDependencyHash(progFileFullPath),
      progFileFullPath
    )
  );
} catch (error) {
  console.error(error);
}
