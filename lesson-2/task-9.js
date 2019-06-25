// # Задача 9

// Отсортируйте массив по убыванию.

// Использовать встроенные методы массивов — нельзя.

// ```javascript
// const arr = [1, 2, 3, 4, 5, 6];
// // [6,5,4,3,2,1]
// ```

const arr = [1, 2, 3, 4, 5, 6];
const arr2 = [10, 21, 13, 4, 5, 16];

function sortDesc(array) {
    const arrayLength = array.length;
    let prevIndex = 0;

    for (let i = 1; i < arrayLength; i++) {
        nextElement = array[i];
        prevIndex = i - 1;
        while (prevIndex >= 0 && array[prevIndex] < nextElement) {
            array[prevIndex + 1] = array[prevIndex];
            prevIndex--;
        }
        array[prevIndex + 1] = nextElement;
    }

    return array;
}

let sortedArray = sortDesc(arr);
console.log(sortedArray);
