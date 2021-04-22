/*
 * Disable any warning since my compose functions will receive any param
 * and return any result depending of the purpose of the pure function
 */
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type ComposeFn = (arg: any) => any;

const toNumber = (value: number | string) => Number(value) || 0;

const array = (numbersArray: string): string[] => {
  debugger;
  return Array.from(numbersArray);
};

const isEmpty = (numbersArray: string[] | string) => {
  debugger;
  return numbersArray.length === 0;
};

const take = (takeAmount: number) => (numbersArray: string[]) => {
  debugger;
  return numbersArray.slice(0, takeAmount);
};

const drop = (index: number) => (numbersArray: string[]) => {
  debugger;
  return numbersArray.slice(index);
};

const reverse = (numbersArray: string[]) => {
  debugger;
  return numbersArray.slice(0).reverse();
};

const compose = (f: ComposeFn) => (g: ComposeFn) => (x: string[]) => {
  debugger;
  return f(g(x));
};

const not = (value: boolean) => {
  debugger;
  return !value;
};
const splitArrayByAmount = (amount: number) => (
  numbersArray: string[]
): unknown[] => {
  debugger;
  return isEmpty(numbersArray)
    ? []
    : [
        take(amount)(numbersArray),
        ...splitArrayByAmount(amount)(drop(amount)(numbersArray)),
      ];
};

// convertToEnglish :: (Number a, String a) => a -> String
const convertToEnglish = (numberToConvert: number | string): string => {
  const hundredsMap: string[] = [
    '',
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
    '',
    '',
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
    '',
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

  const makeStringGroups = ([ones, tens, huns]: string[]) => {
    return [
      toNumber(huns) === 0 ? '' : `${hundredsMap[huns]} hundred `, // Build hundreds
      toNumber(ones) === 0
        ? tensMap[tens]
        : (tensMap[tens] && tensMap[tens] + '-') || '', // Build tens
      hundredsMap[tens + ones] || hundredsMap[ones], // Build ones
    ].join('');
  };

  const validateThousands = (group: string, i: string) => {
    debugger;
    return group === '' ? group : `${group} ${thousandsMap[i]}`;
  };

  if (typeof numberToConvert === 'number') {
    debugger;
    return convertToEnglish(String(numberToConvert));
  } else if (numberToConvert === '0') {
    debugger;
    return 'zero';
  }

  debugger;
  return (
    // Convert string to array -> Reverse the array -> split the array in three parts
    // Eg. [5, 4, 3, 2, 1] --> [5, 4, 3], [2, 1]]
    compose(splitArrayByAmount(3))(reverse)(array(numberToConvert))
      // Build words groups --> [1, 2, 3] ->  ['One hundred' and twenty-three]
      .map(makeStringGroups)
      .map(validateThousands)
      .filter(compose(not)(isEmpty))
      .reverse()
      .join(' ')
  );
};

export default convertToEnglish;
