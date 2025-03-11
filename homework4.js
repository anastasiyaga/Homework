"use strict";

function checkProbabilityTheory(count) {
    let evenCount = 0; 
    let oddCount = 0; 

    for (let i = 0; i < count; i++) {
        let randomNum = Math.floor(Math.random() * (1000 - 100 + 1)) + 100; 

        if (randomNum % 2 === 0) {
            evenCount++; // Якщо число парне, додаємо до лічильника
        } else {
            oddCount++; // Якщо число непарне, додаємо до іншого лічильника
        }
    }

    let evenPercentage = (evenCount / count) * 100; // Відсоток парних
    let oddPercentage = (oddCount / count) * 100;   // Відсоток непарних

    console.log("Кількість згенерованих чисел:", count);
    console.log("Парних чисел:", evenCount);
    console.log("Непарних чисел:", oddCount);
    console.log("Відсоток парних до непарних:", evenPercentage.toFixed(2) + "% / " + oddPercentage.toFixed(2) + "%");
}

console.log("Запускаємо перевірку теорії ймовірності...");
checkProbabilityTheory(1000);
