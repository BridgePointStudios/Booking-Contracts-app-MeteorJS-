
Template.bandsList.helpers({
    bands: function() {
        return Bands.find({}, {sort: {bandName: 1}});
    }


});
Template.bandsList.events({
    'click #buttonDownload': function(event) {
      var nameFile = 'bands.csv';
      Meteor.call('download', function(err, fileContent) {
        if(fileContent){
          var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
          saveAs(blob, nameFile);
        }
})
}
});
