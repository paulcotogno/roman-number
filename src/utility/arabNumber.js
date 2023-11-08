export const convertToNumber = (roman) => {
    if(!/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(roman)) return 'Not a valid roman number'
    
    const map = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1,
    };
  
    const number = roman.split('');

    let result = 0;
    for (let i = 0; i < number.length; i += 1) {
      const first = map[number[i]];
      const second = map[number[i + 1]] ?? 0;
      if (first < second) {
        result += second - first;
        i += 1;
      } else {
        result += first;
      }
    }
    return result;
  };