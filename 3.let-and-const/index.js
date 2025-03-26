let a = 10;  //Armazena um valor usando "let", que é uma variável de bloco
const b = 20;  //Armazena um valor usando "const", que é uma constante, não uma variavel

let c = 10;  //Armazena um valor usando "let", que é uma variável de bloco
const d = "10";  //Armazena um valor usando "const", que é uma constante, não uma variavel

console.log(a === b) //False, pois a e b não são iguais
console.log(c == d) //True, pois elas são iguais, mas são de tipos diferentes. O uso de dois "==" não olha o tipo
console.log(c === d) //False, pois elas são de tipos diferentes
console.log(c == d && typeof d === "string") //True, pois elas são iguais e d é uma string