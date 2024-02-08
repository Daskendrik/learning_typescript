//списки - все элементы списка могут иметь только один тип, неограниченная длинна

const arr1: string[] = []; // массив строк
const arr2 = ['1', '2'];
const arr3: Array<string> = [];
//arr1.push(2) - ошибка

const arr4: string[][] = [];
arr4.push(['123', '32']);

type MyType = string | number;
let arr5: MyType[] = [];
//кортежи - все элементы списка могут иметь разный тип, ограниченная длинна

const tuple: [string, number, boolean] = ['123', 2, true];
//часто нужны для работы с csv
console.log('Ошибок нет');
