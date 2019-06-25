/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех параметров.
 *
 *
 * Условия:
 * - Функция принимает любое количество параметров;
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение
function f(...rest) {
    let sum = 0;
    const argsLength = rest.length;

    for (let i = 0; i < argsLength; i++) {
        if (typeof rest[i] !== 'number') {
            throw new Error('all parameters should be a Number type');
        }
        sum += rest[i];
    }

    return sum;
}

/* не удалять */
f(1, 2, 3); // 6
f(1, 1, 1, 1, 1, 1, 1, 1); // 8
f(1, 2, 's', 4); // Error: all parameters should be a Number type

export { f };
/* не удалять */
