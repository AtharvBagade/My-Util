//String iterate
const name = 'Zelda';
const letters = [...name]; // 'Z', 'e', 'l', 'd', 'a'

//Generate a UUID (universally unique identifier)
const genUUID = (a) => (a ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, genUUID));

//Make object iterable using generator functions and symbol iterator
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator 
const obj = { a: 1, b: 2, c: 3 };

obj[Symbol.iterator] = function* () {
  for (let key of Object.keys(obj)) yield { [key]: obj[key] };
};

[...obj]; // [ { a: 1 }, { b: 2 }, { c: 3 }]

//Make a number iterable using generator functions and symbol.iterator
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator 
class IterableNumber extends Number {
    *[Symbol.iterator]() {
      for (let digit of [...`${this}`].map(d => Number.parseInt(d))) yield digit;
    }
  }
  
  const num = new IterableNumber(1337);
  [...num]; // [ 1, 3, 3, 7]


//Convert JSON to CSV(Comma Seperated Values)
  const JSONtoCSV = (arr, columns, delimiter = ',') =>
  [
    //Join to combine all the names in columns to create the first row
    columns.join(delimiter),
    ...arr.map(obj =>
      columns.reduce(
        (acc, key) =>
          `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
        ''
      )
    ),
  ].join('\n');
