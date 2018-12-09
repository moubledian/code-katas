// Kata URL: https://www.codewars.com/kata/valid-braces

export default function(string) {
    return validBraces(string);
}

function validBraces(braces) {
    if (!braces) {
        return true;
    }
    const symbol = braces.includes('[]')
        ? '[]'
        : braces.includes('{}')
        ? '{}'
        : braces.includes('()')
        ? '()'
        : '';
    if (!symbol) {
        return false;
    }
    return validBraces(braces.split(symbol).join(''));
}
