(function(window, document, undefined) {
  var CreatingEntryView = {};

  /* Renders a view to allow the user to create an entry. Requires the $entry
   * element. */
  CreatingEntryView.render = function($entry) {
    // TODO
    $entry.html(EntryView.template({'creating' : true ,'entries': null,'activeEntryData': null}))
    Util.addEventCreatingEntryView($entry);
  };

  window.CreatingEntryView = CreatingEntryView;
})(this, this.document);
