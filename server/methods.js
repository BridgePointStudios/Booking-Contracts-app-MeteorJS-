Meteor.methods({
    sendContract: function( to, fromName, subject, text ) {
        check([to, fromName, subject, text], [String]);
        this.unblock();
        console.log('Attempting to send mail...');
        Email.send({
            to: to,
            from: fromName,
            subject: subject,
            text: text
        });
        console.log('Mail sent!');

    },

    logSomething: function(text) {
        console.log(text);
    },
    downloadBands: function() {
  var collection = Bands.find().fetch();
  return exportcsv.exportToCSV(collection, heading, delimiter);
}
});
