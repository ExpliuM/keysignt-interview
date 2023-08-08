import * as path from "path";
import {
  buildDependencyHash,
  buildDependencyHashOutput,
} from "./DependencyHash";

try {
  const progFileFullRelativePath = "./examples/example3/root.prog";
  const progFileFullPath = path.resolve(progFileFullRelativePath);

  console.log(
    buildDependencyHashOutput(
      buildDependencyHash(progFileFullPath),
      progFileFullPath
    )
  );
} catch (error) {
  console.error("Error reading the file:", error);
}
