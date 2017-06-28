Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        return [Meteor.subscribe('bands'),
                Meteor.subscribe('venues'),
                Meteor.subscribe('events'),
                Meteor.subscribe('agents'),
                Meteor.subscribe('allUsers')
              ];
    }
    });



Router.route('/', {name: 'landing'});

Router.route('/bands', {name: 'bandsList'});
Router.route('/addNewBand', {name: 'addNewBand'});

Router.route('/agents', {name: 'agentsList'});
Router.route('/addNewAgent', {name: 'addNewAgent'});
Router.route('/agents/:agentName', {
    name: 'agentPage',
    data: function() {return Agents.findOne({agentName: this.params.agentName});}
});
Router.route('/agents/:agentName/edit', {
    name: 'agentEdit',
    data: function() {return Agents.findOne({agentName: this.params.agentName});}
});

Router.route('/users', {name: 'usersList'});
Router.route('/users/:userName/edit', {
    name: 'userEdit',
    data: function() {return Users.findOne({userName: currentUser});}
});

Router.route('/bands/:bandName', {
    name: 'bandPage',
    data: function() {return Bands.findOne({bandName: this.params.bandName});}
});

Router.route('/bands/:bandName/edit', {
    name: 'bandEdit',
    data: function() {return Bands.findOne({bandName: this.params.bandName});}
});


Router.route('/venues', {name: 'venuesList'});
Router.route('/addNewVenue', {name: 'addNewVenue'});

Router.route('/venues/:venueName', {
    name: 'venuePage',
    data: function() {return Venues.findOne({venueName: this.params.venueName});}
});

Router.route('/venues/:venueName/edit', {
    name: 'venueEdit',
    data: function() {return Venues.findOne({venueName: this.params.venueName});}
});

Router.route('/events', {name: 'eventsList'});
Router.route('/addNewEvent', {name: 'addNewEvent'});

Router.route('/events/:_id', {
    name: 'eventPage',
    data: function() {return Events.findOne(this.params._id);}
});

Router.route('/events/:_id/edit', {
    name: 'eventEdit',
    data: function() {return Events.findOne(this.params._id);}
});

Router.route('/billing', {name: 'billingDashboard'});
