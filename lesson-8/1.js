/**
 * Задача 1.
 *
 * Создайте функцию shallowMerge.
 * Функция обладает двумя параметрами, каждый из которых должен быть обычным JavaScript объектом.
 * Функция возвращает новый объект, который в себе объединяет свойства обоих объектов.
 * Свойства необходимо копировать лишь на один уровень каждого их объектов.
 *
 * Из объектов и обеих аргументах копируются только собственные свойства, включая недоступные для перечисления.
 * Одноименные свойства объекта из второго аргумента, которые уже есть в объекте из первого аргумента копировать не нужно.
 *
 * Условия:
 * - Встроенный метод Object.create() использовать запрещено;
 * - При копировании любого свойства необходимо обязательно сохранить его дескрипторы;
 * - Свойства с одинаковыми именами нужно перезаписывать — приоритетом обладает объект из второго параметра.
 */

// Решение
function concatUniqueItems(firstArr, secondArr) {
    const concatedArrays = [...firstArr, ...secondArr];

    for (let i = 0; i < concatedArrays.length; i++) {
        for (let j = i + 1; j < concatedArrays.length; j++) {
            if (concatedArrays[i] === concatedArrays[j]) {
                concatedArrays.splice(j, 1);
                j--;
            }
        }
    }

    return concatedArrays;
}
function shallowMerge(firstObj, secondObj) {
    const firstObjProperties = Object.getOwnPropertyNames(firstObj);
    const secondObjProperties = Object.getOwnPropertyNames(secondObj);
    const uniqueProperties = concatUniqueItems(
        firstObjProperties,
        secondObjProperties
    );
    const mergedObj = {};

    for (let i = 0; i < uniqueProperties.length; i++) {
        if (secondObj.hasOwnProperty(uniqueProperties[i])) {
            Object.defineProperty(
                mergedObj,
                uniqueProperties[i],
                Object.getOwnPropertyDescriptor(secondObj, uniqueProperties[i])
            );
        } else {
            Object.defineProperty(
                mergedObj,
                uniqueProperties[i],
                Object.getOwnPropertyDescriptor(firstObj, uniqueProperties[i])
            );
        }
    }

    return mergedObj;
}

const user = { firstName: 'Marcus', lastName: 'Kronenberg', test: 10 };
const userData = { job: 'developer', country: 'Germany', lastName: 'Schmidt' };

Object.defineProperty(user, 'firstName', { writable: false });
Object.defineProperty(userData, 'job', { configurable: false });

const result = shallowMerge(user, userData);

console.log(result); // { firstName: 'Marcus', lastName: 'Schmidt', job: 'developer', country: 'Germany' }
console.log(Object.getOwnPropertyDescriptor(result, 'firstName').writable); // false
console.log(Object.getOwnPropertyDescriptor(result, 'job').configurable); // false

exports.shallowMerge = shallowMerge;
