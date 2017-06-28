# Booking-Contracts-app-MeteorJS-

This app was created initially for a client running a music booking agency. 

Some screenshots with brief descriptions of each page are located at http://imgur.com/a/4MFCi

He wanted to automate the process of creating a pdf contract for each event.

I was exploring MeteorJS at the time so I made the app in Meteor even though it wasn't an ideal case for the strengths of Meteor.

It has forms for data entry for bands and venues, along with lists and detail pages for those.

The app then has an event form that has dropdown lists for choosing the band and venue so that event creation process is as
streamlined as possible.

Once an event is created, one additional click on "Create PDF Contract" does just that. Creates a pdf and writes onto it
the contract text with the details filled in from the events, bands, and venues tables. It then saves this pdf with a custom name based
on the event date, the band name, and the venue name and city.

Lastly we added billing summaries for the business owner to keep up with fees due from each band.

This app is not currently live on the internet. Both clients who use it are running it locally since they don't have a need for it to be
accessed from locations besides their laptop.

