const { expect } = require("chai")
const { caesar } = require("../src/caesar")

describe("Caesar test - Trevon", () =>{
  //-----------------------------------------------------------------------------
  describe("error handling", () => {
    it("returns false if shift is 0", () => {
      const shift = 0
      const word = "hello world"
      const actual = caesar(word, shift)

      expect(actual).to.be.false
      })

    it("if shift is above 25, returns false", () => {
      const shift = 26;
      const word = "hello world";
      const actual = caesar(word, shift)

      expect(actual).to.be.false;
      })

    it("if shift is less than -25", () => {
      const shift = -26;
      const word = "hello world"
      const actual = caesar(word, shift)

      expect(actual).to.be.false
      })
  
//-----------------------------------------------------------------------------
  describe("encodes message", () => {
    it("encodes by shifting", () => {
      const shift = 3;
      const word = "apple";
      const actual = caesar(word, shift)
      const expected = "dssoh"

      expect(actual).to.equal(expected)
      })
    it("deals with letters at the end of alphabet", () => {
      const shift = 3;
      const word = "hello world";
      const actual = caesar(word, shift);
      const expected = "khoor zruog"

      expect(actual).to.equal(expected)
      })
    it("for shifting left, using negative shift", () => {
      const shift = -3;
      const message = "hello world";
      const actual = caesar(message, shift)
      const expected = "ebiil tloia"

      expect(actual).to.equal(expected)
      })
    it("leaves spaces as is", () => {
      const shift = 3;
      const word = "a word.";
      const actual = caesar(word, shift)
      const expected = "d zrug."

      expect(actual).to.equal(expected)
      })

    it("Ignore capital letters", () => {
      const shift = 3;
      const word = "A Word";
      const actual = caesar(word, shift)
      const expected = "d zrug"

      expect(actual).to.equal(expected)
      })
   })
//-----------------------------------------------------------------------------
  describe("decoding a message", () => {
    it("shifts in the opposite direction to decode", () => {
      const word = "dssoh";
      const shift = 3;
      const actual = caesar(word, shift, false)
      const expected = "apple"

      expect(actual).to.equal(expected)
      })  
    it("handle letters at the end of alphabet", () => {
      const word = "khoor zruog";
      const shift = 3;
      const actual = caesar(word, shift, false)
      const expected = "hello world"

      expect(actual).to.equal(expected)
     })
    it("left shift, with negative shift", () => {
      const word = "ebiil tloia";
      const shift = -3;
      const actual = caesar(word, shift, false)
      const expected = "hello world"

      expect(actual).to.equal(expected)
      })
    it("handle letters at the end of alphabet", () => {
      const word = "khoor zruog";
      const shift = 3;
      const actual = caesar(word, shift, false)
      const expected = "hello world"

      expect(actual).to.equal(expected)
      })
    it("leaves symbols and spaces", () => {
      const message = "d zrug.";
      const shift = 3;
      const actual = caesar(message, shift, false)
      const expected = "a word."

      expect(actual).to.equal(expected)
      })
    })
  })
})