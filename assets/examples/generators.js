function* generator() {
  yield 5;
  yield { prop: 'value' };
}

const gen = generator();

gen.next() === { done: false, value: 5 };
gen.next() === { done: false, value: { prop: 'value' } };
gen.next() === { done: true, value: undefined };
