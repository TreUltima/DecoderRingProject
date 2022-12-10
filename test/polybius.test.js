const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polybius test - Trevon", () => {
    //-----------------------------------------------------------------------------

    describe("encoding a message", () => {
        it(" 'i/j' translate to 42", () => {
        const word = "laugh"
        const actual = polybius(word)
        const expected = "1311542232"

        expect(actual).to.equal(expected)
        })
    it("leaves spaces", () => {
            const word = "oh yeah"
            const actual = polybius(word)
            const expected = "4332 45511132"
    
            expect(actual).to.equal(expected);
        })
    it("encodes messages by transforming letters into number pairs", () => {
            const word = "apple"
            const actual = polybius(word)
            const expected = "1153531351"
    
            expect(actual).to.equal(expected)
        })
    })
//-----------------------------------------------------------------------------
    describe("decodes messages", () => {
        it("each pair of numbers should represent a letter", () => {
        const word = "1153531351"
        const actual = polybius(word, false)
        const expected = "apple"

        expect(actual).to.equal(expected)
            })
        it("should leave spaces as is", () => {
            const word = "4332 45511132"
            const actual = polybius(word, false)
            const expected = "oh yeah"
    
            expect(actual).to.equal(expected)
            })
        it("42 should translate to both 'i' and 'j'", () => {
            const word = "13423352"
            const actual = polybius(word, false)

            expect(actual).to.include("i")
            expect(actual).to.include("j")
            })
        it("If the length of all numbers is odd, return false", () => {
            const word = "4332 455111323"
            const actual = polybius(word, false)

            expect(actual).to.be.false
    })
  })
})