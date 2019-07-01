/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение
function upperCaseFirst(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Incorrect type of argument');
    }
    let lastChars = str.substring(1);
    let firstChar = str.charAt(0).toUpperCase();

    return firstChar + lastChars;
}

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''

exports.upperCaseFirst = upperCaseFirst;
