// Contact.js
export class Contact {
    constructor(id, firstName, lastName, age, mobilePhone, homePhone) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age || '';
        this.mobilePhone = mobilePhone;
        this.homePhone = homePhone || '';
    }
}
