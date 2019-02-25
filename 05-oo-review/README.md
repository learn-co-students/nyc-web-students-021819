# OO Review

For this assignment, we will be creating a domain to track Bands, Venues, and Concerts. Our domain model can be found below.

![music image](https://media.giphy.com/media/UvvK72Z0YK2KWUPZ0o/giphy.gif)

Your goal is to build out all of the methods listed below in 'deliverables'. Feel free to build out any helper methods, if needed. Do your best to follow Ruby best practices. For example, use higher-level array methods such as `map`, `select`, and `find` when appropriate.

We've provided you with a console that you can use to test your code. To enter a console session, run `ruby tools/console.rb`. You'll be able to test out the methods that you write here.

  --  Make sure you are testing your code as you go! --

## Domain Model

### Band -< Concert >- Venue

+ Band has a *name* and a *genre*.
+ Concert has an *attendance* (number of people) and a *date*.
+ Venue has a *name*, a *location*, and a *capacity* (amount of people it can hold).

## Deliverables

Build the following methods on the **Band** class:

+ Band.all
  + returns an array of all bands
+ Band#concerts
  + returns a list of concerts at a specific band
+ Band#venues
  + should return a list of unique venues for a specific band
+ Band#add_concert(date, venue)
  + given a date and a venue, creates a new concert and associates it with that band and venue
+ Band#update_attendance(concert, number)
  + changes the attendance for a concert given a number (only if the concert belongs to the band)
+ Band#average_sale_rate
  + returns the average sale rate (attendance / capacity) for the band
+ Band#find_concerts_at_venue(venue)
  + given a venue, finds all concerts for this band at that venue
+ Band#sell_out(venue)
  + given a venue, sells out all tickets for all the concerts the band has at this venue (*hint*: use #find_concerts_at_venue)

Build out the following methods on the **Venue** class:

+ Venue.all
  + returns an array of all venues
+ Venue.find_by_location(location)
  + given a string of a location, returns all venues that match that location
+ Venue.find_by_name(name)
  + given a string of a location, returns the venue with that name
+ Venue#concert_dates
  + returns a list of the concert dates for a specific venue
+ Venue#bands
  + returns a list of unique bands for a specific venue
+ Venue#average_attendance
  + returns the average attendance for that specific venue

Build out the following methods on the **Concert** class:

+ Concert.all
  + returns an array of all concerts
+ Concert#band
  + returns the band for that given concert
+ Concert#venue
  + returns the venue for that given concert
+ Attendance should be defaulted to 0
+ Attendance should not be greater than the venue's capacity or less than 0
+ Concert.highest_attendance
  + returns the concert with the highest attendance
