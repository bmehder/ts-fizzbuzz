import type {
	Pipe,
	MapFn,
	ReducerFunction,
	Identity,
	NumToNumToBool,
	NumToNum,
	ArrayOfNumsToArrayOfNums,
	JoinBy,
} from '../app'

// Callback functions
const reducerFunction: ReducerFunction = (state, fn) => fn(state)

// Utility functions
export const pipe: Pipe = (...fns) => arg => fns.reduce(reducerFunction, arg) // prettier-ignore
export const map: MapFn = fn => xs => xs.map(fn)
export const identity: Identity = x => x
export const isDivisibleBy: NumToNumToBool = y => x => x % y === 0
export const inc: NumToNum = x => x + 1
export const getArrayOfKeys: ArrayOfNumsToArrayOfNums = xs => [...xs.keys()]
export const join: JoinBy = (str = '') => xs => xs.join(str) // prettier-ignore
