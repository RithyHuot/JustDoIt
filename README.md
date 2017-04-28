# JustDoIt

[JustDoIt Live][heroku]

[heroku]: (https://justdoitrng.herokuapp.com/#/)

JustDoIt is a web application inspired by Meetup. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Features & Implementation

* JustDoIt!
  - Join groups and rsvp to events
  - See events of the groups
  - See members of the group


* Groups
  - Users can join a group
  - Users can view, create and destroy individual group
  - Users can see other group members


* Events    
  - Users can RSVP to an events
  - Users can view, create and destroy events
  - Users can see attending list


* Search Bar   
  - Users can search for group based on groups' name, location and description


* Authentication
  - Secure custom authentication system that hashes/salts passwords using BCrypt

## Future Directions for the Project

### Infinite Scrolls
  - Users will be able to scroll through their groups and events and the server will send out a new set of groups and events starting from the last offset

### Calendar
  - Users will be able to search and sort for events based on date

### Categories
  - Users will be able to navigate to a category page that filter out all groups based on the selected category
