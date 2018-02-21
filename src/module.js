import log from './pretty-log'

export const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

const x = [1, 2]

function sumArrays(x) {
	return sum(...x) + 5
}

log(sumArrays(x))
