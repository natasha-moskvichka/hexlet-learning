// 1
/*const getJsonFileData = () => {
    const user = {
        "files": [
            "src/objects.js",
        ],
        "config": true,
    };
    return user;
};
getJsonFileData();*/

// const name = 'age';
// const user = { name: 'Vasya', married: true, age: 25 };
//
// let a = user[name]; // 25
// console.log(a);
// let b = user['name']; // 'Vasya'
// console.log(b);

// 2
/*const lesson = {
    name: 'ДеструКТУРИЗАЦИЯ',
    description: 'каК удивитЬ колек',
};

const normalize = (obj) => {
    obj.name.toLowerCase();
    console.log(_.capitalize(obj['name'].toLowerCase()));
    _.capitalize(obj['description'].toLowerCase());
    console.log(obj['description'].toLowerCase());
};
normalize(lesson);*/

/*const company = {};

// Поменять объект можно
company.name = 'Hexlet';

// Заменить ссылку нельзя
company = {}; // Boom!

let object = {};

// А так можно
object = {};*/

// 3
/*const company1 = { };
const company2 = { };*/

/*const company = (obj1, obj2) => {
    if (obj1.name === obj2.name && obj1.state === obj2.state && obj1.website === obj2.website) {
        console.log('yes');
    } else {
        console.log('no')
    }
};
company(company1, company2);*/

/*const company = (company1, company2) => {
    const keys = ['name', 'state', 'website'];
    console.log(keys);
    for (const key of keys) {
        if (company1[key] !== company2[key]) {
            return false;
        }
    }

    return true;
};
company(company1, company2);*/


/*const filepath = '/path/to/index.js';
const getFileInfo = (filepath) => {
    // Инициализация объекта
    const info = {};

    const parts = filepath.split('/');
    const filename = _.last(parts);
    info.filename = filename;

    const extension = _.last(filename.split('.'));
    info.extension = extension;
  //  console.log(extension);

  //  console.log(info);
};
getFileInfo(filepath);*/

// 4

/*const infoName = {};
const getInfo = (str) => {
    const newStr = str.split('//');
    let elemName;
    let elemScheme;
    const elemDefault = 'http';

    if (!str.startsWith('http:')) {
        elemName = elemDefault;
    }

    for (let i = 0; i < newStr.length; i += 1) {
        if (newStr[i] === 'http:') {
            elemName = 'http';
        }
        if (newStr[i] === 'https:') {
            elemName = 'https';
        }
    }

    elemScheme = newStr[newStr.length - 1];
    infoName.scheme = elemName;
    infoName.name = elemScheme;
    console.log(infoName);
};
getInfo('https://hexlet.io');*/


/*// BEGIN
const getInfo = (domain) => {
    let scheme = '';
    if (domain.startsWith('http://')) {
        scheme = 'http';
    } else if (domain.startsWith('https://')) { // Guard expression - сначала базовые проверк
        scheme = 'https';
        // else if другие протоколы
    } else {
        scheme = 'http'; // для случаев, которые не попали в базовые проверки
    }

    const name = domain.replace(`${scheme}://`, ''); // https://hexlet.io.replace(заменяем: scheme на: str)
    console.log(name);

    console.log({ scheme, name });
};
getInfo('https://hexlet.io');

// END*/

// 5
/*const text = 'one two three two ONE one wow'; //
const countWords = (str) => {
    if (str.length === 0) {
        return '';
    }
    const newObj = {};
    const newArr = _.words(str);
    let newWord;

    for (const elem of newArr) {
        newWord = elem.toLowerCase();
        if (_.has(newObj, newWord)) {
            newObj[newWord] += 1;
        } else {
            newObj[newWord] = 1;
        }
    }
    console.log(newObj);
};
countWords(text);*/

/*const countWords = (sentence) => {
    const words = _.words(sentence);
    const result = {};
    for (const word of words) {
        const lowerWord = word.toLowerCase();
        console.log(result[lowerWord]);
        result[lowerWord] = (result[lowerWord] ?? 0) + 1;
    }

    console.log(result);
};
countWords('one two three two ONE one wow');*/

