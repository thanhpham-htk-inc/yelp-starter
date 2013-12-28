(function(window, document, undefined) {
  var EntryView = {};

  /* Renders an entry into the given $entry element. Requires the object
   * representing the active entry (activeEntryData). If this object is null,
   * picks the first existing entry. If no entry exists, this view will display
   * the CreatingEntryView. */

  EntryView.template = Handlebars.compile($('#entry-template').html());//
  EntryView.listEntries = "";
  EntryView.activeEntryData=null;

  EntryView.render = function($entry, activeEntryData) {
    // TODO
    if(activeEntryData && EntryView.activeEntryData != activeEntryData)
    {
      EntryView.activeEntryData=activeEntryData;
      $entry.html(EntryView.template({'viewing':true , 'entries': EntryView.listEntries ,'activeEntryData': EntryView.activeEntryData}));
      Util.addEventEntryView($entry);    
      var $map = $entry.find('div.map');
      GoogleMapView.render($map , activeEntryData.address);
    }
    else
    {
      EntryModel.loadAll(function(error, entries)
      {
        if(error)
        {
          alert('error');
        }
        else 
        {
          EntryView.listEntries = entries;
          if(EntryView.listEntries.length === 0 )
          {
            CreatingEntryView.render($entry);
          }
          else 
          {
            if(!activeEntryData)
            {
              activeEntryData = EntryView.listEntries[0];
            }
            EntryView.render($entry, activeEntryData)
          }
        }
      });
    }
  };

  window.EntryView = EntryView;
})(this, this.document);
