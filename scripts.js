(function() {

  var app = {

    errorDisplay: document.getElementById('error'),
    title: document.getElementById('title'),
    message: document.getElementById('message'),
    color: document.getElementById('color'),
    addButton: document.getElementById('add-btn'),
    deleteButton: document.querySelector('.delete'),
    editButton: document.querySelector('.edit'),
    notes: document.getElementById('notes'),

    init: function() {
      app.title.addEventListener('focus', app.clearError);
      app.message.addEventListener('focus', app.clearError);
      app.addButton.addEventListener('click', app.createNote);

      app.deleteButton.addEventListener('click', app.deleteNote);
      app.editButton.addEventListener('click', app.editNote);

    },
    clearError: function() {
      app.title.classList.remove('is-empty');
      app.message.classList.remove('is-empty');
      app.errorDisplay.innerHTML = '';
    },
    createNote: function() {
      note = new Object();

      if(!app.title.value || !app.message.value) {
        if(!app.title.value) {
          app.title.classList.add('is-empty');  
        }
        if(!app.message.value) {
          app.message.classList.add('is-empty');
        }
        
        app.errorDisplay.innerHTML = '<span>*Values required</span>';
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
      editBtn = document.createElement('span'),
      title = document.createElement('span'),
      message = document.createElement('span'),
      footer = document.createElement('footer');

      deleteBtn.className = 'delete';
      deleteBtn.innerHTML = '<i class="fa fa-trash-o"></i>';
      deleteBtn.addEventListener('click', app.deleteNote);

      title.className = 'note-title';
      title.innerHTML = note.title;

      message.className = 'note-message';
      message.innerHTML = note.message;

      editBtn.className = 'edit';
      editBtn.innerHTML = '<i class="fa fa-pencil-square-o"></i> Edit';
      editBtn.addEventListener('click', app.editNote);

      footer.appendChild(editBtn);
      
      li.className = note.color;

      li.appendChild(deleteBtn);
      li.appendChild(title);
      li.appendChild(message);
      li.appendChild(footer);

      app.notes.appendChild(li);
    },
    editNote: function(note) {
      console.log('test');
    },
    deleteNote: function() {
      this.parentNode.remove();
    }
  };

  app.init();

})();