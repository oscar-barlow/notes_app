note = {};
note.returnNoteText = function(){
  return "A doubled note";
};
note.returnNoteId = function(){
  return 0;
};

note2 = {};
note2.returnNoteText = function(){
  return "A secondouble note";
};
note2.returnNoteId = function(){
  return 1;
};

long_note = {};
long_note.returnNoteText = function(){
  return "Is this overreaching arm, or is it compassion? Is this handout undeserved or just reparation?";
};
long_note.returnNoteId = function(){
  return 0;
};

noteList = {};
noteList.showNotes = function(){
  return [note];
};

noteList2 = {};
noteList2.showNotes = function(){
  return [note, note2];
};

noteList3 = {};
noteList3.showNotes = function(){
  return [];
};

noteList_4 = {};
noteList_4.showNotes = function(){
  return [long_note];
};

(function testInstantiatesWithNoteList(){
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView._noteList === noteList);
})();

(function testListNotes(){
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.listNotes() === '<ul><li><div><a href="" id="0">A doubled note</a></div></li></ul>');
})();

(function testMultipleListNotes(){
  var noteListView = new NoteListView(noteList2);
  assert.isTrue(noteListView.listNotes() === '<ul><li><div><a href="" id="0">A doubled note</a></div></li><li><div><a href="" id="1">A secondouble note</a></div></li></ul>');
})();

(function testEmptyListNotes(){
  var noteListView = new NoteListView(noteList3);
  assert.isTrue(noteListView.listNotes() === "<ul></ul>");
})();

(function testShowingOnlyFirstCharacters(){
  var noteListView = new NoteListView(noteList_4);
  assert.isTrue(noteListView.listNotes() === '<ul><li><div><a href="" id="0">Is this overreachin</a></div></li></ul>')
})();
