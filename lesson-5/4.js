/**
 * Задача 4.
 *
 * Дана стоимость в виде строки: `"$120"`.
 * Первый символ — валюта, затем – число.
 * Создайте функцию `extractCurrencyValue(source)`, которая будет из такой строки выделять число-значение, в данном случае 120.
 * Обратите внимание что нужно возвращать не строку 120 а именно число 120.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

const PRICE = '$120';

// Решение
function extractCurrencyValue(source) {
    if (typeof source !== 'string') {
        throw new TypeError();
    }

    return Number(source.trim().slice(1));
}

function extractCurrencyValue2(source) {
    if (typeof source !== 'string') {
        throw new TypeError();
    }

    const re = /\d+[,|.]?\d*/g;
    const extractedNumber = source.match(re)[0].replace(',', '.');

    return Number(extractedNumber);
}

extractCurrencyValue(PRICE); // 120

extractCurrencyValue2('$120'); // 120
extractCurrencyValue2(' $120 '); // 120
extractCurrencyValue2('ƒ2000');
extractCurrencyValue2('$55.23');
extractCurrencyValue2('100.50UAH');
extractCurrencyValue2(' 1001,505 UAH');
extractCurrencyValue2(123);

exports.extractCurrencyValue = extractCurrencyValue;
