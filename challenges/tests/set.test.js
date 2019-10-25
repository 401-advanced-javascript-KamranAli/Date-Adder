const Set = require('../set');

describe('Set Exercise', () => {
  it('adds to the set', () => {
    const set = new Set([1, 2, 3]);
    set.add(4);
    expect(set.array).toEqual([1, 2, 3, 4]);
  });

  it('removes from the set', () => {
    const set = new Set([1, 2, 3]);
    set.remove(1);
    expect(set.array).toEqual([2, 3]);
  });

  it('checks to see if value exists', () => {
    const set = new Set([1, 2, 3]);
    expect(set.has(2)).toBe(true);
  });
});