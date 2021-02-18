import {cleanSentence, isPalindrome, calculateLetterFrequency} from '../sentenceUtils';

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

describe('isPalindrome()', () => {
    it('should find palindromes of even length', () => {
        let palindrome = cleanSentence('abccba');
        expect(isPalindrome(palindrome)).toBe(true);
    }) 

    it('should find palindromes of odd length', () => {
        let palindrome = cleanSentence('abcba');
        expect(isPalindrome(palindrome)).toBe(true);
    }) 

    it('should find palindromes with various capitalization', () => {
        let palindrome = cleanSentence('AbcBa');
        expect(isPalindrome(palindrome)).toBe(true);
    }) 

    it('should find non-palindromes of even length', () => {
        let palindrome = cleanSentence('abccdba');
        expect(isPalindrome(palindrome)).toBe(false);
    }) 

    it('should find non-palindromes of odd length', () => {
        let palindrome = cleanSentence('abdca');
        expect(isPalindrome(palindrome)).toBe(false);
    }) 
})

describe('calculateLetterFrequency()', () => {
    it('should calculate normalized letter frequency', () => {
        let sentence1 = cleanSentence('aAa');
        let sentence2 = cleanSentence('Bbc');
        let result = [
            {'letter': 'a', 'count' : 3},
            {'letter': 'b', 'count' : 2},
            {'letter': 'c', 'count' : 1}
        ];

        expect(calculateLetterFrequency([sentence1, sentence2])).toStrictEqual(result);
    })
})

