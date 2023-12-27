// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

type StateReducerFunc = <T>(state: T, fn: Function) => Function

type PipeFunc = (...fns: Function[]) => (arg: any) => any

type MapFunc = (
	fn: (value: any, index: number, array: any[]) => unknown
) => (xs: any[]) => any[]

type IdentityFunc = <const T>(x: T) => T

type TapFunc = (fn: Function) => IdentityFunc

export { PipeFunc, MapFunc, StateReducerFunc, IdentityFunc, TapFunc }
