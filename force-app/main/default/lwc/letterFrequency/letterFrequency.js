import { LightningElement, api, wire, track } from 'lwc';


export default class LetterFrequency extends LightningElement {
    @api letterFrequency;
    columns = [
        {
            label: 'Letter', 
            fieldName: 'letter', 
        }, 
        {
            label: 'Usage Frequency', 
            fieldName: 'count', 
            type: 'number', 
        }
    ];
}
