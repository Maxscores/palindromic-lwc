function cleanSentence(sentence) {
    return sentence.replace(/[^a-zA-Z]/g,'').toLowerCase();
}

function isPalindrome(cleanedSentence) {
    let splitSentence = cleanedSentence.split('');

    let isPalindrome = true;
    // there is likely a way to do this recursively. Will come back if I have time
    while(splitSentence.length > 1 && isPalindrome) {
        if (splitSentence.pop() !== splitSentence.shift()) {
            isPalindrome = false;
        }
    }
    
    console.log('hello');

    return isPalindrome;
}

function calculateLetterFrequency(cleanedSentences) {
    let letterFrequency = {};

    cleanedSentences.join('').split('').forEach(character => {
        if (letterFrequency[character] === undefined) {
            letterFrequency[character] = 1;
        } else {
            letterFrequency[character] += 1;
        }
    })

    return Object.keys(letterFrequency).map((key) => {
        return {'letter': key, 'count': letterFrequency[key]};
    });;
}

export {cleanSentence, isPalindrome, calculateLetterFrequency};
