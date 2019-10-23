const add = require('../date-adder');

describe('add date function', () => {
  it('Adds seconds', () => {
    const date = new Date(2019, 13, 1, 10, 33, 30, 0);
    const addedDiff = '10s';
    const seconds = add(date, addedDiff);
    expect(seconds.toString()).toEqual('Sat Feb 01 2020 10:33:40 GMT-0800 (Pacific Standard Time)');
  });
  it('Adds minutes', () => {
    const date = new Date(2019, 13, 1, 10, 33, 30, 0);
    const addedDiff = '10m';
    const minutes = add(date, addedDiff);
    expect(minutes.toString()).toEqual('Tue Dec 01 2020 10:43:30 GMT-0800 (Pacific Standard Time)');
  });
  it('Adds hours', () => {
    const date = new Date(2019, 13, 1, 10, 33, 30, 0);
    const addedDiff = '10h';
    const hours = add(date, addedDiff);
    expect(hours.toString()).toEqual('Sat Feb 01 2020 20:33:30 GMT-0800 (Pacific Standard Time)');
  });
  it('Adds days', () => {
    const date = new Date(2019, 13, 1, 10, 33, 30, 0);
    const addedDiff = '10d';
    const days = add(date, addedDiff);
    expect(days.toString()).toEqual('Tue Feb 11 2020 10:33:30 GMT-0800 (Pacific Standard Time)');
  });
  it('Adds weeks', () => {
    const date = new Date(2019, 13, 1, 10, 33, 30, 0);
    const addedDiff = '10w';
    const weeks = add(date, addedDiff);
    expect(weeks.toString()).toEqual('Sat Apr 11 2020 10:33:30 GMT-0700 (Pacific Daylight Time)');
  });
  it('Adds months', () => {
    const date = new Date(2019, 13, 1, 10, 33, 30, 0);
    const addedDiff = '10m';
    const months = add(date, addedDiff);
    expect(months.toString()).toEqual('Tue Dec 01 2020 10:43:30 GMT-0800 (Pacific Standard Time)');
  });
  it('Adds years', () => {
    const date = new Date(2019, 13, 1, 10, 33, 30, 0);
    const addedDiff = '10y';
    const years = add(date, addedDiff);
    expect(years.toString()).toEqual('Fri Feb 01 2030 10:33:30 GMT-0800 (Pacific Standard Time)');
  });

  
});