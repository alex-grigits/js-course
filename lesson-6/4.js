/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение
function some(array, fn) {
    if (arguments.length !== 2) {
        throw new Error('При вызове функции не было передано два аргумента');
    }
    if (!Array.isArray(arguments[0])) {
        throw new Error('В качестве первого аргумента был передан не массив');
    }
    if (typeof fn !== 'function') {
        throw new Error(
            'В качестве второго аргумента была передана не функция'
        );
    }
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

const result = some(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return typeof item === 'string';
});

console.log(result); // true

exports.some = some;
