// dnaToRna
/*const dnaToRna = (str) => {
    if (!str) {
        return ''
    }

    const RNTATranscription = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U',
    };

    const rx = /^[GCTA]+$/;
    console.log(rx);
    const test = rx.test(str);
    console.log(test);

    const dnaToRna = (dnaChain) => { // если нет нуклеотитов return ''
        if(dnaChain) {
            return '';
        }

        const isCorrectDNA = rx.test(dnaChain); // проверяем на корректность переданную последовательность ДНК
        if(!isCorrectDNA) { // если есть какие-то символы, кроме возможных, то return null
            return null;
        }
        const dnaChainArray = dnaChain.split(''); //

        let a = dnaChainArray.map(nucleotide => RNTATranscription[nucleotide].join(''));
        console.log(a);
    }
    dnaToRna();
};
dnaToRna('CCGTA');*/

const dnaToRna = (str) => {
    if (!str) {
        return '';
    }

    const newObj = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U',
    };
    const newStr = str.split(''); // ["C", "C", "G", "T", "A"]
    const arr = [];

    const entries = Object.entries(newObj);
    const keys = Object.keys(newObj);
    const isIncludes = (elem) => keys.includes(elem);

    for (let i = 0; i < newStr.length; i += 1) {

        for (const [key, value] of entries) {
            if (newStr[i] === key) {
                arr.push(value);
                let a =  arr.join('');
                console.log(a);
            }

        }
    }
};
dnaToRna('ACNTG');

// buildQueryString

/*const buildQueryString = (obj) => {
    const arr = [];
    const entries = Object.entries(obj).sort();
    for (const [a, b] of entries) { // a = per; b = 1
        arr.push(`${a}=${b}`);
    }
    return arr.join('&');
};
buildQueryString({ per: 10, page: 1 });*/


// genDiff
// {
//   one: 'deleted',
//   two: 'changed',
//   four: 'unchanged',
//   zero: 'added',
// }

/*const data1 = { one: 'eon', two: 'two', four: true };
const data2 = { two: 'own', zero: 4, four: true };

const str1 =  'deleted'; //ключ отсутствовал в первом объекте, но был добавлен во второй - zero
const str2 = 'changed';// ключ был в первом объекте, но отсутствует во втором - one
const str3 = 'unchanged'; // ключ присутствовал и в первом и во втором объектах, но значения отличаются - two // true
const str4 = 'added'; // ключ присутствовал и в первом и во втором объектах с одинаковыми значениями - four // true

const genDiff = (obj1, obj2) => {

    const keys2 = Object.keys(obj2);

    const values2 = Object.values(obj2);

    const entries1 = Object.entries(obj1);
    const result = {};

    const isIncludesK = (elem) => keys2.includes(elem);
    const isIncludesV = (elem) => values2.includes(elem);

    for (const [key, value] of entries1) {
            if (isIncludesK(key)) {
                result[key] = str3;
                if (isIncludesV(value)) {
                    result[key] = str4;
                }
        }
        else {
            result[key] = str2;
        }
    }
    console.log(result);
};
genDiff({ one: 'eon' }, { two: 'own' }); // one: 'deleted', two: 'added',*/
















