const naive_binary_search = (array, value) => {
	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		let middle = Math.floor((right + left) / 2);
		if (array[middle] === value) return middle;
		if (value > array[middle]) left = middle + 1;
		if (value < array[middle]) right = middle - 1;
	}

	return -1;
};

console.log(
	naive_binary_search(
		[2, 4, 5, 9, 11, 14, 15, 19, 21, 25, 28, 30, 50, 52, 60, 63],
		21
	)
);
