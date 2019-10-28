const add = require('../date-adder');

describe('add date function', () => {
  it('Adds seconds', () => {
    const date = new Date(2019, 13, 1, 10, 33, 30, 0);
    const addedDiff = '10s';
    const seconds = add(date, addedDiff);
    expect(seconds).toEqual(date);
  });
  it('Adds minutes', () => {
    const date = new Date(2019, 13, 1, 10, 33, 30, 0);
    const addedDiff = '10m';
    const minutes = add(date, addedDiff);
    expect(minutes).toEqual(date);
  });
  it('Adds hours', () => {
    const date = new Date(2019, 13, 1, 10, 33, 30, 0);
    const addedDiff = '10h';
    const hours = add(date, addedDiff);
    expect(hours).toEqual(date);
  });
  it('Adds days', () => {
    const date = new Date(2019, 13, 1, 10, 33, 30, 0);
    const addedDiff = '10d';
    const days = add(date, addedDiff);
    expect(days).toEqual(date);
  });
  it('Adds weeks', () => {
    const date = new Date(2019, 13, 1, 10, 33, 30, 0);
    const addedDiff = '10w';
    const weeks = add(date, addedDiff);
    expect(weeks).toEqual(date);
  });
  it('Adds months', () => {
    const date = new Date(2019, 13, 1, 10, 33, 30, 0);
    const addedDiff = '10m';
    const months = add(date, addedDiff);
    expect(months).toEqual(date);
  });
  it('Adds years', () => {
    const date = new Date(2019, 13, 1, 10, 33, 30, 0);
    const addedDiff = '10y';
    const years = add(date, addedDiff);
    expect(years).toEqual(date);
  });  
});