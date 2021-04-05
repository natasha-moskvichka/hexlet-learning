// Счётчик одногодок

/*const users = [
    { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
    { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
    { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
    { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
    { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
    { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
    { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
    { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
    { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
    { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
];

const getMenCountByYear = (coll) =>  coll

   .filter(({gender}) => gender === 'male')

   .map((elem) => {
        const [itemDate] = elem.birthday.split('-');
        return itemDate; // 1973..
    })

    .reduce((acc, item) => {
        const count = _.get(acc, item, 0) + 1;
        return { ...acc, [item]: count };
     }, {});


getMenCountByYear(users);*/

// BEGIN
/*const getMenCountByYear = (users) => {
    const men = users.filter(({ gender }) => gender === 'male');

    const years = men.map(({ birthday }) => birthday.slice(0, 4));

    return years.reduce((acc, year) => {
        const count = _.get(acc, year, 0) + 1;
        return { ...acc, [year]: count };
    }, {});
};

getMenCountByYear(users);*/
// END

// Одинаковая четность

/*
const sameParity = (arr) => {
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

    const parity = arr.map((elem) => isPrime(elem))
    console.log(parity)
};


sameParity([-1, 0, 1, -3, 10, -2]); //// [-1, 1, -3]*/

// fizzBuzz

const fizzBuzz = (begin, end) => {
    for (let i = begin; i <= end; i += 1) {
        const fizz = i % 3 === 0;
        const buzz = i % 5 === 0;
        const fizzPart = fizz ? 'Fizz' : '';
        const buzzPart = buzz ? 'Buzz' : '';
        console.log(`${fizzPart}${buzzPart}` || i);
    }
    /*for (let i = begin; i <= end; i += 1) {
        if (begin > end) {
            console.log();
        }
        if (i % 5 === 0 && i % 3 === 0) {
            console.log('FizzBuzz');
        }

        else if (i %  3 === 0) {
            console.log('Fizz');
        }

        else if (i %  5 === 0) {
            console.log('Buzz');
        }

        else {
            console.log(i);
        }
    }*/
};
fizzBuzz(11, 20);


// BEGIN
/*const fizzBuzz = (begin, end) => {
    for (let i = begin; i <= end; i += 1) {
        const hasFizz = i % 3 === 0;
        const hasBuzz = i % 5 === 0;
        const fizzPart = hasFizz ? 'Fizz' : '';
        const buzzPart = hasBuzz ? 'Buzz' : '';
        console.log(`${fizzPart}${buzzPart}` || i);
    }
};

export default fizzBuzz;*/
// END


























































