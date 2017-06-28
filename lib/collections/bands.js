Bands = new Mongo.Collection('bands');


Bands.attachSchema(new SimpleSchema({
    bandName: {
        type: String,
        label: "Band Name"
    },
        bandContactName: {
            type: String,
            label: "Band Contact Name"
        },
        bandContactPhone: {
            type: String,
            label: "Band Contact Phone"
        },
        bandContactEmail: {
            type: String,
            regEx: SimpleSchema.RegEx.Email,
            label: "Band Contact Email"
        },
        bandNumberMusicians: {
            type: String,
            label: "Number of Musicians"
        },
        bandBio: {
            type: String,
            label: "Bio of Band"
        },
        bandAddress: {
           type: Object
         },
             'bandAddress.street': {
               type: String,
               label: "Band Street Address",
               optional: true
             },
             'bandAddress.street2': {
               type: String,
               label: "Band Street Address 2 (Optional)",
               optional: true
             },
             'bandAddress.city': {
               type: String,
               label: "Band City"
             },
             'bandAddress.state': {
               type: String,
               allowedValues: ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],
               autoform: {
                 afFieldInput: {
                   firstOption: "(Select a State)"
                 }
               }
             },
             'bandAddress.postalCode': {
               type: String,
               regEx: SimpleSchema.RegEx.ZipCode,
               label: "Band ZIP Code"
                }
}));
Bands.friendlySlugs('bandName');
