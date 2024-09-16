import { Contact } from './modules/Contacts.js';

export class ContactsAndSocialNetworks extends Contact {
    constructor(id, firstName, lastName, age, mobilePhone, homePhone, nicknameTelegram, nicknameInstagram, nicknameFacebook, nicknameViber, nicknameLinkedin, nicknameTiktok) {
        super(id, firstName, lastName, age, mobilePhone, homePhone);
        this.nicknameTelegram = nicknameTelegram || '';
        this.nicknameInstagram = nicknameInstagram || '';
        this.nicknameFacebook = nicknameFacebook || '';
        this.nicknameViber = nicknameViber || '';
        this.nicknameLinkedin = nicknameLinkedin || '';
        this.nicknameTiktok = nicknameTiktok || '';
    }
}
