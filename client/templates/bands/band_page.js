Template.bandPage.helpers({
    Events: function() {
    	//Make a global variable to hold band events
    	thisBandEvents = GetBandEvents(this.bandName);

        return Events.find({eventBandName: this.bandName});

    },

    bandRevenueCollection: function()
    {
    	return GetAllRevenueForBand(this.bandName);
    },

//**RUSS this settings is not connected to the function call that runs the rest of this pagecode? it calls a named settings and this isn't names?
    options: function(){
    	return {
    		rowsPerPage: 12,
    		showFilter: true,
    		fields: [
    			{ key:'Month'},
				{ key: 'Subtotal'}
				]
    	};
    }

});

function GetBandEvents(mBandName)
{
	myCursor = Events.find({eventBandName: mBandName});

	var bandEvents = [];

	myCursor.forEach(function(currentEvent)
	{
		var bandName = currentEvent.eventBandName;
		var venueName = currentEvent.eventVenueName;
		var eventTitle = bandName + " @ " + "\n" + venueName;

		var tempEvent = {
			title: eventTitle,
			start: moment(currentEvent.eventStartTime),
			allDay: true
		};
		bandEvents.push(tempEvent);
	});
	return bandEvents;

}


Template.bandPage.rendered = function()
{
	//Fires once the page is rendered.

    	thisBandEvents.forEach(function(tempEvent)
    	{
    		AddEventToCalendar(tempEvent);
    	});
};

function AddEventToCalendar(eventObject)
{
	$('#bandCalendar').fullCalendar('renderEvent',eventObject,true);
}

function GetAllRevenueForBand(mBandName)
{
	//Months are in the format YYYY-MM e.g. 2012-08
	var allBandEvents = Events.find({eventBandName: mBandName});
	var associativeRev = {};
    var amountDue = {};
	//List of all events for this band
	allBandEvents.forEach(function(currentEvent)
	{
		//date is a native Javascript Date object.
		var date = currentEvent.eventStartTime;
		var dateString = moment(date).format('YYYY-MM');
		var dateAmount = 0;
		if (associativeRev[dateString] == undefined)
		{
			associativeRev[dateString] = 0;
		}
		associativeRev[dateString] += Number(currentEvent.eventBandPayment);
	});

	var tableCollection = [];
	for (var key in associativeRev)
	{
		tableCollection.push({Month: key,'Total Gig Income':  accounting.formatMoney(associativeRev[key]),'Amount Due to MSAU': accounting.formatMoney(associativeRev[key]/10)});

	}

	return tableCollection;
}
