/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение
function filter(array, fn) {
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
    const filtered = [];
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i], i, array)) {
            filtered.push(array[i]);
        }
    }
    return filtered;
}

const filteredArray = filter(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return item === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;
