const quick_sort = (arr, left = 0, right = arr.length - 1) => {
	if (left > right) return;
	const idx = pivot(arr, left, right);

	quick_sort(arr, left, idx - 1);
	quick_sort(arr, idx + 1, right);

	return arr;
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
	// declare the variable that is used for comparison
	let comparison_element = arr[start]; // <-- pivot

	// declare a variable that holds the index up to which we have swapped elements
	let upTo = start;
	// using the start index we go through the array and compare every element
	// to the start element
	for (let i = start + 1; i <= end; i++) {
		// if an element with a smaller value is found it is swapped to start + n (n = number of elements that were swaped past first)
		if (comparison_element > arr[i]) {
			upTo++;
			[arr[upTo], arr[i]] = [arr[i], arr[upTo]];
		}
	}

	// once we've moved all the elements that are larger after the element we are comparing with we need to swap the comparing element with the last element that was swapper (that's less than its value)
	[arr[upTo], arr[start]] = [arr[start], arr[upTo]];
	// return the index of that last swaped element (the comparison that was swapped)
	return upTo;
};

console.log(quick_sort([5, 9, 1, 23, 10, 87, 65, 33, 12, 100]));
