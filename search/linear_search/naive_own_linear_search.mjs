const linearSearch = (arr, value) => {
	for (let i = 0, n = num.length; i < n; i++) {
		if (arr[0] === value) return i;
	}

	return -1;
};
