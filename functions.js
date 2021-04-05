// 1
/*const isPrime = (num) => {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= num / 2; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const sayPrimeOrNot = (num) => {
        if (isPrime(num)) {
            console.log('yes');
        }
    else {
        console.log('no');
        }
};
sayPrimeOrNot(5);*/

/*// BEGIN
const isPrime = (num) => {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

const sayPrimeOrNot = (num) => {
    const text = isPrime(num) ? 'yes' : 'no';
    console.log(text);
};

export default sayPrimeOrNot;
// END*/


// 2

/*const average = (...num) => {
    if (num.length === 0) {
        return null;
    }

  return  _.sum(num) / num.length;


};
average(-3, 4, 2, 10);*/

// 3
/*
const convert = (...date) => { // распаковали массив с помощью rest
    const newArr = [];
    let item;

    if (date.length === 0) {
        return [];
    }

    for (const [a, b, c] of date) {
        item = new Date(a, b, c).toDateString();
        newArr.push(item);
    }
    return newArr;
};
convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]);*/

// 4

/*const run = (text) => {
    if (text.length === 0) {
        return null;
    }

    const takeLast = (str, n) => {
        let newStr = '';
        for (let i = 0; i < n; i += 1) {
            if (str.length < n) {
                return null;
            }
            const index = (str.length - 1) - i;
            newStr += str[index];
        }
    }
return takeLast('power', 4);
};
run('power');*/

// 5
/*const params = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];

const takeOldest = (list, n = 3) => {

    const a =  _.sortBy(list, ({ birthday }) => Date.parse(birthday));
    const t = a.slice(0, n);
    console.log(a, t);
};
takeOldest(params);*/

/*// BEGIN
const takeOldest = (params, count = 1) => {
    const sorted = _.sortBy(params, ({ birthday }) => Date.parse(birthday));
    return sorted.slice(0, count);
};

export default takeOldest;
// END*/

// 6 MAP()
/*const params = [
    {
        name: 'Tirion',
        children: [
            { name: 'Mira', birthday: '1983-03-23' },
        ],
    },
    { name: 'Bronn', children: [] },
    {
        name: 'Sam',
        children: [
            { name: 'Aria', birthday: '2012-11-03' },
            { name: 'Keit', birthday: '1933-05-14' },
        ],
    },
    {
        name: 'Rob',
        children: [
            { name: 'Tisha', birthday: '2012-11-03' },
        ],
    },
];
let result = [];

const getChildren = (coll) => {
       const result = coll.map((child) => child.children);
    console.log(result);
       return result.flat();
};
getChildren(params);*/

/*// BEGIN
const getChildren = (params) => {
    const childrenOfUsers = params.map(({ children }) => children);
    return childrenOfUsers.flat();
};

export default getChildren;

// Alternative solution
// export default (params) => params.flatMap(({ children }) => children);
// END*/


// 7 FILTER()
/*const params = [
    {
        name: 'Tirion',
        friends: [
            { name: 'Mira', gender: 'female' },
            { name: 'Ramsey', gender: 'male' },
        ],
    },
    { name: 'Bronn', friends: [] },
    {
        name: 'Sam',
        friends: [
            { name: 'Aria', gender: 'female' },
            { name: 'Keit', gender: 'female' },
        ],
    },
    {
        name: 'Rob',
        friends: [
            { name: 'Taywin', gender: 'male' },
        ],
    },
];
const getGirlFriends = (coll) => {

    const childrenOfUsers = coll.map(({ friends }) => friends);
    console.log(childrenOfUsers);
    const flatArr = childrenOfUsers.flat();
    console.log(flatArr);
    const filterFriend = flatArr.filter(({ gender }) => gender === 'female');

    console.log(childrenOfUsers, flatArr, filterFriend)
};
getGirlFriends(params);*/

/*// BEGIN
export default (params) => {
    const friendsOfUsers = params.map(({ friends }) => friends);
    return friendsOfUsers.flat().filter(({ gender }) => gender === 'female');
};
// END*/

