import { isPalindrome } from "../src/palindrome";


describe("Função de Palíndromo", () => {
  test("Teste com string vazia", () => {
    const result = isPalindrome("");
    expect(result).toBe(true);
  });

  test("Teste com string de um único caractere", () => {
    const result = isPalindrome("a");
    expect(result).toBe(true);
  });

  test("Teste com string que é um palíndromo", () => {
    const result = isPalindrome("A mae te ama");
    expect(result).toBe(true);
  });

  test("Teste com string que não é um palíndromo", () => {
    const result = isPalindrome("A mae te ama muito");
    expect(result).toBe(false);
  });
});
