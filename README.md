# What's it Costing Me? (Bill Tracker)
This app is designed for a property owner to be able to track various expenses (i.e., water, sewage, insurance, property taxe, etc.) related to specific property(ies). The app was created with HTML, CSS, bootstrap, jQuery, and Javascript on the front end. The back end was constructed with PostgreSQL and Ruby on Rails.

For the moment, this is the landing page

https://imgur.com/7wxClqH

## General Approach to App Development
As with any app development process, this one started with planning - thinking through the tupes of data was required, how to structure the idenified data types and decide on the tools that would best suit this app. Once that was decided, the process moved on to creating the ERDS, which in the end consists of three (3) tables: a users, houses, and expenses table. The ERD is available on the Api README, but can be seen here

https://imgur.com/iqKis79

## links to Wireframes
Upong landing on the app page, a user would be prompted (via pop up modal) to create an accout or sign in if an account already exists. For the moment, the site is set up for testing functionality. Once fully completed, the landing page would only display the user account interface. Upon successfully signed in the user would then be able to GET all associated users and be able to take all of the CRUD actions. Below is the Link to  a very rough, quick sketch of the app wireframes.

https://imgur.com/Jd7RJEc

The app was built upon a template (both api and front end) provided by General Assembly. The template is available for download on their github page.


### User Stories

* As a user, I would like to be able to sign up in order to begin using the app
* As a user, I'd like to be able change my password
* As a user, I'd like to to create/post new data into the app in order to retrieve the record when needed
* As a user, I'd like to retrieve the records I've created
* As a user, I'd like to update the record in the event that the information was added incorrectly, or new information becomes available
* As a user, I'd like to be able to delete a record

## Unresolved Problems
* A significent hurdle was getting the app to work properly once deployed. All of the necessary features work on hte local hose, however, once deployed, there were a series of errors 405 possibly related to CORS. One option considered was creating a new app to deploy to heroku.

### Links to the app
Client Deployed - Github Page URL -- https://ma-je.github.io/capstone-front-end/
Front-end repository - https://github.com/ma-je/capstone-front-end
Api repository - https://github.com/ma-je/capstone-api
Api deployed url -- http://floating-anchorage-61832.herokuapp.com

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
