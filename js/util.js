(function(window, document, undefined) {
  var Util = {};
  //add event in EntryView
  Util.addEventEntryView = function($entry)
  {
    var divError = $entry.find('div.error');
    // add event button new entry
    $entry.find('button.green.new').click(function()
    {
      CreatingEntryView.render($entry);
    });
    // add event button edit entry
    $entry.find('button.teal.edit').click(function()
    {
      EditingEntryView.render($entry,EntryView.activeEntryData);
    });
    // add evnt button delete entry
    $entry.find('button.red.delete').click(function()
    {
      if(confirm("Are you sure?"))
      {
        EntryModel.remove(EntryView.activeEntryData.id , function(error)
        { 
          if(error)
          {
            alert(error);          
            divError.html(error);   
          }
          else
          {
            alert("success");       
            EntryView.render($entry , null);
          } 
        });
      }
    });
    //add event select entry
    var selectEntry= $entry.find('div.dropdown').find('select');
    selectEntry.change(function()
    {
      var entryID= selectEntry.val();
      var currentIndex = EntryView.listEntries.map(function(val)
                {
                    return val.id==entryID;
                }).indexOf(true);
      var activeEntryData = EntryView.listEntries[currentIndex];
      EntryView.render($entry, activeEntryData);
    });
  };

  Util.addEventCreatingEntryView = function($entry)
  {
    var divError = $entry.find('div.error');
    // add event button add
    $entry.find('button.green.add').click(function()
    {
      var name = $entry.find('input[name="name"]').val().trim();
      var address = $entry.find('input[name="address"]').val().trim();
      var description = $entry.find('textarea[name="description"]').val();
      if(name==="")
      {
        alert("Please insert name!");
      }
      else if(address==="")
      {
        alert("Please insert address");
      }
      else if( description==="")
      {
        alert("Please insert description");
      }
      else
      {
        EntryModel.add({'name' : name , 'address' : address , 'description' : description}, 
          function(error, entry)
          {
            if(error)
            {
              alert(error);
              divError.html(error);
            }
            else 
            {
              alert("success");
              EntryView.listEntries.push(entry);
              EntryView.render($entry, entry);
            }
          });
      }
    });
  };

  Util.addEventEditingEntryView = function($entry)
  {
    var divError = $entry.find('div.error');
    // add event button update
    $entry.find('button.teal.update').click(function()
    {
      var id = $entry.find('input.id').val();
      var name = $entry.find('input[name="name"]').val().trim();
      var address = $entry.find('input[name="address"]').val().trim();
      var description = $entry.find('textarea[name="description"]').val();
      if(name==="")
      {
        alert("Please insert name!");
      }
      else if(address==="")
      {
        alert("Please insert address");
      }
      else if( description==="")
      {
        alert("Please insert description");
      }
      else
      {
        var entry= {'id' : id , 'name' : name , 'address' : address , 'description' : description};
        EntryModel.update( entry , 
          function(error)
          {
            if(error)
            {
              alert(error);              
              divError.html(error);
            }
            else 
            {
              alert("success");             
              EntryView.render($entry, null);
            } 
          });
      }
    });

  };

  window.Util = Util;
})(this, this.document);
