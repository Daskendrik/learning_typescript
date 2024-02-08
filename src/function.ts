const fn = (num: number): string => {
  return String(num);
};

type Callback = (a: number) => string; // это тип, функция, которая вернет строку
function fn2(cb: Callback) {
  if (cb === undefined) {
    cb = String;
  }
  cb(12);
}

function point(x = 0, y = 0): [number, number] {
  return [x, y];
}
point(10);

function fn3(...nums: number[]): string {
  return nums.join('-');
}
interface ITest {
  label: string;
}
function fn4(obj: ITest): void {
  //void - когда функция ничего не вернет или вернет undefined
  console.log(obj.label);
}

const drink = {
  label: 'pepsi',
  price: 90,
};

fn4(drink);

function pickCard(x: number): { suit: string; card: number };
function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: any): any {
  //оверлорд - overload
  if (typeof x === 'object') {
    return 2;
  } else if (typeof x === 'number') {
    return { suit: 'string', card: 2 };
  }
}

pickCard([{ suit: 'asd', card: 2 }]);
