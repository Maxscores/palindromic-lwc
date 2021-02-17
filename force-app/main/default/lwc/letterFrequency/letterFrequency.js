import { LightningElement, api } from 'lwc';

export default class LetterFrequency extends LightningElement {
    @api letterFrequency;


    get getLetterFreqIterable() {
        if (this.letterFrequency !== undefined) {
            return Object.keys(this.letterFrequency).map((key) => {
                return {'letter': key, 'count': this.letterFrequency[key]};
            });
        }
    }
}