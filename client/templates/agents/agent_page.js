
Template.agentPage.helpers({
    Events: function() {
        console.log(this);
        return Events.find({eventBookingAgent: this.agentName});
    }
});
