<script lang="ts">
	// @ts-ignore
	import { see } from 'nejquery'
	import type {
		IncrementArrayValues,
		SetFizzBuzzEntries,
		JoinArrayWithBreakTag,
		FizzBuzzEntry,
		FizzBuzz,
	} from '../app'
	import {
		pipe,
		map,
		identity,
		join,
		isDivisibleBy,
		inc,
		getArrayOfKeys,
	} from '$lib/utilities'

	// Partially applied functions
	const isDivisibleBy15 = isDivisibleBy(15)
	const isDivisibleBy5 = isDivisibleBy(5)
	const isDivisibleBy3 = isDivisibleBy(3)

	// Callback function
	const createEntry: FizzBuzzEntry = x => {
		if (isDivisibleBy15(x)) return 'FizzBuzz'
		if (isDivisibleBy5(x)) return 'Buzz'
		if (isDivisibleBy3(x)) return 'Fizz'

		return identity(x)
	}

	// Iteration functions
	const incrementArrayValues: IncrementArrayValues = map(inc)
	const setFizzBuzzEntries: SetFizzBuzzEntries = map(createEntry)
	const joinArrayWithBreakTag: JoinArrayWithBreakTag = join('<br />')

	// The program in a nutshell
	const fizzBuzz: FizzBuzz = pipe(
		see, // console debugging fn
		Array,
		getArrayOfKeys,
		incrementArrayValues,
		setFizzBuzzEntries,
		joinArrayWithBreakTag
	)
</script>

<main>
	{@html fizzBuzz(100)}
</main>
