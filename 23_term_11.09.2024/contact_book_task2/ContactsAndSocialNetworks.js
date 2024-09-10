// ContactsAndSocialNetworks.js
import { Contact } from './Contact.js';

export class ContactsAndSocialNetworks extends Contact {
    constructor(id, firstName, lastName, age, mobilePhone, homePhone, telegram, instagram, facebook, viber, linkedin, tiktok) {
        super(id, firstName, lastName, age, mobilePhone, homePhone);
        this.telegram = telegram || undefined;
        this.instagram = instagram || undefined;
        this.facebook = facebook || undefined;
        this.viber = viber || undefined;
        this.linkedin = linkedin || undefined;
        this.tiktok = tiktok || undefined;
    }
}
