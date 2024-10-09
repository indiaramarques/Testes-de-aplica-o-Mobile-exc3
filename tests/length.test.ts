import { length } from "../src/length";

describe("Função de Comprimento", () => {
  test("Teste com string vazia", () => {
    const result = length("");
    expect(result).toBe(0);
  });

  test("Teste com string de um único caractere", () => {
    expect(length("a")).toBe(1);
  }
  )
  test("Teste com string já ordenada", () => {
    const str = "abcdef";
    expect(str).toBe(str.split('').sort().join(''));
  });

  test("Teste com string em ordem reversa", () => {
    const str = "fedcba";
    expect(str).toBe(str.split('').sort().reverse().join(''));
  });

  test("Teste com string não ordenada", () => {
    const str = "batata";
    expect(str).not.toBe(str.split('').sort().join(''));
  });

});

