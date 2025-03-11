const prompt = require("prompt-sync")(); // Підключаємо prompt-sync

let x = Number(prompt("Введіть число: "));
let y = Number(prompt("Введіть степінь: "));

let res = 1;
for (let i = 0; i < y; i++) {
    res *= x;
}

console.log("Результат:", res);