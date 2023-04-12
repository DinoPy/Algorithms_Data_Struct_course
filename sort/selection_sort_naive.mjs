const selection_sort = (arr) => {
	for (let i = 0, n = arr.length; i < n; i++) {
		let min = i;
		for (let j = 1 + i; j < n; j++) if (arr[j] < arr[min]) min = j;
		if (min !== i) [arr[min], arr[i]] = [arr[i], arr[min]];
		console.log(arr);
	}
	return arr;
};

console.log(selection_sort([4, 1, 30, 11, 53, 16, 200, -3]));
