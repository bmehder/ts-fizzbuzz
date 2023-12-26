<script lang="ts">
	// @ts-ignore
	import { see } from 'nejquery'

	const pipe =
		(...fns: any[]) =>
		(arg: any) =>
			fns.reduce((acc: any, fn) => fn(acc), arg)

	const map = (fn: any) => (xs: any[]) => xs.map(fn)
	
	const identity = <const T,>(x: T) => x

	const isDivisibleBy = (y: number) => (x: number) => x % y === 0

	const inc = (x: number) => x + 1

	const getArrayKeys = (xs: number[]) => [...xs.keys()]

	const join =
		(str = '') =>
		(xs: (string | number)[]) =>
			xs.join(str)

	const isDivisibleBy15 = isDivisibleBy(15)
	const isDivisibleBy5 = isDivisibleBy(5)
	const isDivisibleBy3 = isDivisibleBy(3)

	const createEntry = (x: number) => {
		if (isDivisibleBy15(x)) return 'FizzBuzz'
		if (isDivisibleBy5(x)) return 'Buzz'
		if (isDivisibleBy3(x)) return 'Fizz'

		return identity(x)
	}

	const getRangeOfNumbers = (x: number) => pipe(Array, getArrayKeys)(x) as number[]
	const incrementValues = (xs: number[]) => map(inc)(xs) as number[]
	const createEntries = (xs: number[]) => map(createEntry)(xs) as (string|number)[]
	const joinWithBreakTag = (xs: (string|number)[]) => join('<br />')(xs)

	const fizzBuzz = (x: number): string =>
		pipe(getRangeOfNumbers, incrementValues, createEntries, see, joinWithBreakTag)(x)
</script>

<main>
	{@html fizzBuzz(100)}
</main>
