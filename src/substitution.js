// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    
    
    if(alphabet === undefined || alphabet.length != 26){
      return false
    }
    //turns alphabet into an array
    let alphaArray = alphabet.split("")
    //for unique characters
    const specialChar = alphaArray.filter((special, i, array) => array.indexOf(special) === i)
  
    if(specialChar.length !== alphaArray.length) return false;
    
    const lookUp = "abcdefghijklmnopqrstuvwxyz";
    const lookUpArray = lookUp.split("")
    //for matching letter a-z and leave spaces as is 
    let inputMatch = input.match(/[a-z]|\s/g)
    
    //for encoding message
    let encoder = inputMatch.map(char => {
      if(lookUpArray.includes(char)){
        let alphaIndex = lookUpArray.indexOf(char);
        //console.log(alphaIndex)
        return alphaArray[alphaIndex]
          
      }
      else{
        return char
      }
    })
    //console.log(encoder.join(""))
    //for decoding message
    let decoder = input.split("").map((char) => {
      
      if(alphaArray.includes(char)){
        
        let lookUpIndex = alphaArray.indexOf(char);
      
        return lookUpArray[lookUpIndex]
      } 
      else{
        return char
      }
    })
   

    return  encode ? encoder.join("") : decoder.join("")
    //console.log(result)
  

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
