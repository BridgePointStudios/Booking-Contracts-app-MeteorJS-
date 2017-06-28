Template.venuePage.helpers({
    Events: function() {
        console.log(this);
        return Events.find({eventVenueName: this.venueName});
    }
});
