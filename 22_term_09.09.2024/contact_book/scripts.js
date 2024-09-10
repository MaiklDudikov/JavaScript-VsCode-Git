class Contact {
    constructor(id, firstName, lastName, age, mobilePhone, homePhone) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age || '';
        this.mobilePhone = mobilePhone;
        this.homePhone = homePhone || '';
    }
}

class ContactsBook {
    constructor() {
        this.contacts = [];
        this.currentId = 1;
        this.modal = document.getElementById('modal');
        this.addContactBtn = document.getElementById('addContactBtn');
        this.saveContactBtn = document.getElementById('saveContactBtn');
        this.editContactBtn = document.getElementById('editContactBtn');
        this.deleteContactBtn = document.getElementById('deleteContactBtn');
        this.currentContact = null;

        this.addContactBtn.addEventListener('click', () => this.showModal());
        this.saveContactBtn.addEventListener('click', () => this.saveContact());
        this.editContactBtn.addEventListener('click', () => this.editContact());
        this.deleteContactBtn.addEventListener('click', () => this.deleteContact());
    }

    render() {
        const contactsList = document.getElementById('contacts-list');
        contactsList.innerHTML = '';

        this.contacts.forEach(contact => {
            const contactDiv = document.createElement('div');
            contactDiv.classList.add('contact');
            contactDiv.innerHTML = `
                <div class="contact-info">
                    <strong>${contact.firstName} ${contact.lastName}</strong><br>
                    Возраст: ${contact.age}<br>
                    Моб.телефон: ${contact.mobilePhone}<br>
                    Дом.телефон: ${contact.homePhone}
                </div>
                <div class="contact-buttons">
                    <button onclick="contactsBook.showEditContact(${contact.id})">✏</button>
                    <button onclick="contactsBook.showDeleteContact(${contact.id})">✖</button>
                </div>
            `;
            contactsList.appendChild(contactDiv);
        });
    }

    showModal(contact = null) {
        this.modal.classList.remove('hidden');
        if (contact) {
            document.getElementById('firstName').value = contact.firstName;
            document.getElementById('lastName').value = contact.lastName;
            document.getElementById('age').value = contact.age;
            document.getElementById('mobilePhone').value = contact.mobilePhone;
            document.getElementById('homePhone').value = contact.homePhone;
        } else {
            document.getElementById('firstName').value = '';
            document.getElementById('lastName').value = '';
            document.getElementById('age').value = '';
            document.getElementById('mobilePhone').value = '';
            document.getElementById('homePhone').value = '';
        }
    }

    hideModal() {
        this.modal.classList.add('hidden');
    }

    saveContact() {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const age = document.getElementById('age').value;
        const mobilePhone = document.getElementById('mobilePhone').value;
        const homePhone = document.getElementById('homePhone').value;

        if (!firstName || !lastName || !mobilePhone) {
            alert('Пожалуйста, заполните обязательные поля');
            return;
        }

        const newContact = new Contact(this.currentId++, firstName, lastName, age, mobilePhone, homePhone);
        this.contacts.push(newContact);
        this.hideModal();
        this.render();
    }

    showEditContact(id) {
        const contact = this.contacts.find(c => c.id === id);
        this.currentContact = contact;
        this.saveContactBtn.classList.add('hidden');
        this.editContactBtn.classList.remove('hidden');
        this.deleteContactBtn.classList.add('hidden');
        this.showModal(contact);
    }

    editContact() {
        this.currentContact.firstName = document.getElementById('firstName').value;
        this.currentContact.lastName = document.getElementById('lastName').value;
        this.currentContact.age = document.getElementById('age').value;
        this.currentContact.mobilePhone = document.getElementById('mobilePhone').value;
        this.currentContact.homePhone = document.getElementById('homePhone').value;

        this.hideModal();
        this.render();
    }

    showDeleteContact(id) {
        const contact = this.contacts.find(c => c.id === id);
        this.currentContact = contact;
        this.saveContactBtn.classList.add('hidden');
        this.editContactBtn.classList.add('hidden');
        this.deleteContactBtn.classList.remove('hidden');
        this.showModal(contact);
    }

    deleteContact() {
        this.contacts = this.contacts.filter(c => c.id !== this.currentContact.id);
        this.hideModal();
        this.render();
    }
}

const contactsBook = new ContactsBook();
contactsBook.render();
