import { LightningElement, track } from 'lwc';
import {cleanSentence, isPalendrome, calculateLetterFrequency} from 'c/sentenceUtils';

export default class SentenceReader extends LightningElement {
    @track
    palindromeSentences = [];

    @track
    letterFrequency;

    handleFilesChange(event) {
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

