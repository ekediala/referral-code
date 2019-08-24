/**
 * Generate a random referral code
 */
const generateCode = () => {
  const digits = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ];
  
  const letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  let code = '';

  for (let x = 0; x < 6; x++) {
    let index = Math.floor(Math.random() * (digits.length - 1));
    code += xters[index];
  }
  
  for (let y = 0; y < 2; y++) {
    let index = Math.floor(Math.random() * (letters.length - 1));
    code += xters[index];
  }

  return code;
};
