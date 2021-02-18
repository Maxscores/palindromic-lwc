import { LightningElement, track } from 'lwc';
import {cleanSentence, isPalendrome, calculateLetterFrequency} from 'c/sentenceUtils';

export default class SentenceReader extends LightningElement {
    @track fileProcessed = false;
    @track
    palindromeSentences = [];

    @track
    letterFrequency;

    handleFileUpload(event) {
        this.fileProcessed = false;
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
                this.fileProcessed = true;
            })
            .catch(e => {
                console.error(e);
                this.fileProcessed = false;
            })
    }
}

