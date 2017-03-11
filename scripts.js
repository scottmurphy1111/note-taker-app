(function() {

  var app = {

    errorDisplay: document.getElementById('error'),
    title: document.getElementById('title'),
    message: document.getElementById('message'),
    color: document.getElementById('color'),
    addButton: document.getElementById('add-btn'),
    deleteButton: document.querySelector('.delete'),
    notes: document.getElementById('notes'),

    init: function() {
      // var title = document.getElementById('title'),
      // message = document.getElementById('message'),
      // color = document.getElementById('color');
      

      console.log(app.errorDisplay);

      app.title.addEventListener('focus', app.clearError);
      app.message.addEventListener('focus', app.clearError);

      //var addButton = document.getElementById('add-btn');
      app.addButton.addEventListener('click', app.createNote);

      
      app.deleteButton.addEventListener('click', app.deleteNote);
    },
    clearError: function() {
      console.log(app.errorDisplay);
      app.errorDisplay.innerHTML = '';
    },
    createNote: function() {
      note = new Object();

      if(!app.title.value || !app.message.value) {
        //TODO add error
        //alert('Must add values to Add Note');
        
        app.errorDisplay.innerHTML = '<span>Values required</span>';
        return;
      } else {
        note.title = app.title.value;
        note.message = app.message.value;
        note.color = app.color.value;

        app.addNote(note);
      }
    },
    addNote: function(note) {
      var li = document.createElement('li'),
      deleteBtn = document.createElement('span'),
      title = document.createElement('span'),
      message = document.createElement('span');

      deleteBtn.className = 'delete';
      deleteBtn.innerHTML = 'X';
      deleteBtn.addEventListener('click', app.deleteNote);

      title.className = 'note-title';
      title.innerHTML = note.title;

      message.className = 'note-message';
      message.innerHTML = note.message;
      
      li.className = note.color;

      li.appendChild(deleteBtn);
      li.appendChild(title);
      li.appendChild(message);

      app.notes.appendChild(li);
    },
    editNote: function(note) {
      //TODO
    },
    deleteNote: function() {
      this.parentNode.remove();
    }
  };

  app.init();

})();