import _ = require("lodash");
import * as path from "path";

import {
  buildDependencyHash,
  buildDependencyHashOutput,
} from "../DependencyHash";

const codeFiles = _.map(
  [...Array(6).keys()],
  (index) => `./examples/example${index + 1}/root.prog`
);

describe("Lexer tokens", () => {
  test("example1", () => {
    const progFileFullPath = path.resolve(codeFiles[0]);

    const output = buildDependencyHashOutput(
      buildDependencyHash(progFileFullPath),
      progFileFullPath
    );
    expect(output).toBe("root.prog\n\tex1.lib\n");
  });
  test("example2", () => {
    const progFileFullPath = path.resolve(codeFiles[1]);

    const output = buildDependencyHashOutput(
      buildDependencyHash(progFileFullPath),
      progFileFullPath
    );
    expect(output).toBe("root.prog\n\tex1.lib\n\tex2.lib\n");
  });

  test("example3", () => {
    const progFileFullPath = path.resolve(codeFiles[2]);

    const output = buildDependencyHashOutput(
      buildDependencyHash(progFileFullPath),
      progFileFullPath
    );
    expect(output).toBe("root.prog\n\tex1.lib\n\t\tex3.lib\n\tex2.lib\n");
  });
  test("example4", () => {
    const progFileFullPath = path.resolve(codeFiles[3]);

    const output = buildDependencyHashOutput(
      buildDependencyHash(progFileFullPath),
      progFileFullPath
    );
    expect(output).toBe(
      "root.prog\n\tex1.lib\n\t\tex3.lib\n\t\t\tex1.lib\n\tex2.lib\n"
    );
  });
  test("example5", () => {
    const progFileFullPath = path.resolve(codeFiles[4]);

    const output = buildDependencyHashOutput(
      buildDependencyHash(progFileFullPath),
      progFileFullPath
    );
    expect(output).toBe("root.prog\n\tex1.lib\n\tex2.lib\n");
  });
  test("example6", () => {
    const progFileFullPath = path.resolve(codeFiles[5]);

    const output = buildDependencyHashOutput(
      buildDependencyHash(progFileFullPath),
      progFileFullPath
    );
    expect(output).toBe(
"root.prog\n\tex1.lib\n\t\tex1.lib\n\t\t\tex1.lib\n\t\t\t\tex1.lib\n\t\t\t\t\tex1.lib\n\t\t\t\t\t\tex1.lib\n\t\t\t\t\t\t\tex1.lib\n\tex2.lib\n\t\tex2.lib\n\t\t\tex2.lib\n\t\t\t\tex2.lib\n\t\t\t\t\tex2.lib\n\t\t\t\t\t\tex2.lib\n\t\t\t\t\t\t\tex2.lib\n"
    );
  });
});
