'use strict';

import bench from '../src/bench';

describe('Bench', () => {
  test('can run muliple trials', () => {
    let results = bench.run([
      { label: 'test 1', fun: JSON.stringify, data: ['this is a test'] }
    ], 2);

    expect(results.length).toBe(2);
  });

  test('can get average for each trial by label', () => {
    let results = [
      {
        'test 1': { elapsed: 10 },
        'test 2': { elapsed: 15 }
      },
      {
        'test 1': { elapsed: 12 },
        'test 2': { elapsed: 17 }
      }
    ]

    let averages = bench.average(results);
    expect(averages['test 1']).toBe(11);
    expect(averages['test 2']).toBe(16);
  });

});
