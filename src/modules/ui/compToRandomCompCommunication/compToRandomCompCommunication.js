import { LightningElement } from 'lwc';
import { compToRandomCompCommunicationCode } from './compToRandomCompCommunicationCode';
export default class CompToCompRandomCommunication extends LightningElement {
    get getPubSub() {
        return compToRandomCompCommunicationCode.pubsub;
    }
    get adjacentOneHtml() {
        return compToRandomCompCommunicationCode.adjacentOneHtml;
    }
    get adjacentOneJs() {
        return compToRandomCompCommunicationCode.adjacentOneJs;
    }
    get adjacentOneCss() {
        return compToRandomCompCommunicationCode.adjacentOneCss;
    }
    get adjacentTwoHtml() {
        return compToRandomCompCommunicationCode.adjacentTwoHtml;
    }
    get adjacentTwoJs() {
        return compToRandomCompCommunicationCode.adjacentTwoJs;
    }
    get adjacentTwoCss() {
        return compToRandomCompCommunicationCode.adjacentTwoCss;
    }
    get parentOneHtml() {
        return compToRandomCompCommunicationCode.parentOneHtml;
    }
    get parentOneJs() {
        return compToRandomCompCommunicationCode.parentOneJs;
    }
}
