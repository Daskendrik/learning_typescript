let str: string;
// str = 1 - ошибка
str = 'abs';

let num = 1;
// num = '123' - ошибка

let score: number | string; //  такой тип называют юнион

type Score = number | string; //это алиас типа, то есть мы что то типо создали свой тип, который можем присвоить переменной
let muScore1: Score = '';
