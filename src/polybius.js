// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    
    // your solution code here
    //let noSpaces = input.split(" ").join("")
    //console.log(noSpaces)

    const lookUp = {
      "a":11, "b":21, "c":31, "d":41, "e":51, "f":12, "g":22, "h":32, "i":42, "j":42,
      "k":52, "l":13, "m":23, "n":33, "o":43, "p":53, "q":14, "r":24, "s":34, "t":44,
      "u":54, "v":15, "w":25, "x":35, "y":45, "z":55 
  }
    const reverseLookUp = {
      11:"a", 21:"b", 31:"c", 41:"d", 51:"e", 12:"f", 22:"g", 32:"h", 42:"(i/j)",
      52:"k", 13:"l", 23:"m", 33:"n", 43:"o", 53:"p", 14:"q", 24:"r", 34:"s", 44:"t",
      54:"u", 15:"v", 25:"w", 35:"x", 45:"y", 55:"z" 
  }
  
  //set coder variable to lookUp variable or reverseLookUp variable depending on if encode it true or false
  const coder = encode ? lookUp : reverseLookUp;
  //returns false if the length of the input is odd
  if(coder === reverseLookUp){
    const inputNoSpace = input.split(" ").join("")
    if(inputNoSpace.length % 2 === 1) return false
  }
  //turns input into an array, with numbers paired into double digit groups
  let inputMatch = input.match(/[0-9]{2}|[a-z]|\s/g)
  //maps a new array, that matches and returns input characters to corresponding characters in coder array and joins them to create codes 
  let result = inputMatch.map(char => coder[char] || char).join("")
  //returns results 
  return result
  


  //console.log("**************************")
  //console.log(Object.values(lookUp))
  /*
    let inputArray = inputLower.split("")
    //console.log(stringArray)
    if(encode === true){
      let encodedMsg = inputArray.map(char => {
        
          if(Object.keys(lookUp).includes(char)){
            return lookUp[char]
          }
          else{
            return char
          }
        })
        
        return encodedMsg.join("");
      }else
        { 
          let decodedMsg = inputArray.map((num, i, inputArray) => {
          
        })
        
        return decodedMsg.join("");
      } 

*/
    }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
