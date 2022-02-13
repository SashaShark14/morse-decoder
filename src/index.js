const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const strLength = expr.length / 10
const arrTen = new Array(strLength)
for (let i = 0, o = 0; i < strLength; ++i, o += 10) {
    arrTen[i] = expr.substr(o, 10)
  }

 const newArrTwo = arrTen.map(item => {
  const itemLength = item.length / 2
  const arrTwo = new Array(itemLength)
  for (let i = 0, o = 0; i < itemLength; ++i, o += 2) {
  arrTwo[i] = item.substr(o, 2)   
  }
 return arrTwo
})
const alfArr = newArrTwo.map((item)=> {
 const newItem = item.map(el => {
    if(el=== '00') {
          return ''
      }else if (el === '10') {
        return '.'
    } else if(el=== '11') {
        return '-'
    } else {
        return ' '
    }
    return el     
 })
 return newItem      
  });
 
 const glArr = alfArr.map(item => item.join(''))
 const morseArr = glArr.map(item => {
    let newMorse = item === undefined?  ' ' : MORSE_TABLE[item]
    return newMorse
 })

 const arr1 = morseArr.map(item => {
    if (item === undefined) {
    return ' '
  } else {
    return item
  }
 })
 return arr1.join('')
 
}

module.exports = {
    decode
}