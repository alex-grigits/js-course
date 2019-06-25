/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит проверку входного параметра на тип number.
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение
function f(first, second, divider) {
    const argsLength = arguments.length;

    for (let i = 0; i < argsLength; i++) {
        if (typeof arguments[i] !== 'number') {
            throw new Error('all parameters type should be a Number');
        }
    }

    return (first - second) / divider;
}

/* не удалять */
f(9, 3, 2); // 3
f('s', 9, 3); // Error: all parameters type should be a Number

export { f };
/* не удалять */
