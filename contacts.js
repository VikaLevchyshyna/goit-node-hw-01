const fs = require("fs").promises;
const path = require("path");
const shortId = require("uuid");
const contacts = require("./db/contacts.json");
const contactsPath = path.join(__dirname, "./db/contacts.json");

const updateContacts = async (newContacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(newContacts));
};

async function listContacts() {
  return (data = JSON.parse(await fs.readFile(contactsPath, "utf-8")));
}

function getContactById(contactId) {
  const oneContact = contacts.find((contact) => contact.id === contactId);
  console.log(oneContact);
}

async function addContact(name, email, phone) {
  const id = shortId.v4();
  const arg = { id, name, email, phone };
  const add = contacts.push(arg);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return contacts;
}

async function removeContact(contactId) {
  const rmContact = contacts.findIndex((item) => item.id === contactId);
  if (rmContact === -1) null;
  contacts.splice(rmContact, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return contacts;
}

module.exports = { listContacts, getContactById, addContact, removeContact };
