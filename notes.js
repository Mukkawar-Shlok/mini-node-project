

const fs = require('fs');

var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.txt'));
  }
  catch (err) {
    return [];
  }
}

var addingList = (title, body) => {
  var notes = fetchNotes();

  var note = {
    title,
    body
  };

  var double = notes.filter((note) => note.title === title);

  if (double.length === 0) {
    notes.push(note);

    fs.writeFileSync("notes.txt", JSON.stringify(notes));

    logNote(note);
  } else {
    console.log("Title exists.");
  }
}

var removeList = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title !== title);

  fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
}

var readList = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title === title);

  logNote(filteredNotes[0]);
}

var getList = () => {
  var notes = fetchNotes();

  notes.forEach((note) => logNote(note));
}

var logNote = (note) => {
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}


module.exports = {
  addingList,
  removeList,
  readList,
  getList
}

