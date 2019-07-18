/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано три аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 * - В качестве третьего аргумента было передан не число.
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение
function reduce(array, fn, initAccumulator) {
    if (arguments.length !== 3) {
        throw new Error('При вызове функции не было передано три аргумента');
    }
    if (!Array.isArray(arguments[0])) {
        throw new Error('В качестве первого аргумента был передан не массив');
    }
    if (typeof fn !== 'function') {
        throw new Error(
            'В качестве второго аргумента была передана не функция'
        );
    }
    if (typeof initAccumulator !== 'number') {
        throw new Error('В качестве третьего аргумента было передан не число');
    }
    let result = initAccumulator || array[0];
    for (let i = 0; i < array.length; i++) {
        result = fn(result, array[i], i, array);
    }
    return result;
}

const result = reduce(
    array,
    function(accumulator, item, i, arrayRef) {
        console.log(accumulator); // значение-аккумулятор
        console.log(item); // элемент массива
        console.log(i); // индекс элемента
        console.log(arrayRef); // ссылка на обрабатываемый массив

        return accumulator + item;
    },
    INITIAL_ACCUMULATOR
);

console.log(result); // 21

exports.reduce = reduce;
