/**
 * Задача 6.
 *
 * Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет.
 * Если чётное — функция возвращает `true`, если нечётное — `false`.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Для добавление нового элемента в конец массива используйте метод push.
 *
 * Заметки:
 * - Чётные числа могут делится на 2 без остатка.
 */

// Решение
function isEven(num) {
    if (typeof num !== 'number') {
        throw new Error('parameter type is not a Number');
    }

    return num % 2 === 0;
}

/* не удалять */
isEven(3); // false
isEven(4); // true
isEven('Content'); // Error: parameter type is not a Number

export { isEven };
/* не удалять */
