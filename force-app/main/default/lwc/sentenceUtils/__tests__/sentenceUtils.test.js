import {cleanSentence, isPalendrome, calculateLetterFrequency} from '../sentenceUtils';

describe('cleanSentence()', () => {
    it('should remove all non letters and normalize case', () => {
        let testSentence1 = 'abc/s are fun!';
        let result1 = 'abcsarefun';
        expect(cleanSentence(testSentence1)).toBe(result1);

        let testSentence2 = 'ABC/s ArEFu N!';
        let result2 = 'abcsarefun';
        expect(cleanSentence(testSentence2)).toBe(result2);
    })
})

describe('isPalendrome()', () => {
    it('should find palendromes of even length', () => {
        let palendrome = cleanSentence('abccba');
        expect(isPalendrome(palendrome)).toBe(true);
    }) 

    it('should find palendromes of odd length', () => {
        let palendrome = cleanSentence('abcba');
        expect(isPalendrome(palendrome)).toBe(true);
    }) 

    it('should find palendromes with various capitalization', () => {
        let palendrome = cleanSentence('AbcBa');
        expect(isPalendrome(palendrome)).toBe(true);
    }) 

    it('should find non-palendromes of even length', () => {
        let palendrome = cleanSentence('abccdba');
        expect(isPalendrome(palendrome)).toBe(false);
    }) 

    it('should find non-palendromes of odd length', () => {
        let palendrome = cleanSentence('abdca');
        expect(isPalendrome(palendrome)).toBe(false);
    }) 
})

describe('calculateLetterFrequency()', () => {
    it('should calculate normalized letter frequency', () => {
        let sentence1 = cleanSentence('aAa');
        let sentence2 = cleanSentence('Bbc');
        let result1 = {
            'a' : 3
        }
        let result2 = {
            'b' : 2,
            'c' : 1
        }

        expect(calculateLetterFrequency(sentence1)).toStrictEqual(result1);
        expect(calculateLetterFrequency(sentence2)).toStrictEqual(result2);
    })
})

