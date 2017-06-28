Template.venueEdit.helpers({
  beforeRemove: function () {
    return function (collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete venue: "' + doc.venueName + '"?')) {
        this.remove();
        Router.go('venuesList');
      }
    };
}
});
