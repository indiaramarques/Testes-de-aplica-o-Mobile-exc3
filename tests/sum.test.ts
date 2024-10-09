import { sum } from "../src/sum";

describe("Exercício de Soma", () => {
  test("soma_de_zero_com_zero", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test("soma_de_zero_com_dois", () => {
    expect(sum(0, 2)).toBe(2);
  });

  test("soma_de_cinco_com_menos_dois", () => {
    expect(sum(5, -2)).toBe(3);
  });
});
