
Template.venuesList.helpers({
    venues: function() {
        return Venues.find({}, {sort: {venueName: 1}});
    }
});
