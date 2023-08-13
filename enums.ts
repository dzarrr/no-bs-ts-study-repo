// Section 1 - Enums

enum LoadingState {
  beforeLoad = "beforeLoad",
  loading = "loading",
  loaded = "loaded",
}

const englishLoadingStates = {
  [LoadingState.beforeLoad]: "Before Load",
  [LoadingState.loading]: "Loading",
  [LoadingState.loaded]: "Before Load",
};

const isLoading = (state: LoadingState) => state === LoadingState.loading;

const myState = LoadingState.beforeLoad;

console.log(isLoading(myState));

console.log(englishLoadingStates[myState]);

// Section 2 - Literal Types

function rollDice(dice: 1 | 2 | 3): number {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5) + 1;
  }
  return pip;
}

console.log(rollDice(1));

// A very handy way to use function overload whoa
// This change a lot of things in how I create a function
// Very clean and readable

function sendEvent(name: "addToCart", data: { productId: number }): void;
function sendEvent(name: "checkout", data: { chartCount: number }): void;
function sendEvent(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEvent("addToCart", { productId: 123123 });
sendEvent("addToCart", { productId: 123 });
sendEvent("checkout", { chartCount: 9 });
