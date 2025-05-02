# Métodos Comuns de Strings e Arrays em JavaScript

### 1. `length`
Este é uma propriedade, não um método. Retorna o número de caracteres em uma string ou o número de elementos em um array.

**Exemplo:**
```javascript
// Para strings
const texto = "Hello, World!";
console.log(texto.length); // Output: 13

// Para arrays
const array = [1, 2, 3, 4, 5];
console.log(array.length); // Output: 5
```

---

### 2. `slice()`
Extrai uma seção de uma string ou array e retorna uma nova string ou array sem modificar a original.

**Exemplo:**
```javascript
// Para strings
const texto = "Hello, World!";
const resultadoString = texto.slice(7, 12);
console.log(resultadoString); // Output: "World"

// Para arrays
const array = [1, 2, 3, 4, 5];
const resultadoArray = array.slice(1, 3);
console.log(resultadoArray); // Output: [2, 3]
```

---

### 3. `indexOf()`
Retorna o primeiro índice no qual um determinado elemento pode ser encontrado em uma string ou array. Retorna -1 se o elemento não estiver presente.

**Exemplo:**
```javascript
// Para strings
const texto = "Hello, World!";
const indiceString = texto.indexOf("World");
console.log(indiceString); // Output: 7

// Para arrays
const array = [1, 2, 3, 4, 5];
const indiceArray = array.indexOf(3);
console.log(indiceArray); // Output: 2
```

---

### 4. `toUpperCase()`
Retorna a string original convertida para letras maiúsculas.

**Exemplo:**
```javascript
const texto = "Hello, World!";
const textoMaiusculo = texto.toUpperCase();
console.log(textoMaiusculo); // Output: "HELLO, WORLD!"
```

---

### 5. `push()`
Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.

**Exemplo:**
```javascript
const array = [1, 2, 3];
const novoTamanho = array.push(4, 5);
console.log(array); // Output: [1, 2, 3, 4, 5]
console.log(novoTamanho); // Output: 5
```

---

### 6. `pop()`
Remove o último elemento de um array e o retorna. Este método modifica o array original.

**Exemplo:**
```javascript
const array = [1, 2, 3, 4, 5];
const ultimoElemento = array.pop();
console.log(array); // Output: [1, 2, 3, 4]
console.log(ultimoElemento); // Output: 5
```

---

### 7. `join()`
Une todos os elementos de um array em uma string e retorna esta string.

**Exemplo:**
```javascript
const array = ["Hello", "World"];
const stringUnida = array.join(" ");
console.log(stringUnida); // Output: "Hello World"
```

---

### 8. `split()`
Divide uma string em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.

**Exemplo:**
```javascript
const texto = "Hello, World!";
const arrayDividido = texto.split(", ");
console.log(arrayDividido); // Output: ["Hello", "World!"]
```

---

### 9. `includes()`
Verifica se uma string ou array contém um determinado valor. Retorna `true` ou `false`.

**Exemplo:**
```javascript
// Para strings
const texto = "Hello, World!";
console.log(texto.includes("World")); // Output: true

// Para arrays
const array = [1, 2, 3, 4, 5];
console.log(array.includes(3)); // Output: true
```

---

### 10. `replace()`
Substitui parte de uma string por outra. Não altera a string original.

**Exemplo:**
```javascript
const texto = "Olá, mundo!";
const novoTexto = texto.replace("mundo", "JavaScript");
console.log(novoTexto); // Output: "Olá, JavaScript!"
```

---

### 11. `concat()`
Une duas ou mais strings ou arrays e retorna uma nova string ou array.

**Exemplo:**
```javascript
// Para strings
const saudacao = "Olá, ";
const nome = "João";
const mensagem = saudacao.concat(nome);
console.log(mensagem); // Output: "Olá, João"

// Para arrays
const array1 = [1, 2];
const array2 = [3, 4];
const combinado = array1.concat(array2);
console.log(combinado); // Output: [1, 2, 3, 4]
```

---

### 12. `reverse()`
Inverte a ordem dos elementos de um array *in place* (modifica o original).

**Exemplo:**
```javascript
const array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array); // Output: [5, 4, 3, 2, 1]
```

---

### 13. `trim()`
Remove espaços em branco do início e do fim de uma string.

**Exemplo:**
```javascript
const texto = "   Hello, World!   ";
const textoLimpo = texto.trim();
console.log(textoLimpo); // Output: "Hello, World!"
```

---

### 14. `map()`
Cria um novo array com os resultados da chamada de uma função para cada elemento.

**Exemplo:**
```javascript
const numeros = [1, 2, 3];
const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // Output: [2, 4, 6]
```

---

### 15. `filter()`
Cria um novo array com todos os elementos que passam em um teste implementado por uma função.

**Exemplo:**
```javascript
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // Output: [2, 4]
```

---

### 16. `reduce()`
Aplica uma função a um acumulador e a cada elemento do array (da esquerda para a direita) para reduzi-lo a um único valor.

**Exemplo:**
```javascript
const numeros = [1, 2, 3, 4];
const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(soma); // Output: 10
```

---

### 17. `forEach()`
Executa uma função em cada elemento do array, mas não retorna um novo array.

**Exemplo:**
```javascript
const frutas = ["maçã", "banana", "laranja"];
frutas.forEach(fruta => console.log(fruta.toUpperCase()));
// Output:
// MAÇÃ
// BANANA
// LARANJA
```
