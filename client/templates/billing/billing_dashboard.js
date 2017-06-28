Template.billingDashboard.helpers({
    msauRevenueCollection: function()
    {
    	return GetAllRevenueForMSAU(this);
    },
    months: function()
    {
    	//return a list of months

    	var allMonths = [];
    	var allEvents = Events.find();

    	allEvents.forEach(function(currentEvent)
    	{
    		var dateString = moment(currentEvent.eventStartTime).format('YYYY-MM');

    		//First, add all months to the allMonths array and initialize empty objects for each month
    		//Only add month if its not in the list
    		if (allMonths.indexOf(dateString) <= -1)
    		{
    			allMonths.push(dateString);
    		}

    	});

		return allMonths;

    },
    billingForMonth: function()
    {

    	alert("test");
    }

});
function GetAllRevenueForMSAU(currentMonth)
{

	//Months are in the format YYYY-MM e.g. 2012-08

	var allBandEvents = Events.find();

	var associativeRev = {};

    var amountDue = {};
	//List of all events for all bands
	allBandEvents.forEach(function(currentEvent)
	{
        var billingBandName = currentEvent.eventBandName;

		//date is a native Javascript Date object.
		var date = currentEvent.eventStartTime;
		var dateString = moment(date).format('YYYY-MM');
		var dateAmount = 0;
		if (associativeRev[billingBandName] == undefined)
		{
			associativeRev[billingBandName] = 0;
		}
        console.log('currentMonth = ' + currentMonth);
        console.log('dateString = ' + dateString);
		if (dateString == currentMonth)
        {
             associativeRev[billingBandName] += Number(currentEvent.eventBandPayment);
        }
	});

	var tableCollection = [];

	for (var key in associativeRev)
	{
		tableCollection.push({
            BandName: key,

            'Total Gig Income':accounting.formatMoney(associativeRev[key]),
            'Amount Due to MSAU': accounting.formatMoney(associativeRev[key]/10)});

	}



	return tableCollection;
}
