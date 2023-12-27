import type { PipeFunc, MapFunc, StateReducerFunc, IdentityFunc, TapFunc } from '../app'

const stateReducer: StateReducerFunc = (state, fn) => fn(state)

const tap: TapFunc = fn => x => (fn(x), identity(x))

export const see = tap(console.log)

export const pipe: PipeFunc =
	(...fns) =>
	x =>
		fns.reduce(stateReducer, x)

export const identity: IdentityFunc = x => x

export const map: MapFunc = fn => xs => xs.map(fn)

export const isDivBy = (y: number) => (x: number) => x % y === 0

export const inc = (x: number) => x + 1

export const getArrayKeys = (xs: number[]) => [...xs.keys()]

export const join =
	(x = '') =>
	(xs: []) =>
		xs.join(x)
