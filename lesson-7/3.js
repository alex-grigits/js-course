/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение
function createArray(value, count) {
    if (arguments.length !== 2) {
        throw new Error('При вызове функции не было передано два аргумента');
    }
    if (
        typeof value !== 'number' &&
        typeof value !== 'string' &&
        typeof value !== 'object' &&
        !Array.isArray(value)
    ) {
        throw new Error(
            'В качестве первого аргумента были переданы не число, не строка, не объект и не массив'
        );
    }
    if (typeof count !== 'number') {
        throw new Error('В качестве второго аргумента был передан не число');
    }
    const newArray = new Array(count);
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = value;
    }

    return newArray;
}

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
