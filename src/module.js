import log from './pretty-log'

export const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

const x = [1, 2]
const y = [3, 4]

function sumArrays(x, y) {
	return sum(...x) + sum(...y)
}

log(sumArrays(x, y))
