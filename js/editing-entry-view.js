(function(window, document, undefined) {
  var EditingEntryView = {};

  /* Renders a view to allow the user to edit an entry. Requires the $entry
   * element and an object representing the active entry. */
  EditingEntryView.render = function($entry, activeEntryData) {
    $entry.html(EntryView.template({'editing': true, 'entries': null ,'activeEntryData': EntryView.activeEntryData}));
    Util.addEventEditingEntryView($entry);
  };

  window.EditingEntryView = EditingEntryView;
})(this, this.document);
