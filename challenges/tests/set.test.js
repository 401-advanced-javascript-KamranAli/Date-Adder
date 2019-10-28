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

  it('returns set intersections', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([2, 3, 4]);
    const result = set1.intersect(set2);
    expect(result.array).toEqual([2, 3]);
  });

  it('returns set union', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([2, 3, 4]);
    const result = set1.union(set2);
    expect(result.array).toEqual([1, 2, 3, 4]);
  });

  it('returns set difference', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([2, 3, 4]);
    const result = set1.difference(set2);
    expect(result.array).toEqual([1]);
  });

  it('returns 2 set intersection', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([2, 3, 4]);
    const result = Set.intersect(set1, set2);
    expect(result.array).toEqual([2]);
  });

  it('returns 2 set union', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([2, 3, 4]);
    const result = Set.union(set1, set2);
    expect(result.array).toEqual([1, 2, 3, 4]);
  });

  it('returns 2 set difference', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([2, 3, 4]);
    const result = Set.difference(set1, set2);
    expect(result.array).toEqual([1]);
  });
});