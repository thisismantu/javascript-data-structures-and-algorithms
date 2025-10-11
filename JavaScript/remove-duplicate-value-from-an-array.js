function removeDuplicate(array) {
    const uniqArray = [];

    array.forEach(value => {
        let checkExists = false;
        uniqArray.forEach(uvalue => {
            if (uvalue === value) {
                checkExists = true;
                return;  // Exits the inner forEach iteration
            }
        });

        if (!checkExists) {
            uniqArray.push(value);  // Adds unique value to uniqArray
        }
    });

    return uniqArray;  // Return the array with unique values
}

console.log(removeDuplicate([1, 14,2, 3, 3, 4, 5, 4, 5, 6, 7, 8, 9, 1, 1,13,13]));
