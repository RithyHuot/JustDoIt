# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Groups

- `GET /api/groups`
  - Groups index/search
- `POST /api/groups`
- `GET /api/groups/:id`
- `PATCH /api/groups/:id`
- `DELETE /api/groups/:id`

### Events

- `GET /api/events`
  - ordered by date
- `POST /api/events`
- `GET /api/events/:id`
- `DELETE /api/events/:id`
- `PATCH /api/events/:id`

### RSVPS
- `POST /api/rsvps`
- `DELETE /api/rsvps/:id`

## Memberships
- `POST /api/memberships`
- `POST /api/memberships/:id`

### Calendars

- A calendar will be included on the group page
- `GET /api/calendars`
  - list all the user's events for a specific date