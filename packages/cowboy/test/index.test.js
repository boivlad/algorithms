const { cowboy, discomfort } = require('../src');

describe('Array', function() {
  const tests = [
    { args: [5, [2, 1, 1, 3, 2]], discomfort: 1, expected: [1, 2, 3, 2, 1] },
    { args: [3, [30, 10, 20]], discomfort: 20, expected: [10, 30, 20] },
    {
      args: [10, [1, 2, 3, 4, 5, 4, 7, 5, 9, 2]],
      discomfort: 4,
      expected: [1, 2, 4, 5, 7, 9, 5, 4, 3, 2]
    },
    {
      args: [11, [1, 2, 1, 2, 3, 5, 5, 3, 6, 4, 4]],
      discomfort: 1,
      expected: [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]
    },
    { args: [5, [1, 2, 3, 4, 5]], discomfort: 2, expected: [1, 3, 5, 4, 2] },
    { args: [4, [1000, 1000, 700, 20000]], discomfort: 19000, expected: [700, 1000, 20000, 1000] },
    {
      args: [3, [1000000000, 1, 1000000000]],
      discomfort: 999999999,
      expected: [1, 1000000000, 1000000000]
    },
  ];
  tests.forEach(function(test) {
    it('correctly sort ' + test.args + ' args', function() {
      const res = discomfort(cowboy(...test.args));
      expect(res).toEqual(test.discomfort);
    });
  });
});
