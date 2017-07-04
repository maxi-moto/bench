'use strict';

import timer from '../src/timer';

describe('timer', () => {
  beforeEach(() => {
    timer.clearTimeMap();
  });

  test('can start timer for label', () => {
    let label = 'label';
    timer.start(label);

    let map = timer.getTimeMap();
    expect(map[label].start).toBeTruthy();
    expect(map[label].end).toBeFalsy();
  });

  test('can start only one timer per label', () => {
    let label = 'label';

    timer.start(label);
    expect(() => {
      timer.start('label')
    }).toThrow(`Label ${ label } already running`);
  });

  test('multiple lables can be started', () => {
    timer.start('label 1');
    expect(() => {
      timer.start('label 2');
    }).not.toThrow(/already running/);
  });

  test('can only end labels that are running', () => {
    let label = 'label';
    expect(() => {
      timer.end(label);
    }).toThrow(`No label ${ label } currently running`)
  });

  test('can end timer labels', () => {
    let label = 'lable';
    timer.start(label);
    timer.end(label);

    let map = timer.getTimeMap();
    expect(map[label].start).toBeTruthy();
    expect(map[label].end).toBeTruthy();
    expect(map[label].elapsed).toBeTruthy();
  });
});
