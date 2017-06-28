Template.eventEdit.helpers({
  beforeRemove: function () {
    return function (collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete event: "' + doc.eventTitle + ' at ' + doc.eventBandName
      + ' on ' + doc.eventDate + ' at ' + doc.eventStartTime + '"?')) {
        this.remove();
        Router.go('eventsList');
      }
    };
  }
});
