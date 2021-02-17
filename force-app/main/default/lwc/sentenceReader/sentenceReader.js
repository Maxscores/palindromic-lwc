import { LightningElement, track } from 'lwc';
import {cleanSentence, isPalendrome, calculateLetterFrequency} from 'c/sentenceUtils';
import PALINDROMIC_SENTENCES from '@salesforce/resourceUrl/palindromicSentences';

const PALINDROMIC_SENTENCES_FORMATTED = [
    'Straw? No, too stupid a fad. I put soot on warts.',
    'She borrowed the book from him many years ago and hasn\'t yet returned it.',
    'Abstraction is often one floor above you.',
'I\’m working on a sweet potato farm.',
'There\'s an art to getting your way, and spitting olive pits across the table isn\'t it.',
'A nut for a jar of tuna.',
'Borrow or rob?',
'He always wore his sunglasses at night.',
'It\'s a skateboarding penguin with a sunhat!',
'Murder for a jar of red rum.',
'Yo, banana boy!',
'His mind was blown that there was nothing in space except space itself.',
'She was the type of girl who wanted to live in a pink house.',
'Taco cat.'
];

export default class SentenceReader extends LightningElement {
    @track
    palindromeSentences = [];

    @track
    letterFrequency;

    handleFilesChange(event) {
        console.log(event.target.files[0]);
        let fileList = event.target.files;
        fileList[0].text()
            .then(fileContent => {
                let sentences = fileContent.split('\n');
                let cleanedPalindromeSentences = [];
                sentences.forEach(sentence => {
                    let cleanedSentence = cleanSentence(sentence);
                    if (isPalendrome(cleanedSentence)) {
                        this.palindromeSentences.push(sentence);
                        cleanedPalindromeSentences.push(cleanedSentence);
                    }
                });
                this.letterFrequency = calculateLetterFrequency(cleanedPalindromeSentences);
            })
    }
}

