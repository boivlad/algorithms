const { solution } = require('../src');

describe('How many trees', function() {
  it('First case', function() {
    const result = solution(3, 2);
    expect(result).toEqual(5);
  });
  it('Second case', function() {
    const result = solution(3, 3);
    expect(result).toEqual(4);
  });
  it('Third case', function() {
    const result = solution(1, 1);
    expect(result).toEqual(1);
  });
  it('Fourth case', function() {
    const result = solution(2, 1);
    expect(result).toEqual(2);
  });
  it('Fifth case', function() {
    const result = solution(33, 4);
    expect(result).toEqual(212336130412243110);
  });
  it('Sixth case', function() {
    const result = solution(35, 35);
    expect(result).toEqual(17179869184);
  });
  it('Seventh case', function() {
    const result = solution(35, 1);
    expect(result).toEqual(3116285494907301262);
  });
  it('Eighth case', function() {
    const result = solution(14, 11);
    expect(result).toEqual(488448);
  });
});