// 5

/*const data = {
    user: 'ubuntu',
    cores: 4,
    os: 'linux',
};

const findKeys = (obj, expectElem) => {
    const newObj = {};
    const keys = Object.keys(obj);
    const isIncludingElem = (elem) => keys.includes(elem);

    for (const key of expectElem) {
        if (isIncludingElem(key)) {
            newObj[key] = data[key];
        } else {
            data.virtual = false;
        }
    }
    console.log(newObj);
};
findKeys(data, ['user']);


// BEGIN
const pick = (data, keys) => {
    const result = {};

    for (const key of keys) {
        if (_.has(data, key)) {
            result[key] = data[key];
        }
    }

    console.log(result);
};
pick(data, ['user']);
// END*/

// const user = { name: 'Vasya', married: true, age: 25 };
//
// // Добавим свойство friends со списком друзей
// user.friends = ['Kolya', 'Petya'];
//
// // Добавим свойство children со списком детей,
// // каждый ребёнок представлен отдельным объектом
// user.children = [
//     { name: 'Mila', age: 1 },
//     { name: 'Petr', age: 10 },
// ];
//
// // Добавим вложенный объект
// user.company = { name: 'Hexlet' };
// console.log(user);
//
// const a = user?.married;
// console.log(a);

/*const company = { name: 'Hexlet' };
const user = { company };
console.log(user);
let a =user?.company?.name ?? 'default';
console.log(a); //hexlet*/

// 6
/*const data = {
    user: 'ubuntu',
    hosts: {
        0: {
            name: 'web1',
        },
        1: {
            name: 'web2',
            null: 3,
            active: false,
        },
    },
};*/

/*const get = (obj, params) => {
    let result = {};
    for (const key of params) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = obj[key];
        }
        if(Object.prototype.hasOwnProperty.call(result, key)) {
            result = result[key];
        }
    }
    console.log(result);
};
get(data,  ['hosts', 1, 'name']);*/

/*// BEGIN
const get = (data, keys) => {
    let current = data;
    for (const key of keys) {
        const hasBarProperty = Object.prototype.hasOwnProperty.call(current, key);
        if (!hasBarProperty) {
            return null;
        }
        current = current[key];
    }

    console.log(current);
};
get(data,  ['hosts', 1, 'name']);
// END*/

// 7
const data = {
    key: 'value',
    key2: {
        key: 'innerValue',
        innerKey: {
            anotherKey: 'anotherValue',
        },
    },
};

const cloneDeep = (obj) => {
    let result = {};

    const keys =  Object.entries(obj);
    keys.forEach(([key, value]) => {
        if(_.isObject(value)) {
            result[key] = cloneDeep(value);
        } else {
            result[key] = value;
        }
    });
    console.log(result);
};
cloneDeep(data);

/*// BEGIN
const cloneDeep = (object) => {
    const result = {};
    const entries = Object.entries(object);
    for (const [key, value] of entries) {o
        result[key] = _.isObject(value) ? cloneDeep(value) : value;
    }

    console.log(result);
};

cloneDeep(data);
// END*/


/*
// 8
const make = (name, obj = { website: 'hexlet.io', state: 'published' }) => {
    const state = 'moderating';
    const now = Date.now();
     let result = {};

        result = {name, state, createdAt: now, ...obj};
    console.log(result);

};
make('Hexlet');
*/

// 9
const users = [
    { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
    { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
    { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
    { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];

const getSortedNames = (obj) => {
    let newArr = [];
    for ( const key of obj ) {
        let { name } = key; // деструктуризация
        newArr.push(name);
    }
    newArr.sort();
    console.log(newArr);
};
getSortedNames(users);


/*// BEGIN
export default (users) => {
    const names = [];

    for (const { name } of users) {
        names.push(name);
    }

    return names.sort();
};
// END*/
















