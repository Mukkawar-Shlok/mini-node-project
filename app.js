console.log("Starting app.js");

const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if (command === "add") {
  console.log("adding note");
  notes.addingList(title, body);
} else if (command === "remove") {
  console.log("removing note");
  notes.removeList(title);
} else if (command === "read") {
  console.log("reading note");
  notes.readList(title);
} else if (command === "list") {
  console.log("listing all notes");
  notes.getList();
} else {
  console.log("Unknown command was used!");
}
