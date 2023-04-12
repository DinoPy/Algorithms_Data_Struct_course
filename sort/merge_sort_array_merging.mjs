const merge_sorted_arrays = (arr1, arr2) => {
	const totalLength = arr1.length + arr2.length;
	let sortedArray = [];
	let i = 0;
	let j = 0;
	while (sortedArray.length < totalLength) {
		// v more time efficient but less space efficient
		// if (arr1.length === i) {
		// 	sortedArray = [...sortedArray, ...arr2.splice(j)];
		// 	break;
		// } else if (arr2.length === j) {
		// 	sortedArray = [...sortedArray, ...arr1.splice(i)];
		// 	break;
		// }
		if (arr1[i] < arr2[j]) {
			sortedArray.push(arr1[i]);
			i++;
		} else {
			sortedArray.push(arr2[j]);
			j++;
			console.log(sortedArray);
		}
	}
	while (arr1.length - 1 !== i) {
		sortedArray.push(arr1[i]);
		i++;
	}
	while (arr2.length - 1 !== j) {
		sortedArray.push(arr1[j]);
		j++;
	}
	return sortedArray;
};

const merge_sort = (array) => {
	if (array.length <= 1) return array;
	let mid = Math.floor(array.length / 2);
	let left = merge_sort(array.slice(0, mid));
	let right = merge_sort(array.slice(mid));

	return merge_sorted_arrays(left, right);
};

console.log(
	merge_sorted_arrays([1, 1, 1, 1, 5, 19], [20, 3, 7, 12, 27, 99, 105])
);
