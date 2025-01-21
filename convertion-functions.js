const zeroCode = "0".charCodeAt(0);
const aCode = "a".charCodeAt(0);
const nineCode = "9".charCodeAt(0);
export function myParseIntRadix(strNum, radix) {
  let res = NaN;
  let sign = 1;
  let actualRadix = getActualRadix(radix);
  if (strNum != null && strNum != undefined && !isNaN(actualRadix)) {
    let index = 0;
    strNum = strNum.toString();
    strNum = strNum.trim();
    strNum = strNum.toLowerCase();
    ({ sign, index } = signProcessing(strNum, index, sign));
    res = convertProcessing(index, strNum, res, radix);
  }
  return (res *= sign);
}
export function myParseInt(strNum) {
  return myParseIntRadix(strNum, 10);
}
export function convertProcessing(index, strNum, res, radix) {
  if (index < strNum.length && !isNaN(getDigit(strNum[index],radix))) {
    res = 0;
    let running = true;
    while (index < strNum.length && running) {
      let digit = getDigit(strNum[index], radix);
      if (isNaN(digit)) {
        running = false;
      } else {
        res = res * radix + digit;
        index++;
      }
    }
  }
  return res;
}

export function signProcessing(strNum, index, sign) {
  if (strNum[0] == "-") {
    index++;
    sign = -1;
  } else if (strNum[0] == "+") {
    index++;
  }
  return { index, sign };
}

export function getDigit(digitStr, radix) {
  const code = digitStr.charCodeAt(0);
  const base = code > nineCode ? aCode - 10 : zeroCode;
 const res = code - base;
  return res > -1 && res < radix ? res : NaN;
}

export function myToStringFromIntNumber(number) {
  //TODO returns string presentation of the given number
  // if number has type of string, the string should contain a number matching the parseInt syntax
  // examples:
  //myToStringFromIntNumber(12.35) -> returns "12"
  //myToStringFromIntNumber("12.35") -> returns "12"
  //myToStringFromIntNumber() -> returns "" (empty string)
  //myToStringFromIntNumber(-12) -> returns "-12"
  //myToStringFromIntNumber(+12) -> return "12"
  //myToStringFromIntNum("a1") -> returns ""
  //myToStringFromInt("1a") -> returns "1"
  //Disallowed the following operations:
  //toString() using
  //constructor String
  //operator + with emty string like "" + for conversion purposes, but actual ccncatination od strings is a permitted operation
  //"" + number is disallowed but "" + string is allowed
  //"" + "1" permitted
  //"" + 1 is not so good
  // let res = "";
  // res + number % 10

  let comparingString = "0123456789";
        let result = "";
        let numArray = [];

        if (number % 10 !== 0) {
            number = Math.round(number);
        }

        while (number > 0) {
            numArray.unshift(number % 10);
            number = Math.floor(number / 10);
        }

    
        for (let i = 0; i < numArray.length; i++) {
            for (let j = 0; j < comparingString.length; j++){
                if (numArray[i] == comparingString[j]) {
                    result += comparingString[j];
                    break;
                }
            }
        }
        return result;
}
export function getActualRadix(radix) {
  let actualRadix = 10;
  if (radix !== undefined) {
    actualRadix = radix > 1 && radix < 37 ? radix : NaN;
  }
  return actualRadix;
}
//Printed ASCII table codes are from 32 (Space) to 126 (~)
function stringShift(str, shift) {
    //TODO
    //each character code inside string is increased on the shift value 'a' shifted on 3 will result character 'd'
    //'9' shifted on 2 will result ';'
    //if shifting causes exiting out of printable ASCII character there will by cycling from the begining
    //if the 'shift' is either a negative number or not a number the given string should be returned with no updating
    // stringShift("Hello", 3) -> "Khoor"
    // stringShift("~Z4", 3) -> '"]7"
}
function stringUnshift(str, unshift) {
    //TODO
    //each character code inside string is decreased on the unshift value 'd' unshifted on 3 will result character 'a'
    //';' ushifted on 2 will result '9'
    //if ushifting causes exiting out of printable ASCII character there will be cycling from the end
    //if the 'ushift' is either a negative number or not a number the given string should be returned with no updating
    // stringUnshift("Khoor", 3) -> "Hello"
    // stringUnhift("]7", 3) -> "~Z"
}