export const convertToRoman = (number) => {
  if (isNaN(number)) return 'Not a number'
  if(number > 10000) return 'Number too high [Valid Number "1 - 10000"]'
  if(number < 1) return 'Number too low [Valid Number "1 - 10000"]'
  
  const romanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XV: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let roman = '';

  for (let key in romanNumbers) {
    while (number >= romanNumbers[key]) {
      roman += key;
      number -= romanNumbers[key];
    }
  }

  return roman;
};