import { max } from "../src/max";

describe("Função de Máximo", () => {
  test("Teste com ambos os números positivos", () => {
    const result = max(5, 10);
    expect(result).toBe(10);
  });

  test("Teste com ambos os números negativos", () => {
    const result = max(-8, -3);
    expect(result).toBe(-3);
  });

  test("Teste com um número positivo e um negativo", () => {
    const result = max(-2, 7);
    expect(result).toBe(7);
  });

  test("este com zero e um número positivo", () => {
    const result = max(0, 12);
    expect(result).toBe(12);
  });

  test("Teste com zero e um número negativo", () => {
    const result = max(0, -6);
    expect(result).toBe(0);
  });

});

