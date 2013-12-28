(function(window, document, undefined) {
  var EntryModel = {};

  var ENTRIES_URL = 'http://callbackjs.me:4155/entries';
  var STATUS_OK = 200;

  /* Load all entries from the server. Call successCallback on success,
   * and errorCallback on error.
   *
   * Calls: callback(error, entries)
   *  error -- the error that occurred or NULL if no error occurred
   *  entries -- an array of entries
   */
  EntryModel.loadAll = function(callback) {
    // TODO
    var request = new XMLHttpRequest();

    request.addEventListener('readystatechange', function(event)
    {
      if (this.readyState === 4 )
      {
        if(this.status === STATUS_OK )
        {
          callback(null, JSON.parse( this.responseText));
        } 
        else 
        {
          callback( this.responseText , null );
        }
      }
    });

    request.open('GET', ENTRIES_URL, true);
    request.send();
  };

  /* Add the given entry to the list of entries. The entry must *not* have
   * an id associated with it.
   *
   * Calls: callback(error, entry)
   *  error -- the error that occurred or NULL if no error occurred
   *  entry -- the entry added, with an id attribute
   */
  EntryModel.add = function(entryAdd, callback) {
    // TODO
    var request = new XMLHttpRequest();

    request.addEventListener('readystatechange', function(event)
    {
      if (this.readyState === 4 )
      {
        if(this.status === STATUS_OK )
        {
          callback(null, JSON.parse( this.responseText));
        } 
        else 
        {
          callback( this.responseText , null );
        }
      }
    });
    var stringRequest = {
        name : entryAdd.name,
        description : entryAdd.description,
        address : entryAdd.address
      };

    request.open('POST', ENTRIES_URL , true);
    request.setRequestHeader("Content-Type",'application/json');
    request.send(JSON.stringify(stringRequest));
  };

  /* Update the given entry. The entry must have an id attribute that
   * identifies it.
   *
   * Calls: callback(error)
   *  error -- the error that occurred or NULL if no error occurred
   */
  EntryModel.update = function(entry, callback) {
    // TODO
    var request = new XMLHttpRequest();

    request.addEventListener('readystatechange', function(event)
    {
      if (this.readyState === 4 )
      {
        if(this.status === STATUS_OK )
        {
          callback(null);
        } 
        else 
        {
          callback( this.responseText);
        }
      }
    });
    var stringRequest = {
        name : entry.name,
        description : entry.description,
        address : entry.address
      };

    request.open('POST', ENTRIES_URL + "/" + entry.id , true);    
    request.setRequestHeader("Content-Type",'application/json');
    request.send(JSON.stringify(stringRequest));
  };

  /* Deletes the entry with the given id.
   *
   * Calls: callback(error)
   *  error -- the error that occurred or NULL if no error occurred
   */
  EntryModel.remove = function(id, callback) {
    var request = new XMLHttpRequest();

    request.addEventListener('readystatechange', function(event)
    {
      if (this.readyState === 4 )
      {
        if(this.status === STATUS_OK )
        {
          callback(null);
        } 
        else 
        {
          callback( this.responseText);
        }
      }
    });

    request.open('POST', ENTRIES_URL + "/"+ id +"/delete" , true);
    request.send();
  };

  window.EntryModel = EntryModel;
})(this, this.document);
