Template.userEdit.helpers({
  beforeRemove: function () {
    return function (collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete user: "' + doc.userName + '"?')) {
        this.remove();
        Router.go('usersList');
      }
    };
  }
});
