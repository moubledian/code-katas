// Kata URL: https://www.codewars.com/kata/iq-test

export default function(numbers) {
    const parsedNumbers = numbers.split(' ').map(n => +n);

    const evenNumbers = parsedNumbers.filter(n => n % 2 === 0);
    const oddNumbers = parsedNumbers.filter(n => n % 2 === 1);

    return evenNumbers.length > oddNumbers.length
        ? parsedNumbers.indexOf(oddNumbers[0]) + 1
        : parsedNumbers.indexOf(evenNumbers[0]) + 1;
}
