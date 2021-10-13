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
    var vowelsCount = 0;
    var inputLetters = input.split("");

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