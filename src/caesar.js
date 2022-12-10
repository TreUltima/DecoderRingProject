// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const alphabet = alpha.split("")
    if (encode === false) {
       shift = -shift 
      }
    if (!shift || shift === 0 || shift >= alphabet.length || shift <= -alphabet.length) return false;
    const inputLower = input.toLowerCase();
    let msg = "";
      //Loop input through alphabet to code messages
     for (let i = 0; i < inputLower.length; i++){
        let idx = inputLower[i]
        if (!alphabet.includes(idx)){msg += idx}
        //Loop alphabet
        for(let i = 0; i < alphabet.length; i++){
            if (idx === alphabet[i]){
              //For shifting at end of alphabet
              if(i + shift >= alphabet.length){msg += alphabet[(i + shift) - alphabet.length]}
              //for shifting at the beginning of alphabet
              else if(i + shift < 0){msg += alphabet[(i + shift) + 26]}
              else{msg += alphabet[i + shift]}
            }
          }
      } 
    return msg
    
  }
    


  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
