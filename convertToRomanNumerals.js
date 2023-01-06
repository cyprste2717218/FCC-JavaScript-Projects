function convertToRoman(num) {

  let argNum = num.toString();
  let result = "";

  if (argNum.length - 4 >= 0) {
    let newIndex = argNum.length - 4;
    if (argNum[newIndex] <= 9) {
        for (let i = 0; i < argNum[newIndex]; i++) {
          result += "M";
        }
      }
  } 
  
  if (argNum.length - 3 >= 0) {
    let newIndex = argNum.length - 3;
    if (argNum[newIndex] == 9) {
    result += "CM";
    } else if (argNum[newIndex] <= 8 && argNum[newIndex] >= 6) {

    result += "D";
    for (let i = 0; i < argNum[newIndex] - 5; i++) {
      result += "C";
    }
    
  

  } else if (argNum[newIndex] == 5) {
    result += "D";
  } else if (argNum[newIndex] == 4) {
    result += "CD";
  } else if (argNum[newIndex] <= 3) {
    for (let i = 0; i < argNum[newIndex]; i++) {
      result += "C";
    }
  }

  }
 

 if (argNum.length - 2 >= 0) {
    let newIndex = argNum.length - 2;

    if (argNum[newIndex] == 9) {
    result += "XC";
  } else if (argNum[newIndex] <= 8 && argNum[newIndex] >= 6) {

    result += "L";
    for (let i = 0; i < argNum[newIndex] - 5; i++) {
      result += "X";
    }
    
  } else if (argNum[newIndex] == 5) {
    result += "L";
  } else if (argNum[newIndex] == 4) {
    result += "XL";
  } else if (argNum[newIndex] <= 3) {
    for (let i = 0; i < argNum[newIndex]; i++) {
      result += "X";
    }
  }

  }
  
  if (argNum.length -1 >= 0) {
    let newIndex = argNum.length - 1;
    if (argNum[newIndex] == 9) {
      result += "IX";
  } else if (argNum[newIndex] <= 8 && argNum[newIndex] >= 6) {
    
      result += "V";
      for (let i = 0; i < argNum[newIndex] - 5; i++) {
        result += "I";
      }
  } else if (argNum[newIndex] == 5) {
    result += "V";
  } else if (argNum[newIndex] == 4) {
    result += "IV";
  } else if (argNum[newIndex] <= 3) {

    for (let i = 0; i < argNum[newIndex]; i++) {
      result += "I";
    }
  }
  }
  

  
  
    
  return result;
}



convertToRoman(36);