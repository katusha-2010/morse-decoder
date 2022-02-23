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
    // write your solution here
    let result = "";
let countArr = expr.length/10

for(let i=0; i<countArr; i++){
  let number = expr.slice(i*10, i*10 + 10 )
  if(number === '**********') {
    result += " ";
  }
  else {
    let letter = "";
    for(let k = 0; k < number.length/2; k++) {
      let symbol = number.slice(k*2, k*2+2);
      
      if(symbol === "10") {
        letter += ".";       
      } else if(symbol === "11") {
        letter += "-";
      } else {
        letter += "";
      }     
    }
    result += MORSE_TABLE[letter] 
  }  
}
return result    
}

module.exports = {
    decode
}