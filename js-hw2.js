// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arrNum = [12, 23, 55, 698, 1];
// let arrString = ['Hello', 'Apple, World', 'Lemon', 'Street'];
// let arrAll = [true, false, 11, 'head', false];
// console.log(arrNum, arrString, arrAll)

//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let house = []
//     house[0] = 'window';
//     house[1] = 'bed';
//     house[2] = 'roof';
//     house[3] = 555;

//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for(let i = 0; i < 10; i++) {
//     document.write('<div>Hello</div>')
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for(let i = 0; i < 10; i++) {
//     document.write('<div>Hello</div>' + [i])
// }
//
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0
// while(i < 20)  {
//     document.write('<h1>Hello</h1>')
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0
// while (i < 20) {
//     document.write('<h1>Hello</h1>' + [i])
//     i++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [12, 34, 56, 333, 123, 9, 55, 235, 88, 45];
// for (let i = 0; i < 10; i++) {
//     console.log(arr)
//}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arrStr = ['bed', 'cheese', 'apple', 'notebook', 'hello', 'table', 'UAH', 'pen', 'okten', 'floor']
// for (let i = 0; i < 10; i++) {
//     console.log(arrStr)
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = [true, 123, 'backpack', false, 66, 80, 'console', true, 9, 45]
// for (let i = 0; i < 10; i++) {
//     console.log(arr)
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = [true, 123, 'backpack', false, 66, 80, 'console', true, 9, 45];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "boolean") {
//         console.log(arr[i])
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = [true, 123, 'backpack', false, 66, 80, 'console', true, 9, 45];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         console.log(arr[i])
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = [true, 123, 'backpack', false, 66, 80, 'console', true, 9, 45];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//         console.log(arr[i])
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 123;
// arr[1] = true;
// arr[2] = false;
// arr[3] = 'string';
// arr[4] = 55;
// arr[5] = 'hello'
// arr[6] = 999;
// arr[7] = 2.55;
// arr[8] = true;
// arr[9] = true;
// for (i = 0; i < arr.length; i++) {
//     console.log(arr)
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     document.write(i)
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     document.write(i)
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i += 2) {
//     document.write(i)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
//
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i < 100; i+=2) {
//     console.log(i)
// }


// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)



