
Template.agentsList.helpers({
    agents: function() {
        return Agents.find({}, {sort: {agentName: 1}});
    }
});
