/*jshint esversion: 8 */
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
    '': ' ',
};

const sumbul = {
    '10': '.',
    '11': '-',
    '**': '',
    '00': '',
};

function decode(expr) {
   //let expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
    let arr = [];
    let symbolNum = expr.length / 10;
       
   for (let i = 0; i < symbolNum; i++) {  
       let sumbulArr = expr.slice(i * 10, i * 10 + 10);
       let sumbulMorse = `${sumbul[sumbulArr.slice(0, 2)]}${sumbul[sumbulArr.slice(2, 4)]}${sumbul[sumbulArr.slice(4, 6)]}${sumbul[sumbulArr.slice(6, 8)]}${sumbul[sumbulArr.slice(8)]}`;   
       arr[i] = sumbulMorse;
    }
    
    console.log(arr);
    

    arr.forEach(function(item, i, arr) {
        arr[i] = MORSE_TABLE[arr[i]];
        

    });
    console.log(arr);
    let decode = arr.join('');
    return decode;
   


    

}

module.exports = {
    decode
};