const { MFS } = require('../src');

describe('k-Multiple Free Set', function() {
  it('First case', function() {
    const result = MFS(6, 2, [2, 3, 4, 5, 6, 10]);
    expect(result).toEqual(3);
  });
  it('Second case', function() {
    const result = MFS(6, 2, [1, 3, 4, 5, 7, 9]);
    expect(result).toEqual(6);
  });it('Third case', function() {
    const result = MFS(10, 2, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(result).toEqual(6);
  });
});