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

type StrOrNum = string | number
type ReducerFunction = (acc: any, fn: Function) => Function

type Pipe = (...fns: Function[]) => (arg: any) => any // Is this the best that can be done?
type MapFn = (fn: any) => (xs: any[]) => any[] // This is the best I could do, for now.
type Identity = <const T>(x: T) => T

type NumToNumToBool = (y: number) => (x: number) => boolean
type NumToNum = (x: number) => number
type ArrayOfNumsToArrayOfNums = (xs: number[]) => number[]
type JoinBy = (str?: string) => (xs: StrOrNum[]) => string

type IncrementArrayValues = (xs: number[]) => number[]
type SetFizzBuzzEntries = (xs: number[]) => StrOrNum[]
type JoinArrayWithBreakTag = (xs: StrOrNum[]) => string

type FizzBuzzWord = 'Fizz' | 'Buzz' | 'FizzBuzz'
type FizzBuzzEntry = (x: number) => FizzBuzzWord | number
type FizzBuzz = (x: number) => string

export {
	Pipe,
	MapFn,
	ReducerFunction,
	Identity,
	NumToNumToBool,
	NumToNum,
	ArrayOfNumsToArrayOfNums,
	JoinBy,
	IncrementArrayValues,
	SetFizzBuzzEntries,
	JoinArrayWithBreakTag,
	FizzBuzzEntry,
	FizzBuzz,
}
