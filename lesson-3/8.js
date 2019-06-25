/**
 * Задача 7.
 *
 * Дан массив с числами `[1, 2, 3]`.
 * Создайте функцию `f`, которая принимает массив в качестве параметра,
 * а затем последовательно выводит на экран его элементы.
 *
 * Условия:
 * - Входной параметр должен быть не пустым массивом;
 * - Обязательно использовать рекурсию;
 * - Использовать цикл запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение
function f(array) {
    if (array instanceof Array) {
        if (array.length === 0) {
            throw new Error("parameter can't be an empty");
        } else if (array.length === 1) {
            console.log(array[0]);
        } else {
            console.log(array.splice(0, 1)[0]);
            f(array);
        }
    } else {
        throw new Error('parameter type should be an array');
    }
}

/* не удалять */
f([1, 2, 3]);
// 1
// 2
// 3
f(1, 2, 3); // Error: parameter type should be an array
f('Content'); // Error: parameter type should be an array
f([]); // Error: parameter can't be an empty

export { f };
/* не удалять */
