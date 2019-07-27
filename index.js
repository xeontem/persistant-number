const { per } = require('./persistant');

const getNumber = fstNum => countZeros => +`${fstNum}${repeat(countZeros)(0)}`
const repeat = times => value => Array(times).fill(value).join('');

/*
type ResultData = {
  original: Number,
  steps: Number,
  iterations: List String
}
*/

// persistRange:: (Number, Number, Number) -> List ResultData
module.exports.persistRange = (start, end, count) => Array(getNumber(end - start)(count))
  .fill(null)
  .map((_, i) => per(i + getNumber(start)(count)));

// persistNumber:: Number -> ResultData
module.exports.persistNumber = per;
