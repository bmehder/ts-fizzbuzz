<script lang="ts">
	// @ts-ignore - nejQuery is not typed
	import { see } from 'nejquery'

	// Types
	type StrOrNum = string | number
	type ReducerFunction = (acc: any, fn: Function) => Function

	type Pipe = (...fns: Function[]) => (arg: any) => any // Is this the best that can be done?
	type MapType = (fn: any) => (xs: any[]) => any[] // Best I could do, for now.
	type Identity = <const T>(x: T) => T

	type NumToNumToBool = (y: number) => (x: number) => boolean
	type NumToNum = (x: number) => number
	type ArrayOfNumsToArrayOfNums = (xs: number[]) => number[]
	type JoinBy = (str?: string) => (xs: StrOrNum[]) => string

	type IncrementArrayValues = (xs: number[]) => number[]
	type CreateFizzBuzzEntries = (xs: number[]) => StrOrNum[]
	type JoinArrayWithBreakTag = (xs: StrOrNum[]) => string

	type FizzBuzzWords = 'Fizz' | 'Buzz' | 'FizzBuzz'
	type FizzBuzzEntry = (x: number) => FizzBuzzWords | number
	type FizzBuzz = (x: number) => string

	// Callback functions
	const reducerFunction: ReducerFunction = (state, fn) => fn(state)

	// Utility functions
	// prettier-ignore
	const pipe: Pipe = (...fns) => arg =>	fns.reduce(reducerFunction, arg)
	const map: MapType = fn => xs => xs.map(fn)
	const identity: Identity = x => x
	const isDivisibleBy: NumToNumToBool = y => x => x % y === 0
	const inc: NumToNum = x => x + 1
	const getArrayOfKeys: ArrayOfNumsToArrayOfNums = xs => [...xs.keys()]
	// prettier-ignore
	const join: JoinBy = (str = '') => xs => xs.join(str)

	// Partially applied functions
	const isDivisibleBy15 = isDivisibleBy(15)
	const isDivisibleBy5 = isDivisibleBy(5)
	const isDivisibleBy3 = isDivisibleBy(3)

	// Domain-specific callback function
	const createEntry: FizzBuzzEntry = x => {
		if (isDivisibleBy15(x)) return 'FizzBuzz'
		if (isDivisibleBy5(x)) return 'Buzz'
		if (isDivisibleBy3(x)) return 'Fizz'

		return identity(x)
	}

	// Domain-specific loop functions
	const incrementArrayValues: IncrementArrayValues = map(inc)
	const createFizzBuzzEntries: CreateFizzBuzzEntries = map(createEntry)
	const joinArrayWithBreakTag: JoinArrayWithBreakTag = join('<br />')

	// App function - the program in a nutshell
	const fizzBuzz: FizzBuzz = pipe(
		Array,
		getArrayOfKeys,
		incrementArrayValues,
		createFizzBuzzEntries,
		joinArrayWithBreakTag
	)
</script>

<main>
	{@html fizzBuzz(100)}
</main>
