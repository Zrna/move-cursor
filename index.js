#!/usr/bin/env node

import robot from 'robotjs';
import { getTime } from './utils.js';

const durationType = process.argv[3] ?? 'min';
const duration = process.argv[2] ? Number(process.argv[2]) : 2;
const interval = durationType === 'sec' ? duration * 1000 : duration * 60000;

const screenSize = robot.getScreenSize();
const screenCenter = {
  width: screenSize.width / 2,
  height: screenSize.height / 2,
};

console.log(`Interval: ${duration} ${durationType}`);
console.log(`Start: ${getTime()}`);
console.log(`Screen center: W${screenCenter.width}, H${screenCenter.height} \n`); // prettier-ignore

if (typeof duration !== Number) {
  process.exitCode = 1;
  throw new Error('Duration value must be a number.');
}

let numberOfExecution = 0;

function moveCursor() {
  const { width, height } = screenCenter;
  const time = getTime();
  const position = robot.getMousePos();

  robot.moveMouseSmooth(
    numberOfExecution % 2 === 1 ? width + 100 : width,
    height
  );
  console.log('\x1b[35m%s\x1b[0m', `[${time}] ${JSON.stringify(position)} \n`);
  numberOfExecution += 1;
}

setInterval(moveCursor, interval);
