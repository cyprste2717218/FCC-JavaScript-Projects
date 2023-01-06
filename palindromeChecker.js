function palindrome(str) {
    const reg = /[^A-Za-z0-9]/g;

    let newString = str.replace(reg, "");
    newString = newString.toLowerCase();

    let reverseString = "";

    for (let i = newString.length - 1; i >= 0; i--) {
        reverseString += newString[i];
    }
    
    if (newString == reverseString) {
      return true;
    } else {
      return false;
    }
    
}

