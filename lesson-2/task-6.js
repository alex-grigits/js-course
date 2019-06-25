// # Задача 6

// Написать код который посчитает сумму всех элементов в массиве.

// Использовать встроенные методы массивов — нельзя.

// ```js
// const array = [1, 2, 3, 4];
// ```

const array = [1, 2, 3, 4];

function sum(array) {
    const arrayLength = array.length;
    let sum = 0;

    for (let i = 0; i < arrayLength; i++) {
        sum += array[i];
    }
    return sum;
}

sum(array);
