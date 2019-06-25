// # Задача 7

// Напишите код, который посчитает сумму всех парных элементов в массиве.

// Использовать встроенные методы массивов — нельзя.

// ```js
// const array = [1, 2, 3, 4];
// ```

const array = [1, 2, 3, 4, 7, 8];

function sumOfEven(array) {
    const arrayLength = array.length;
    let sum = 0;

    for (let i = 0; i < arrayLength; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }

    return sum;
}

sumOfEven(array);
