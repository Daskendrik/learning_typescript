type Goo = Goo[] | number;
const number: Goo = [1, 2, 3, [3, 4, 5, [12]]];

type JSINPrim = string | number | boolean | null;
type JSONObj = { [k: string]: JSONValue };
type JSONArr = JSONValue[];

type JSONValue = JSINPrim | JSONArr | JSONObj;

//рекрусия, где исключаются необязательные теги (-?)
type NonNullableQuery<T> = {
  [Prop in keyof T]-?: NonNullableQuery<NonNullable<T[Prop]>>;
};
