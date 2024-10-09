export const isPalindrome = (str: string): boolean => {
  // Remover espaços e transformar tudo em minúsculas
  const normalizedStr = str.toLowerCase().replace(/\s+/g, "");
  
  // Verificar se a string é igual à sua reversa
  return normalizedStr === normalizedStr.split("").reverse().join("");
};
