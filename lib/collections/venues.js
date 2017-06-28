Venues = new Mongo.Collection('venues');


Venues.attachSchema(new SimpleSchema({
    venueName: {
        type: String,
        label: "Venue Name"
    },
        venueContactName: {
            type: String,
            label: "Venue Contact Name"
        },
        venueContactPhone: {
            type: String,
            label: "Venue Contact Phone"
        },
        venueContactEmail: {
            type: String,
            regEx: SimpleSchema.RegEx.Email,
            label: "Venue Contact Email"
        },
        venueAddress: {
           type: Object
         },
             'venueAddress.street': {
               type: String,
               label: "Venue Street Address",
               optional: true
             },
             'venueAddress.street2': {
               type: String,
               label: "Venue Street Address 2 (Optional)",
               optional: true
             },
             'venueAddress.city': {
               type: String,
               label: "Venue City"
             },
             'venueAddress.state': {
               type: String,
               allowedValues: ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],
               autoform: {
                 afFieldInput: {
                   firstOption: "(Select a State)"
                 }
               }
             },
             'venueAddress.postalCode': {
               type: String,
               regEx: SimpleSchema.RegEx.ZipCode,
               label: "Venue ZIP Code"
             }
}));
Venues.friendlySlugs('venueName');
