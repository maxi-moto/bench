'use strict';

import hrtime from 'browser-process-hrtime';

class Timer {
  constructor() {
    this.timeMap = {};
  }

  start(label) {
    if (!this.timeMap[label]) {
      this.timeMap[label] = {
        start: hrtime(),
        end: null,
        elapsed: null
      };
    } else {
      throw new Error(`Label ${ label } already running`);
    }
  }

  end(label) {
    let data = this.timeMap[label];
    if (data) {
      data.end = hrtime(data.start);
      data.elapsed = data.end[1] / 1000000;
    } else {
      throw new Error(`No label ${ label } currently running`);
    }
  }

  clearTimeMap() {
    this.timeMap = {};
  }

  getTimeMap() {
    return Object.assign({}, this.timeMap);
  }
}

let timer = new Timer();
export default timer;

