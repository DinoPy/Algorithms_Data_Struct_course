const bubble_sort = (arr) => {
	// loop over the first array
	for (let i = 0, n = arr.length - 1; i < n; i++) {
		//loop over the 2nd array
		for (let j = 0; j < n - i; j++) {
			if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			console.log(arr);
		}
		console.log('One pass competed!');
	}
	return arr;
};

console.log(bubble_sort([4, 1, 30, 11, 53, 16, 200, -3]));
