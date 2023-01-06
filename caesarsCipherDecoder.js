function rot13(str) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const reg = /[a-zA-z]/;
    const noReg = /[^a-zA-Z]/;
    let result = "";
    
    for (let i = 0; i < str.length; i++) {
      if (noReg.test(str[i])) {
        result += str[i];
      }
      else if ((alphabet.indexOf(str[i]) - 13 < 0) && (reg.test(str[i])))  {
        result += alphabet[25 + (alphabet.indexOf(str[i]) - 12)]
  
      } else if ((alphabet.indexOf(str[i]) - 13 >= 0) && (reg.test(str[i]))) {
        result += alphabet[alphabet.indexOf(str[i]) -13];
      } 
  
  
  
    }
  
    return result;
}
  
 