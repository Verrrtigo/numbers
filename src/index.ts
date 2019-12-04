export function convertNumberToEnglishText(num: number): string {
    if(num == 0) return 'zero';
    const negative = num < 0 ? true : false;
    let result = '';
    num = Math.abs(num);
    
    for(let i = 1; Math.floor(num / i) > 0; i *= 1000) {
        result = `${convertDigitGroupToWords(Math.floor(num / i) % 1000)} ${i > 1 ? numbersMap.get(i) : ''} ${result}`
    }

    return negative ? `negative ${result}`.trim() : result.trim();
}

const numbersMap = new Map([
    [0, ''],
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    [10, 'ten'],
    [11, 'eleven'],
    [12, 'twelve'],
    [13, 'thirteen'],
    [14, 'fourteen'],
    [15, 'fifteen'],
    [16, 'sixteen'],
    [17, 'seventeen'],
    [18, 'eighteen'],
    [19, 'nineteen'],
    [20, 'twenty'],
    [30, 'thirty'],
    [40, 'forty'],
    [50, 'fifty'],
    [60, 'sixty'],
    [70, 'seventy'],
    [80, 'eighty'],
    [90, 'ninety'],
    [100, 'hundred'],
    [1000, 'thousand'],
    // [1000000, 'million'],
    // [1000000000, 'billion'],
    // [1000000000000, 'trillion'],
])

function convertDigitGroupToWords(num: number): string {
    let result = ''
    
    if(Math.floor(num / 100)){
        result += ` ${numbersMap.get(Math.floor(num / 100))} hundred`
    }
    
    num = Math.floor(num % 100)
    
    if(num > 20) {
        result += ` ${numbersMap.get(Math.floor(num - num % 10))}`
        num = num % 10
    }
    
    return `${result} ${numbersMap.get(num)}`.trim()
}