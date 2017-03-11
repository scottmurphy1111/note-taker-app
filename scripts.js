(function() {
  var app = {

    init: function() {
      var addButton = document.getElementById('add-btn');
      addButton.addEventListener('click', app.createNote);
    },
    createNote: function() {
      var title = document.getElementById('title'),
      message = document.getElementById('message'),
      color = document.getElementById('color');
      note = new Object();

      if(!title.value || !message.value) {
        //TODO add error
        //alert('Must add values to Add Note');
        return;
      } else {
        note.title = title.value;
        note.message = message.value;
        note.color = color.value;

        app.addNote(note);
      }
    },
    addNote: function(note) {
      var notes = document.getElementById('notes'),
      li = document.createElement('li'),
      title = document.createElement('span'),
      message = document.createElement('span');

      title.className = 'note-title';
      title.innerHTML = note.title;

      message.className = 'note-message';
      message.innerHTML = note.message;
      
      li.className = note.color;

      li.appendChild(title);
      li.appendChild(message);

      notes.appendChild(li);
    },
    editNote: function(note) {
      //TODO
    },
    deleteNote: function(note) {
      //TODO
    }
  };

  app.init();

})();