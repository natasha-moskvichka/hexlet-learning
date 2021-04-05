// 1
/*const users = [
    { hello: 'world' }
]
const get = (coll, key, defaultValue = 'kitty') => {

    coll.reduce((acc, item) => {
            acc = `${item[key]}`;
            console.log(acc);
            return acc;
    }, '')
};
get(users, 'hello', 'kitty'); // 'world'

const check = (coll, key, defaultValue) => {

   /!* if (coll.length === 0) {
        throw new Error('Функция работает неверно!');
    }*!/

    if (get['hello'] !== key) {
        throw new Error('Функция работает неверно!');
    }

   /!* coll.reduce((acc, item) => {
        if(!acc.hasOwnProperty(coll[key])) {
            acc = `${item[key]}`;
            return acc;
        }
    }, '')*!/
};
check(users, 'hello', 'kitty');
console.log(test);*/



/*function  createInc(n) { //одна главная функция, в которой замыкаем значение (1)
    return function (num) {
        return n + num
    }
}
const addOne = createInc(1); // на выходе получем другую функцию, с другими параметрами
console.log(addOne)
console.log(addOne(90))

function urlGenerator(domain) { // com
    return function (url) {
        return `https://${url}.${domain}`
    }
}
const comUrl = urlGenerator('com');
const a = comUrl('google')
console.log(a)
console.log(comUrl('google'));*/



export const capitalize = (text) => {
    const firstSymbol = text[0].toUpperCase();
    const restSubstring = text.slice(1);
    return `${firstSymbol}${restSubstring}`;
};

















































