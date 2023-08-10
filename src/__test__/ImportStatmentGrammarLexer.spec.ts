import { forEach } from "lodash";
import { getNewImportStatementLexer, getTypeIndex } from "../GrammerHelpers";

describe("Lexer tokens", () => {
  test('tokens for ""', () => {
    const input = "";
    const lexer = getNewImportStatementLexer(input);
    const tokens = lexer.getAllTokens();

    expect(tokens.length).toBe(0);
  });

  test("tokens for different legal paths", () => {
    const paths = [
      "file",
      "/file",
      "./file",
      "../file",
      "file.ext",
      "file.ext1",
      "./file.ext1",
      "../file.ext1",
      "/./file.ext1",
      "/../file.ext1",
      "/././file.ext1",
      "/../../file.ext1",
    ];

    paths.forEach((path) => {
      const input = "import " + path;
      const lexer = getNewImportStatementLexer(input);
      const tokens = lexer.getAllTokens();

      expect(tokens.length).toBe(3);

      {
        const { line, text, type } = tokens[2];

        expect(lexer.symbolicNames[type]).toBe("FullPath");
        expect(type).toBe(getTypeIndex("FullPath", lexer));
        expect(text).toBe(path);
        expect(line).toBe(1);
      }
    });
  });

  test("tokens for different illegal paths (undef suffix)", () => {
    const paths = [
      "file/",
      "file.",
      "file!",
      "file~",
    ];

    paths.forEach((path) => {
      const input = "import " + path;
      const lexer = getNewImportStatementLexer(input);
      const tokens = lexer.getAllTokens();

      expect(tokens.length).toBe(4);

      {
        const { line, text, type } = tokens[3];

        expect(lexer.symbolicNames[type]).toBe("UnexpectedCharacter");

      }
    });
  });

  test("tokens for different illegal paths (undef prefix)", () => {
    const paths = [
      "!file",
      "~file",

    ];

    paths.forEach((path) => {
      const input = "import " + path;
      const lexer = getNewImportStatementLexer(input);
      const tokens = lexer.getAllTokens();

      expect(tokens.length).toBe(4);

      {
        const { line, text, type } = tokens[2];

        expect(lexer.symbolicNames[type]).toBe("UnexpectedCharacter");

      }
    });
  });
});
