const { expect } = require("chai")
const { substitution } = require("../src/substitution")

describe("Substitution() test - Trevon", () => {
    //-----------------------------------------------------------------------------
describe("error handling", () => {
    it("if alphabet is missing return false", () => {
      const word = "substitute"
      const actual = substitution(word)
      expect(actual).to.be.false
         })

    it("if sub alphabet is not 26 chars, returns false", () => {
      const word = "apple"
      const alphabet = "voice"
      const actual = substitution(word, alphabet)
      expect(actual).to.be.false
        })

    it("does not contain unique characters, returns false", () => {
      const word = "apple"
      const alphabet = "xyzxyzxyzxyzxyzxyzxyzxyzxy"
      const actual = substitution(word, alphabet)
      expect(actual).to.be.false
        })
    })
//-----------------------------------------------------------------------------

  describe("encodes messages", () => {
    it("encodes a message by using input alphabet", () => {
      const word = "apple"
      const alphabet = "asdfghjklqwertyuiopzxcvbnm"
      const actual = substitution(word, alphabet)
      const expected = "auueg"

      expect(actual).to.equal(expected)
        })
    it("should keep spaces", () => {
      const word = "my apple"
      const alphabet = "treqwyuiopfasdg.jhklmnbvcx"
      const actual = substitution(word, alphabet)
      const expected = "sc t..aw"

      expect(actual).to.equal(expected)
        })
    it("works with any unique character", () => {
        const word = "apple"
        const alphabet = "treqwyuiopfasdg.jhklmnbvcx"
        const actual = substitution(word, alphabet)
        const expected = "t..aw"
  
        expect(actual).to.equal(expected);
        })
  })
//-----------------------------------------------------------------------------

  describe("decodes messages", () => {
    it("decodes using the input alphabet", () => {
      const word = "auueg"
      const alphabet = "asdfghjklqwertyuiopzxcvbnm"
      const actual = substitution(word, alphabet, false)
      const expected = "apple"

      expect(actual).to.equal(expected);
        })
    it("saves spaces", () => {
        const word = "sc t..aw"
        const alphabet = "treqwyuiopfasdg.jhklmnbvcx";
        const actual = substitution(word, alphabet, false)
        const expected = "my apple"
  
        expect(actual).to.equal(expected)
        })
    it("should work with unique characters", () => {
      const word = "t..aw"
      const alphabet = "treqwyuiopfasdg.jhklmnbvcx"
      const actual = substitution(word, alphabet, false)
      const expected = "apple"

      expect(actual).to.equal(expected)
        })

    })

})