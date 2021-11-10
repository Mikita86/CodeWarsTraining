function multiply(a, b) {
    return a * b;
}

function descendingOrder(n) {
    return parseInt((n + '').split('').sort().reverse().join(''))
}

function getCount(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}

function getCount(input) {
    let vowelsCount = 0;
    let inputLetters = input.split("");

    const vowels = ["a", "e", "i", "o", "u"];

    vowels.forEach(function(vowel) {
        inputLetters.forEach(function(inpLetter) {
            if (inpLetter === vowel) {
                vowelsCount++;
            }
        });
    });


    return vowelsCount;
}

function tribonacci(signature, n) {

    let newsignature = [];

    for (let i = 0; i < n; i++) {
        let result;

        if (i > 2) {
            let item1 = newsignature[i - 1];
            let item2 = newsignature[i - 2];
            let item3 = newsignature[i - 3];

            result = item1 + item2 + item3;
        } else {
            result = signature[i];
        }

        newsignature.push(result);
    }
    return newsignature;
}

function arrayDiff(a, b) {
    const result = []

    for (let i = 0; i < a.length; i++) {
        let isValid = true

        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                isValid = false
            }
        }

        if (isValid) {
            result.push(a[i])
        }
    }

    return result
}

function arrayDiff(a, b) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                a.splice(i, 1);
                i--;
            }
        }
    }
    return a;
}


function sumDigPow(a, b) {
    eureka = [];
    for (i = a; i <= b; i++) {
        digits = String(i).split('');
        if (i == digits.reduce(function(accumulator, currentValue, currentIndex) {
                return accumulator + currentValue ** (currentIndex + 1);
            }, 0)) {
            eureka.push(i);
        }
    }
    return eureka;
}


function stray(mass) {

    let obj = {}
    let result;
    for (i = 0; i < mass.length; i++) {
        let item = mass[i]
        if (obj.hasOwnProperty(item.toString())) {
            let value = obj[item.toString()]
            value = value + 1
            obj[item.toString()] = value
        } else {
            obj[item.toString()] = 1
        }
    }
    for (key in obj) {
        if (obj[key] === 1) {
            result = Number(key)
        }
    }
    return result
}


function solution(str) {
    return str.split("").reverse().join("");
}


function enough(cap, on, wait) {
    let total = on + wait;
    if (total <= cap) {
        return 0;
    } else {
        return total - cap;
    }
}


function boolToWord(bool) {
    if (bool) {
        return 'Yes';
    } else {
        return 'No';
    }
}


function nthChar(words) {
    var str = "";
    for (var i = 0; i < words.length; i++) {
        str += words[i].charAt(i);
    }
    return str;
}

function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0
    } else {
        return n * m;
    }
}



function highAndLow(numbers) {
    numbers = numbers.split(" ");
    return Math.max(...numbers) + " " + Math.min(...numbers);
}


function countSheeps(arrayOfSheep) {
    let counter = 0
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i]) counter += 1
    }
    return counter
}



function doubleChar(str) {
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        newStr += str[i] + str[i];
    }
    return newStr;
};



function rentalCarCost(d) {
    var total = 40 * d,
        discount = 0;
    if (d >= 7) {
        total -= 50;
    } else if (d >= 3) {
        total -= 20;
    }
    return total; // Your solution here
}


function even_or_odd(number) {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
};


function expressionMatter(a, b, c) {
    let values = [
        (a + b + c),
        (a + b * c),
        ((a + b) * c),
        (a * b * c),
        (a * b + c),
        (a * (b + c)),
    ];
    return Math.max(...values);
}