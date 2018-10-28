function sumOfOther(arr) {
     if (!Array.isArray(arr)) {throw new Error('Array must be one-dimensional, integer, arbitrary length')};
     if (arr.length === 0) {return arr};
    const sum = arr.reduce((acc, elem) => acc + elem);
    return arr.map(elem => sum - elem);
}