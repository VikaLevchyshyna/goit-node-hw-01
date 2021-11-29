const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = require("yargs").argv;
const path = require("path");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.table(listContacts());
      break;

    case "get":
      console.table(getContactById(id));
      break;

    case "add":
      console.table(await addContact(name, email, phone));
      break;

    case "remove":
      console.table(await removeContact(id));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
