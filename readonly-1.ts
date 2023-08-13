// Section 1 - Immutability of an object

interface Cat {
  name: string;
  breed: string;
}

type MyReadOnlyUtil<T> = {
  readonly [K in keyof T]: T[K];
};

function makeCat(name: string, breed: string): MyReadOnlyUtil<Cat> {
  return {
    name,
    breed,
  };
}

const usil = makeCat("usil", "tabby");

console.log(usil);

// Section 2 - Immutability of a tuple

function makeCoordinate(
  x: number,
  y: number,
  z: number,
): readonly [number, number, number] {
  return [x, y, x];
}

const c1 = makeCoordinate(1, 2, 33);

const reallyConst = [1, 2, 3] as const;

const reallyConst2: readonly number[] = [1, 4, 5];

// Q: What's the difference between 'as const' and readonly?
// A: I think mainly it comes down to the intended usage
//     'as const' is generally used to declaring a variable as a literal types that can't be changed
//      readonly is generally used to declaring function arguments/object properties that can't be changed anymore
//      the difference is subtle. It's quite hard to pinpoint exactly what makes its differs lol :/
