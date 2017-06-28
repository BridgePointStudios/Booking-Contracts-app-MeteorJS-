Template.bandEdit.helpers({
  beforeRemove: function () {
    return function (collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete band: "' + doc.bandName + '"?')) {
        this.remove();
        Router.go('bandsList');
      }
    };
  }
});
