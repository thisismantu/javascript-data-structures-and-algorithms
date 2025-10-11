function removeDuplicate(array) {
    const uniqArray = [];

    array.forEach(value => {

        if (!uniqArray.includes(value)) {
            uniqArray.push(value);
        }

    });

    return uniqArray.sort((a, b) => a - b);  // Return the array with unique values
}

console.log(removeDuplicate([1, 14, 2, 3, 3, 4, 5, 4, 5, 6, 7, 8, 9, 1, 1, 13, 13]));