// 8 REDUCE()
/*const students = [
    { name: 'Tirion', class: 'B', mark: 2 },
    { name: 'Keit', class: 'A', mark: 3 },
    { name: 'Ramsey', class: 'A', mark: 4 },
    { name: 'Bronn', class: 'B', mark: 3 },
    { name: 'Sam', class: 'A', mark: 2 },
    { name: 'Aria', class: 'B', mark: 5 },
    { name: 'Keit', class: 'B', mark: 4 },
    { name: 'Rob', class: 'B', mark: 4 },
    { name: 'Taywin', class: 'A', mark: 5 },
];*/
/*
let [ name ] = students;
console.log({ name });
//2: [
//     { name: 'Tirion', class: 'B', mark: 2 },
//     { name: 'Sam', class: 'A', mark: 2 },
//   ],

const groupBy = (arr, param) => arr.reduce((names, user) => {

        if (!names.hasOwnProperty(user[param])) {
            names[user[param]] = [];
        }
        names[user[param]].push(user);
        return names;
    }, {});
groupBy(students, 'name');*/

// BEGIN
/*const groupBy = (objects, key) => objects.reduce((acc, object) => {
    // из каждого объекта берётся значение по ключу
    const groupName = object[key]; // key = name
    console.log(groupName)
    // контейнером группы выступает массив
    const group = acc[groupName] ?? []; // Оператор нулевого слияния возвращает пустой массив, если в аккумуляторе ничего нет
  //  console.log(group);
    // возвращается новый объект аккумулятора
   // console.log({...acc});
    return { ...acc, [groupName]: group.concat(object) }; // квадратные скобки нужны, чтобы указать имя группы в качестве ключа

    // старый аккумулятор деструктурируется, для текущей группы записывается новый массив с данными
}, {});

groupBy(students, 'name')*/
// END

// 9
/*const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];
const freeEmailDomains = [
    'gmail.com',
    'yandex.ru',
    'hotmail.com',
];*/
// {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// };

/*const getFreeDomainsCount = (coll) => coll

   .map((coll) => coll.slice(coll.indexOf('@') + 1), coll.length)
   .filter((param) => freeEmailDomains.includes(param))
   .reduce((acc, currentElem) => {
          if(_.get(acc, currentElem)) {
              acc[currentElem] += 1;
          } else {
              acc[currentElem] = 1;
          }
       console.log(acc);
        return acc;
    }, {});

getFreeDomainsCount(emails);*/

// BEGIN
/*const getFreeDomainsCount = (emails) => emails
    .map((email) => {
        const [, domain] = email.split('@');
        return domain;
    })
    .filter((domain) => freeEmailDomains.includes(domain))
    .reduce((acc, domain) => {
        const count = _.get(acc, domain, 0) + 1;
        return { ...acc, [domain]: count };
    }, {});

getFreeDomainsCount(emails);*/
// END

/*const getFreeDomainsCount = (emails) => emails
    .map((email) => {
        const [, domain] = email.split('@');
        return domain;
    })
    .filter((domain) => freeEmailDomains.includes(domain))
    .reduce((acc, domain) => {
        const count = get(acc, domain, 0) + 1;
        return { ...acc, [domain]: count };
    }, {});

export default getFreeDomainsCount;*/


// 10
const arr = [
    ['*', '*', '*', '*'],
    ['*', ' ', ' ', '*'],
    ['*', ' ', ' ', '*'],
    ['*', '*', '*', '*'],
];
/*const enlargeArrayImage = (coll) => {
const doubleX = (coll) => coll.map((elem) => ([elem, elem]).flat());
   const test = coll.map(doubleX);

    console.log(doubleX(test), test);
};
enlargeArrayImage(arr);*/

const enlargeArrayImage = (coll) => {
    const duplicateValues = (items) => items.map((item) => ([item, item]).flat());
    const horizontallyStretched = coll.map(duplicateValues);

    console.log(duplicateValues(horizontallyStretched));
// [ [ '1', '1' ], [ '1', '1' ], [ '0', '0' ], [ '0', '0' ] ]

    console.log(horizontallyStretched);
// [ [ '1', '1', '1', '1' ], [ '0', '0', '0', '0' ] ]

};
enlargeArrayImage(arr);
















