// Kata URL: https://www.codewars.com/kata/human-readable-time

// Write a function, which takes a non - negative integer(seconds) as input and returns the time in a human - readable format(HH: MM: SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999(99: 59: 59)

export default nSeconds => {
    const hours = paddTwoDigits(Math.floor(nSeconds / 3600));
    const minutes = paddTwoDigits(Math.floor(nSeconds / 60) - hours * 60);
    const seconds = paddTwoDigits(nSeconds - hours * 3600 - minutes * 60);

    return `${hours}:${minutes}:${seconds}`;
};

function paddTwoDigits(number) {
    return number < 10 ? `0${number}` : `${number}`;
}
