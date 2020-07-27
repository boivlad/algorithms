const { solution } = require('../src');

describe('Lexmin', function() {
  it('First case', function() {
    const result = solution(5, 1, 1, [1, 0, 0, 0, 4]);
    expect(result).toEqual(1);
  });
  it('Second case', function() {
    const result = solution(6, 1, 2, [3, 8, 0, 1, 0, 0]);
    expect(result).toEqual(2);
  });
  it('3-th case', function() {
    const result = solution(5, 1, 1, [1, 1, 0, 3, 0]);
    expect(result).toEqual(0);
  });
  it('4-th case', function() {
    const result = solution(5, 1, 1, [4, 0, 0, 1, 0]);
    expect(result).toEqual(1);
  });
  it('5-th case', function() {
    const result = solution(2, 1, 1, [0, 2]);
    expect(result).toEqual(0);
  });
  it('6-th case', function() {
    const result = solution(100,
      66,
      30,
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 27, 15, 53, 29, 56, 30, 24, 50, 39, 39, 46, 4, 14, 44, 16, 55, 48, 15, 54, 25, 4, 44, 15, 29, 55, 22, 49, 52, 9, 2, 22, 15, 14, 33, 24, 38, 11, 48, 27, 34, 29, 8, 37, 47, 36, 54, 45, 24, 31, 1434]);
    expect(result).toEqual(0);
  });
  it('7-th case', function() {
    const result = solution(100,
      2,
      1,
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 1, 2, 8, 5, 1, 9, 1, 2, 12, 7, 5, 0, 7, 2, 11, 3, 17]);
    expect(result).toEqual(27);
  });
  it('8-th case', function() {
    const result = solution(100,
      3,
      1,
      [5, 8, 5, 7, 1, 2, 6, 4, 3, 2, 3, 2, 5, 4, 0, 5, 6, 0, 2, 0, 2, 3, 2, 3, 3, 2, 4, 2, 1, 1, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(result).toEqual(16);
  });
});