
Template.eventsList.helpers({
    events: function() {
        var currDate = new Date();
        currDate.setDate(currDate.getDate()-1);
        console.log(currDate);
        return Events.find(
            {eventStartTime: {$gt: currDate}},
            {sort: { eventStartTime: 1 }}
        );
    },
    options: function()
    {
        return {
                defaultView: 'basicWeek'
        };
    }
});

Template.eventsList.rendered = function()
{
	//Fires once the page is rendered.
	myCursor = Events.find();
	var myEvents = [];
	myCursor.forEach(function(currentEvent) {
		var bandName = currentEvent.eventBandName;
		var venueName = currentEvent.eventVenueName;
		var eventTitle = bandName + " @ " + "\n" + venueName;

		var tempEvent = {
			title: eventTitle,
			start: moment(currentEvent.eventStartTime),
			allDay: true
		}
		$('#fullCalendar').fullCalendar('renderEvent',tempEvent,true);
	});



}
