// Kata URL: https://www.codewars.com/kata/array-dot-diff


// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.


export default (list1, list2) => {
    return list1.filter(n => list2.indexOf(n) === -1);
};

