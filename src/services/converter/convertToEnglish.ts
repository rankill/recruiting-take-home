/*
 * Disable any warning since my compose functions will receive any param
 * and return any result depending of the purpose of the pure function
 */
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type ComposeFn = (arg: any) => any;

const toNumber = (value: number | string) => Number(value) || 0;

const array = (numbersArray: string): string[] => Array.from(numbersArray);

const isEmpty = (numbersArray: string[] | string) => numbersArray.length === 0;

const take = (takeAmount: number) => (numbersArray: string[]) =>
  numbersArray.slice(0, takeAmount);

const drop = (index: number) => (numbersArray: string[]) =>
  numbersArray.slice(index);

const reverse = (numbersArray: string[]) => numbersArray.slice(0).reverse();

const compose = (f: ComposeFn) => (g: ComposeFn) => (x: string[]) => f(g(x));

const not = (value: boolean) => !value;

const splitArrayByAmount = (amount: number) => (
  numbersArray: string[]
): unknown[] =>
  isEmpty(numbersArray)
    ? []
    : [
        take(amount)(numbersArray),
        ...splitArrayByAmount(amount)(drop(amount)(numbersArray)),
      ];

/**
 * Method to convert a number to english words
 * Usage example: convertToEnglish(123) --> One hundred and twenty-three
 * @param numberToConvert
 */
const convertToEnglish = (numberToConvert: number | string): string => {
  const hundredsMap: string[] = [
    '', // 0 is ignored and passed as empty string
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tensMap: string[] = [
    '', // 0 is Zero
    '', // 10 is ten from hundredsMap
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const thousandsMap: string[] = [
    '', // 0 group is in hundreds limit
    'thousand',
    'million',
    'billion',
    'trillion',
    'quadrillion',
    'quintillion',
    'sextillion',
    'septillion',
    'octillion',
    'nonillion',
  ];

  const buildStringsGroups = ([ones, tens, huns]: string[]) => {
    const buildTens = (arrayMap: string[]) => (index: string) =>
      arrayMap[index] && arrayMap[index]
        ? `and ${arrayMap[tens] && arrayMap[index]} -`
        : '';

    return [
      toNumber(huns) === 0 ? '' : `${hundredsMap[huns]} hundred `, // Build hundreds
      toNumber(ones) === 0 ? tensMap[tens] : buildTens(tensMap)(tens), // Build tens
      hundredsMap[tens + ones] || hundredsMap[ones], // Build ones
    ].join('');
  };

  const buildThousands = (group: string, i: string) =>
    group === '' ? group : `${group} ${thousandsMap[i]}`;

  if (typeof numberToConvert === 'number') {
    return convertToEnglish(String(numberToConvert));
  } else if (numberToConvert === '0') {
    return 'zero';
  }

  return (
    // Convert string to array -> Reverse the array -> split the array in three parts
    // Eg. [5, 4, 3, 2, 1] --> [5, 4, 3], [2, 1]]
    compose(splitArrayByAmount(3))(reverse)(array(numberToConvert))
      .map(buildStringsGroups) // Build words groups --> [1, 2, 3] ->  ['One hundred' and twenty-three]
      .map(buildThousands) // Check if the are thousands values
      .filter(compose(not)(isEmpty)) // Clean string by not empty values
      .reverse() // Re organize array
      .join(' ')
  );
};

export default convertToEnglish;
