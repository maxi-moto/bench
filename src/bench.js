'use strict';

import timer from './timer';

const bench = {
  run: (marks, times) => {
    let results = [];

    let run = 0;
    while(run++ < times) {
      marks.forEach((mark) => {
        timer.start(mark.label);
        mark.fun(...mark.data);
        timer.end(mark.label);
      });
      results.push(timer.getTimeMap());
      timer.clearTimeMap();
    }

    return results;
  },

  average: (results) => {
    let sum = {};
    results.forEach((result) => {
      for (let label in result) {
        if (!sum[label]) {
          sum[label] = 0;
        }
        sum[label] += result[label].elapsed;
      }
    });

    let avg = {};
    for(let label in sum) {
      avg[label] = sum[label] / results.length;
    }

    return avg;
  },

  prettyPrint: (results) => {
    for (let label in results) {
      console.log(`${ label }\t\t\t ${ results[label] }`);
    };
  }

};

export default bench;

