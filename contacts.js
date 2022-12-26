const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve(__dirname, "db/contacts.json");

async function listContacts() {
  try {
    const contact = await fs.readFile(contactsPath, "utf8");
    let listContacts = JSON.parse(contact);
    console.table(listContacts);
  } catch (error) {
    console.error();
  }
}

async function getContactById(contactId) {
  try {
    const contact = await fs.readFile(contactsPath, "utf8");
    let listContacts = JSON.parse(contact);
    const getContact = listContacts.find((contact) => contact.id === contactId);
    console.table(getContact);
  } catch (error) {
    console.error();
  }
}
async function removeContact(contactId) {
  try {
    const contact = await fs.readFile(contactsPath, "utf8");
    let listContacts = JSON.parse(contact);

    const newList = listContacts.filter((contact) => contact.id !== contactId);
    console.table(newList);

    const removeContact = await fs.writeFile(
      contactsPath,
      JSON.stringify(listContacts),
      "utf8"
    );
  } catch (error) {
    console.error();
  }
}

async function addContact(name, email, phone) {
  try {
    const contact = await fs.readFile(contactsPath, "utf8");
    let listContacts = JSON.parse(contact);

    let idContact = listContacts.length + 1;
    listContacts.push({
      id: idContact.toString(),
      Name: name,
      Email: email,
      Phone: phone,
    });
    console.table(listContacts);

    const addContact = await fs.writeFile(
      contactsPath,
      JSON.stringify(listContacts),
      "utf8"
    );
  } catch (error) {
    console.error();
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
