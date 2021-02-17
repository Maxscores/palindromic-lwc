function cleanSentence(sentence) {
    return sentence.replace(/[^a-zA-Z]/g,'').toLowerCase();
}

function isPalendrome(cleanedSentence) {
    let splitSentence = cleanedSentence.split('');

    let isPalendrome = true;
    // there is likely a way to do this recursively. Will come back if I have time
    while(splitSentence.length > 1 && isPalendrome) {
        if (splitSentence.pop() !== splitSentence.shift()) {
            isPalendrome = false;
        }
    }

    return isPalendrome;
}

function calculateLetterFrequency(cleanedSentences) {
    let letterFrequency = {};

    cleanedSentences.forEach(cleanedSentence => {
        cleanedSentence.split('').forEach(character => {
            if (letterFrequency[character] === undefined) {
                letterFrequency[character] = 1;
            } else {
                letterFrequency[character] += 1;
            }
        })
    });

    return letterFrequency;
}

export {cleanSentence, isPalendrome, calculateLetterFrequency};