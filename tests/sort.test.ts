import { sort } from "../src/sort";

describe("Função de Ordenação", () => {
  test("Teste com array vazio", () => {
    const result = sort([]);
    expect(result).toEqual([]);
  });

  test("Teste com array de um único elemento", () => {
    const result = sort(["VW GOL"]);
    expect(result).toEqual(["VW GOL"]);
  });

  test("Teste com array já ordenado", () => {
    const input = ["VW GOL", "Ford Focus", "Honda Fit"];
    const result = sort(input);
    expect(result).toEqual(["Ford Focus",  "Honda Fit", "VW GOL"]);
  });

  test("Teste com array em ordem reversa", () => {
    const input = ["Tiggo", "Renegade", "Nivus", "Compass"];
    const result = sort(input);
    expect(result).toEqual(["Compass", "Nivus", "Renegade", "Tiggo"]);
  });

  test("Teste com array não ordenada", () => {
    const input = ["Sienna", "Pollo", "Palio", "Monza"];
    const result = sort(input);
    expect(result).toEqual(["Monza", "Palio", "Pollo", "Sienna"]);
  });

});
