type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
): ThreeDCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log(add3DCoordinate([1, 2, 3], [4, 5, 6]));

function simpleStringState(
  initial: string
): [() => string, (v: string) => void] {
  let str: string = initial;
  return [
    () => str,
    (v) => {
      str = v;
    },
  ];
}

const [str1getter, str1setter] = simpleStringState("gear blues");
const [str2getter, str2setter] = simpleStringState("heidi");

console.log(str1getter());

str1setter("new gear blues");

console.log(str1getter());

console.log(str2getter());

str2setter("klum");

console.log(str2getter());
