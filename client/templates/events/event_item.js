var DateFormats = {
       short: "h:mm a",
       long: "MMMM Do YYYY, h:mm a"
};

Template.registerHelper("formatStartTime", function(eventStartTime, format) {
  if (moment) {
    // can use other formats like 'lll' too
    format = DateFormats[format] || format;
    return moment(eventStartTime).format(format);
  }
  else {
    return eventStartTime;
  }
});

Template.registerHelper("formatStopTime", function(eventStopTime, format) {
  if (moment) {
    // can use other formats like 'lll' too
    format = DateFormats[format] || format;
    return moment(eventStopTime).format(format);
  }
  else {
    return eventStopTime;
  }
});

Template.eventItem.events({
    'click .genpdf': function () {


    var evnt = Events.findOne(this._id);
    var band = Bands.findOne({bandName: evnt.eventBandName});
    var venue = Venues.findOne({venueName: evnt.eventVenueName});
    var pdfCreatedDate = new Date();
    var image = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMdaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzExMSA3OS4xNTgzMjUsIDIwMTUvMDkvMTAtMDE6MTA6MjAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA5MUQyREVCRkZCNDExRTY5RDZFQTc3OEY5N0MzRTc0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA5MUQyREVBRkZCNDExRTY5RDZFQTc3OEY5N0MzRTc0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iMkM5NDFENUY2Qjc4NzkzOUEwRDA2MkUwOTY4QTA1MDIiIHN0UmVmOmRvY3VtZW50SUQ9IjJDOTQxRDVGNkI3ODc5MzlBMEQwNjJFMDk2OEEwNTAyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+0ASFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAPHAFaAAMbJUccAgAAAgACADhCSU0EJQAA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";

    var height = 64;
    var offset6 = 6;
    var offset4 = 4;
    var sigHeight;
    var doc = new jsPDF();
    var margin = 0.5;
    // set properties on the document
    doc.setProperties({
    	title: 'The Apollo Agency Event Contract',
    	subject: 'This PDF represents a contract between a band, a venue, and an agency for an event.',
    	author: 'The Apollo Agency',
    	keywords: 'generated, javascript, web 2.0, ajax',
    	creator: 'Cid'
    });
    doc.setDrawColor(0, 255, 0);

    doc.setFontSize(22);
    doc.addImage(image, 'JPEG',80, 20);
    doc.setFontSize(18);
    doc.text(20, height, 'Booking Agreement');
    height = height + offset6;
    doc.setFontSize(12);
    doc.text(20, height, 'This contract entered into on the date of ' + moment(pdfCreatedDate).format('MMMM Do YYYY') + ' is for the personal services ');
    height = height + offset6;
    doc.text(20, height, 'of the listed performer for the performance described below. It indicates that');
    height = height + offset6;
    doc.text(20, height, 'the undersigned purchaser, ' + venue.venueName );
    height = height + offset6;
    doc.text(20, height, 'the undersigned performer, ' + band.bandName );
    height = height + offset6;
    doc.text(20, height, 'and The Apollo Agency (hereafter referred to as AGENT)');
    height = height + offset6;
    doc.text(20, height, 'agree and contract as follows: ');
    height = height + offset4;
    doc.text(20, height, ' ');
    height = height + offset6;
    doc.text(20, height, '1. Name of Musician or Band: ' + band.bandName);
    height = height + offset6;
    doc.text(20, height, '2. Number of Musicians: ' + band.bandNumberMusicians);
    height = height + offset6;
    doc.text(20, height, '3. Name and Address of Place of Performance:' );
    height = height + offset6;
    doc.text(26, height, venue.venueName );
    height = height + offset6;
    doc.text(26, height, venue.venueAddress.street );
    height = height + offset6;
    if(venue.venueAddress.street2 != 'undefined'){
        doc.text(26, height, venue.venueAddress.street );
    }
    else {
        doc.text(26, height, venue.venueAddress.street + ' - ' +  venue.venueAddress.street2 );
    };
    height = height + offset6;
    doc.text(26, height, venue.venueAddress.city + ', ' + venue.venueAddress.state + ', ' + venue.venueAddress.postalCode);
    height = height + offset6;
    doc.text(20, height, '4. Date and Time of Performance: ' + moment(evnt.eventStartTime).format('MMMM Do YYYY, h:mm a') + ' until ' + moment(evnt.eventStopTime).format('h:mm a'));
    height = height + offset6;
    doc.text(20, height, '5. Wage and Deposit Agreed Upon: $' + evnt.eventBandPayment);
    height = height + offset6;
    doc.text(20, height, '6. After the performance, payment is to be made to the following:');
    height = height + offset6;
    doc.text(26, height, '(in either U.S. currency or certified check) ' + band.bandContactName);
    height = height + offset6;
    doc.text(20, height, '7. Additional Terms:');
    height = height + offset6;
    doc.text(26, height, 'PA: ' + evnt.eventPaProvided);
    height = height + offset6;
    doc.text(26, height, 'Food & Beverage Tab: ' + evnt.eventTabProvided);
    height = height + offset6;
    doc.text(26, height, 'Merchandise: ' + evnt.eventMerch);
    height = height + offset6;
    doc.text(26, height, 'Lodging: ' + evnt.eventLodging);
    height = height + offset6;
    if (evnt.showNotes != undefined) {
        var allNotes = evnt.showNotes;
        var notes1stLine = allNotes.substring(0, 60);
        var notes2ndLine = allNotes.substring(61, 120);
        doc.text(26, height, 'Notes: ' + notes1stLine);
        height = height + offset6;
    doc.text(40, height, notes2ndLine);
    height = height + offset6;
};

    doc.setFontSize(10);
    doc.text(20, height, 'This contract constitutes a complete and binding agreement between the employer and the musician(s).');
    height = height + offset4;
    doc.text(20, height, 'AGENT acts only as agent and assumes no responsibility as between the employer and the musician(s).');
    height = height + offset4;
    doc.text(20, height, 'In case of breach of this contract by Employer,');
    height = height + offset4;
    doc.text(26, height, 'the Employer agrees to pay the amount stated in Section 6 as mitigated damages,');
    height = height + offset4;
    doc.text(26, height, 'plus reasonable attorney\'s fees, court costs, and legal interest.');
    height = height + offset4;
    doc.text(20, height, ' ');
    height = height + offset4;
    doc.text(20, height, 'The persons signing for Employer and Musician(s) agree to be personally, jointly and severally liable');
    height = height + offset4;
    doc.text(26, height, 'for the terms of this contract.');
    height = height + offset4;
    doc.text(20, height, ' ');
    height = height + offset4;
    sigHeight = height;
    doc.text(20, height, 'For The Apollo Agency:');
    height = height + offset4;
    doc.text(20, height, ' ');
    height = height + offset4;
    doc.text(20, height, '________________');
    height = sigHeight;
    doc.text(80, height, 'For Purchaser:');
    height = height + offset4;
    doc.text(80, height, ' ');
    height = height + offset4;
    doc.text(80, height, '________________');
    height = sigHeight;
    doc.text(140, height, 'For Artist:');
    height = height + offset4;
    doc.text(140, height, ' ');
    height = height + offset4;
    doc.text(140, height, '________________');

    doc.save(moment(evnt.eventStartTime).format('YYYY-MM-DD') + ' - ' + evnt.eventBandName + ' at ' + evnt.eventVenueName + '.pdf');
}
});

Template.eventItem.events({
    'click .send-contract': function () {
        var evnt = Events.findOne(this._id);
        var band = Bands.findOne({bandName: evnt.eventBandName});
        var venue = Venues.findOne({venueName: evnt.eventVenueName});

        Meteor.call('logSomething',band.bandContactEmail);


       Meteor.call('sendContract',
        band.bandContactEmail,
        'booking@muscleshoalsartists.com',
        'Here is your contract',
         "Band Name: " + band.bandName + "\n" + "Event Date: " + moment(evnt.eventStartTime).format('MMMM Do YYYY, h:mm a'));


}
});
