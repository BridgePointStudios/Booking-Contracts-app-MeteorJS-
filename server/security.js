Bands.permit(['insert','update','remove']).apply();
Venues.permit(['insert','update','remove']).apply();
Events.permit(['insert','update','remove']).apply();
Agents.permit(['insert','update','remove']).apply();

if (Meteor.isServer) {
  Meteor.publish("bands", function () {
    return Bands.find();
  });
   Meteor.publish("venues", function () {
    return Venues.find();
  });
  Meteor.publish("events", function () {
    return Events.find();
  });
  Meteor.publish("agents", function () {
    return Agents.find();
  });
  Meteor.publish("allUsers", function () {
    return Meteor.users.find({});
  });
}
