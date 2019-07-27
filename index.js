const fs = require('fs');

// internal dependency
const { per } = require('./persistant');

const out = fs.createWriteStream('output.json');

const getNumber = fstNum => countZeros => +`${fstNum}${repeat(countZeros)(0)}`
const repeat = times => value => Array(times).fill(value).join('');

const PARAMS = { start: 1, end: 2, count: 1 };

const json = Array(getNumber(PARAMS.end - PARAMS.start)(PARAMS.count))
  .fill(null)
  .map((_, i) => per(i + getNumber(PARAMS.start)(PARAMS.count)))
  // .filter(data => data.iterations.length > 3)
  .sort((a, b) => a.iterations.length > b.iterations.length);

out.write(JSON.stringify(json, null, ' '));
