//передача типов происходит через <>
const valueFactory = (x: number) => x;
const value = valueFactory(11);

type TypeFactory<X> = X;
type MyType1 = TypeFactory<string>;

interface ValueContainer<Value> {
  value: Value;
}

type StringContainer = ValueContainer<string>;

const x: StringContainer = {
  value: 's',
};

class ArrayOfNumber {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfString {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}
// чтобы не писать 2 предыдущих класса можно их объединить как ниже
class ArrayOfAny<T> {
  //T - тип, который мы потом зададим через <> при создании
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAny<string>(['1', '2']);
new ArrayOfAny<number>([1, 2]);

function printString(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumber(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function printAny<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAny<number>([1, 2, 3]);

function fillArray<T>(len: number, elem: T) {
  return new Array<T>(len).fill(elem);
}

const arr = fillArray<string>(10, '8');

//конкретизация
interface Lenghttwise {
  length: number;
}
function printLenght<T extends Lenghttwise>(age: T): number {
  return age.length;
}

function getProp<T, K extends keyof T>(obj: T, key: K) {
  console.log(obj[key]);
}

const MyObj = {
  a: 1,
  b: 2,
  c: 3,
};
// K==='a' | 'b' | 'c'

getProp(MyObj, 'a');
