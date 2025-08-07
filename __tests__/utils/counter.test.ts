import Counter from '@/utils/Counter';

describe('Counter class', () => {

  let counter = new Counter;

  beforeEach(() => {
    counter = new Counter;
  })

  it('counter increment', () => {
    counter.increment()
    expect(counter.getCount()).toBe(1);
  })

  it('counter decrement', () => {
    counter.decrement();

    expect(counter.getCount()).toBe(-1)
  })

})