import { getNewLexer, getTypeIndex } from "../GrammerHelpers";

describe("Lexer tokens", () => {
  test("tokens for empty input", () => {
    const input = "";
    const lexer = getNewLexer(input);
    const tokens = lexer.getAllTokens();

    expect(tokens.length).toBe(0);
  });

  test("tokens for import", () => {
    const input = "import";
    const lexer = getNewLexer(input);
    const tokens = lexer.getAllTokens();
    expect(tokens.length).toBe(1);

    const { line, start, stop, text, type } = tokens[0];

    expect(lexer.symbolicNames[type]).toBe("Import");
    expect(type).toBe(getTypeIndex("Import", lexer));
    expect(text).toBe("import");
    expect(line).toBe(1);
    expect(start).toBe(0);
    expect(stop).toBe(5);
  });

  test("tokens for impor", () => {
    const input = "impor";
    const lexer = getNewLexer(input);
    const tokens = lexer.getAllTokens();
    expect(tokens.length).toBe(1);

    const { line, start, stop, text, type } = tokens[0];

    expect(lexer.symbolicNames[type]).toBe("Code");
    expect(type).toBe(getTypeIndex("Code", lexer));
    expect(text).toBe("impor");
    expect(line).toBe(1);
    expect(start).toBe(0);
    expect(stop).toBe(4);
  });

  test("tokens for importt", () => {
    const input = "importt";
    const lexer = getNewLexer(input);
    const tokens = lexer.getAllTokens();
    expect(tokens.length).toBe(1);

    const { line, start, stop, text, type } = tokens[0];

    expect(lexer.symbolicNames[type]).toBe("Code");
    expect(type).toBe(getTypeIndex("Code", lexer));
    expect(text).toBe("importt");
    expect(line).toBe(1);
    expect(start).toBe(0);
    expect(stop).toBe(6);
  });

  test("tokens for import(1 whitespace)", () => {
    const input = "import ";
    const lexer = getNewLexer(input);
    const tokens = lexer.getAllTokens();
    expect(tokens.length).toBe(2);

    {
      let { line, start, stop, text, type } = tokens[0];

      expect(lexer.symbolicNames[type]).toBe("Import");
      expect(type).toBe(getTypeIndex("Import", lexer));
      expect(text).toBe("import");
      expect(line).toBe(1);
      expect(start).toBe(0);
      expect(stop).toBe(5);
    }
    {
      let { line, start, stop, text, type } = tokens[1];

      expect(lexer.symbolicNames[type]).toBe("WhiteSpace");
      expect(type).toBe(getTypeIndex("WhiteSpace", lexer));
      expect(text).toBe(" ");
      expect(line).toBe(1);
      expect(start).toBe(6);
      expect(stop).toBe(6);
    }
  });

  test("tokens for import(2 whitespaces)", () => {
    const input = "import  ";
    const lexer = getNewLexer(input);
    const tokens = lexer.getAllTokens();
    expect(tokens.length).toBe(3);

    {
      let { line, start, stop, text, type } = tokens[0];

      expect(lexer.symbolicNames[type]).toBe("Import");
      expect(type).toBe(getTypeIndex("Import", lexer));
      expect(text).toBe("import");
      expect(line).toBe(1);
      expect(start).toBe(0);
      expect(stop).toBe(5);
    }
    {
      let { line, start, stop, text, type } = tokens[1];

      expect(lexer.symbolicNames[type]).toBe("WhiteSpace");
      expect(type).toBe(getTypeIndex("WhiteSpace", lexer));
      expect(text).toBe(" ");
      expect(line).toBe(1);
      expect(start).toBe(6);
      expect(stop).toBe(6);
    }
    {
      let { line, start, stop, text, type } = tokens[2];

      expect(lexer.symbolicNames[type]).toBe("WhiteSpace");
      expect(type).toBe(getTypeIndex("WhiteSpace", lexer));
      expect(text).toBe(" ");
      expect(line).toBe(1);
      expect(start).toBe(7);
      expect(stop).toBe(7);
    }
  });

  test("tokens for import ./file.lib;", () => {
    const input = "import ./file.lib;";
    const lexer = getNewLexer(input);
    const tokens = lexer.getAllTokens();

    expect(tokens.length).toBe(1);

    {
      let { line, start, stop, text, type } = tokens[0];

      expect(lexer.symbolicNames[type]).toBe("ImportStatement");
      expect(type).toBe(getTypeIndex("ImportStatement", lexer));
      expect(text).toBe("import ./file.lib;");
      expect(line).toBe(1);
      expect(start).toBe(0);
      expect(stop).toBe(17);
    }
  });

  test("tokens for import ./file.lib;\\n", () => {
    const input = "import ./file.lib;\n";
    const lexer = getNewLexer(input);
    const tokens = lexer.getAllTokens();

    expect(tokens.length).toBe(2);

    {
      let { line, start, stop, text, type } = tokens[1];

      expect(lexer.symbolicNames[type]).toBe("NewLine");
      expect(type).toBe(getTypeIndex("NewLine", lexer));
      expect(text).toBe("\n");
      expect(line).toBe(1);
      expect(start).toBe(18);
      expect(stop).toBe(18);
    }
  });

  test("tokens for import ./file.lib;\\nsomecode", () => {
    const input = "import ./file.lib;\nsomecode";
    const lexer = getNewLexer(input);
    const tokens = lexer.getAllTokens();

    expect(tokens.length).toBe(3);

    {
      let { line, start, stop, text, type } = tokens[2];

      expect(lexer.symbolicNames[type]).toBe("Code");
      expect(type).toBe(getTypeIndex("Code", lexer));
      expect(text).toBe("somecode");
      expect(line).toBe(2);
      expect(start).toBe(19);
      expect(stop).toBe(26);
    }
  });

  test("tokens for import ./file.lib;\\nimport ./file.lib;", () => {
    const input = "import ./file.lib;\nimport ./file.lib;";
    const lexer = getNewLexer(input);
    const tokens = lexer.getAllTokens();

    expect(tokens.length).toBe(3);

    {
      let { line, start, stop, text, type } = tokens[0];

      expect(lexer.symbolicNames[type]).toBe("ImportStatement");
      expect(type).toBe(getTypeIndex("ImportStatement", lexer));
      expect(text).toBe("import ./file.lib;");
      expect(line).toBe(1);
      expect(start).toBe(0);
      expect(stop).toBe(17);
    }
    {
      let { line, start, stop, text, type } = tokens[1];

      expect(lexer.symbolicNames[type]).toBe("NewLine");
      expect(type).toBe(getTypeIndex("NewLine", lexer));
      expect(text).toBe("\n");
      expect(line).toBe(1);
      expect(start).toBe(18);
      expect(stop).toBe(18);
    }
    {
      let { line, start, stop, text, type } = tokens[2];

      expect(lexer.symbolicNames[type]).toBe("ImportStatement");
      expect(type).toBe(getTypeIndex("ImportStatement", lexer));
      expect(text).toBe("import ./file.lib;");
      expect(line).toBe(2);
      expect(start).toBe(19);
      expect(stop).toBe(36);
    }
  });

  test("tokens for import ./file.lib;import ./file.lib;", () => {
    const input = "import ./file.lib;import ./file.lib;";
    const lexer = getNewLexer(input);
    const tokens = lexer.getAllTokens();

    expect(tokens.length).toBe(2);

    {
      let { line, start, stop, text, type } = tokens[0];

      expect(lexer.symbolicNames[type]).toBe("ImportStatement");
      expect(type).toBe(getTypeIndex("ImportStatement", lexer));
      expect(text).toBe("import ./file.lib;");
      expect(line).toBe(1);
      expect(start).toBe(0);
      expect(stop).toBe(17);
    }
    {
      let { line, start, stop, text, type } = tokens[1];

      expect(lexer.symbolicNames[type]).toBe("ImportStatement");
      expect(type).toBe(getTypeIndex("ImportStatement", lexer));
      expect(text).toBe("import ./file.lib;");
      expect(line).toBe(1);
      expect(start).toBe(18);
      expect(stop).toBe(35);
    }
  });

  test('tokens for "  import  "', () => {
    const input = " import\n";
    const lexer = getNewLexer(input);
    const tokens = lexer.getAllTokens();

    expect(tokens.length).toBe(3);

    {
      let { line, start, stop, text, type } = tokens[0];

      expect(lexer.symbolicNames[type]).toBe("WhiteSpace");
      expect(type).toBe(getTypeIndex("WhiteSpace", lexer));
      expect(text).toBe(" ");
      expect(line).toBe(1);
      expect(start).toBe(0);
      expect(stop).toBe(0);
    }
    {
      let { line, start, stop, text, type } = tokens[1];

      expect(lexer.symbolicNames[type]).toBe("Import");
      expect(type).toBe(getTypeIndex("Import", lexer));
      expect(text).toBe("import");
      expect(line).toBe(1);
      expect(start).toBe(1);
      expect(stop).toBe(6);
    }
    {
      let { line, start, stop, text, type } = tokens[2];

      expect(lexer.symbolicNames[type]).toBe("NewLine");
      expect(type).toBe(getTypeIndex("NewLine", lexer));
      expect(text).toBe("\n");
      expect(line).toBe(1);
      expect(start).toBe(7);
      expect(stop).toBe(7);
    }
  });
});
