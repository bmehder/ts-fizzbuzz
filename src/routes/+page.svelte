<script lang="ts">
	import { identity, see, pipe, map, join, getArrayKeys, isDivBy, inc } from '$lib/utils'

	// Partially applied functions
	const isDivisibleBy15 = isDivBy(15)
	const isDivisibleBy5 = isDivBy(5)
	const isDivisibleBy3 = isDivBy(3)

	// Callback function
	const createEntry = (x: number) => {
		if (isDivisibleBy15(x)) return 'FizzBuzz'
		if (isDivisibleBy5(x)) return 'Buzz'
		if (isDivisibleBy3(x)) return 'Fizz'

		return identity(x)
	}

	// Iteration functions
	const incrementArrayValues = map(inc)
	const setFizzBuzzEntries = map(createEntry)
	const joinWithBreakTag = join('<br />')

	// Main function
	const fizzBuzz: (x: number) => string = pipe(
		see, // for console debugging
		Array,
		getArrayKeys,
		incrementArrayValues,
		setFizzBuzzEntries,
		joinWithBreakTag
	)
</script>

<main>
	{@html fizzBuzz(100)}
</main>
