// # Задача 8

// Напишите код, который посчитает сумму всех парных элементов в массиве. В суммировании участвуют только элементы больше 3.

// Использовать встроенные методы массивов — нельзя.

// ```js
// const array = [1, 2, 3, 4, 5, 6];
// ```

const array = [1, 2, 3, 4, 5, 6, 7, 10];

function sumOfEvenMoreThanThree(array) {
    const arrayLength = array.length;
    let sum = 0;

    for (let i = 0; i < arrayLength; i++) {
        if (array[i] % 2 === 0 && array[i] > 3) {
            sum += array[i];
        }
    }

    return sum;
}

let sumOfItems = sumOfEvenMoreThanThree(array);
console.log(sumOfItems);
