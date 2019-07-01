/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение
function checkSpam(source, example) {
    for (let arg in arguments) {
        if (typeof arg !== 'string') {
            throw new TypeError();
        }
    }

    return source.toLowerCase().indexOf(example.toLowerCase()) > -1;
}

checkSpam('pitterXXX@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true
checkSpam('pitterxxx@gmail.com', 'xxy'); // true
checkSpam('pitterxxx@gmail.com', 'xxX'); // true

exports.checkSpam = checkSpam;
