Agents = new Mongo.Collection('agents');

Agents.attachSchema(new SimpleSchema({
    agentName: {
        type: String,
        label: "Agent Name"
    }
}));
