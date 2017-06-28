Template.agentEdit.helpers({
  beforeRemove: function () {
    return function (collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete agent: "' + doc.agentName + '"?')) {
        this.remove();
        Router.go('agentsList');
      }
    };
  }
});
