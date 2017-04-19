# JustDoIt
[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://justdoitrng.herokuapp.com/#/
[trello]: https://trello.com/b/Av4nSsaO/justdoit

## Minimum Viable Product
#### JustDoIt is a web application inspired by Meetup built using Ruby on Rails and React+Redux.

The primary features of this website include:
- [ ] Hosting on Heroku
- [ ] Authentication form
  - New account creation, login, and guest/demo login
- [ ] Groups (CRUD)
  - Join or leave groups.
  - Create, read, edit, and delete groups.
- [ ] Events (CRUD)
  - RSVP to events.
  - Create, read, edit, and delete events.
- [ ] Calendar (on group page)
- [ ] Search by location and group info (name, description)
- [ ] Production README
- [ ] **Bonus**: Categories
- [ ] **Bonus**: Calendar (for all groups in search results)

## Design Docs
- [Wireframes](wireframes)
- [React components](component-hierarchy.md)
- [API endpoints](api-endpoints.md)
- [DB schema](schema.md)
- [Sample State](sample-state.md)

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication with CSS and demo login.

### Phase 2: Group Model, API, and components (2 days)

**Objective:** Users can join a group. User can view and create individual group. Group can be created, read, edited and destroyed through
the API.

### Phase 3: Event Model, API, and components (2 days)

**Objective:** Users can rsvp to an event. User can view and create individual event. Event belong to Groups that can be created, read, edited and destroyed through the API.

### Phase 4: Calendar (1 day)

**Objective:** A calendar on the group page that listed all the user's events for a specific date.

### Phase 5: Search (2 day)

**Objective:** Allow users to search for groups by location and group info(name, description)

### Bonus Features (TBD)
- [ ] Add Login/Signup popup linking to the Signup and Login pages
- [ ] Categories
- [ ] Calendar (for all groups in search results)
