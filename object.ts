type MyObjType = { a: number; b: number; c: string; d: boolean };

const obj = { a: 1, b: 2, c: 'asdasd', d: true };

interface MyObject {
  // кастомные интерфейсы надо обзночать с I
  readonly a: number; // нельзя перезаписать
  b: number;
  c: string;
  d?: boolean; // ? значит не обязательно
  //   print?: () => number; // функция
  [key: string]: string | number | boolean | undefined;
}

const obj2: MyObject = { a: 1, b: 2, c: 'asdasd' };

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const john: Person = {
  age: 45,
  name: 'Jhon',
};

interface IAccont {
  email: string;
}

interface IDeveloper extends IAccont, Person {
  // создает интерфейс и наследует
  skills: string[];
}

type My1 = {
  name: string;
};

type My2 = {
  age: number;
};

type My3 = My1 & My2; //создала тип из 2
