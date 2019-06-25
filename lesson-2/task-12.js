// # Задача 12

// Найдите сумму положительных элементов массива.

// Использовать встроенные методы массивов — нельзя.

// ```javascript
// const array = [2, -1, -3, 15, 0, 4];
// ```

const array = [2, -1, -3, 15, 0, 4];

function sumOfPositive(array) {
    const arrayLength = array.length;
    let sum = 0;

    for (let i = 0; i < arrayLength; i++) {
        const element = array[i];

        if (element > 0) {
            sum += element;
        }
    }

    return sum;
}

let sum = sumOfPositive(array);
console.log(sum);
