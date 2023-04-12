const naive_string_search = (string, pattern) => {
	let occurences = 0;
	for (let i = 0, n = string.length; i < n; i++) {
		for (let j = 0, m = pattern.length; j < m; j++) {
			if (string[i + j] !== pattern[j]) break;
			if (j === m - 1) occurences += 1;
		}
	}
	return occurences;
};

console.log(naive_string_search('wtfomgzomg', 'zomg'));
