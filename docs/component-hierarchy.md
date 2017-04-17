## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**WelcomeContainer**
  - Header
  - Cover
  - Categories
  - Footer

**HomeContainer**
  - Header
  - GroupListItems
  - Footer

**GroupContainer**
  - Header
  - GroupIndex
    - GroupIndexItem
  - EventIndex
    - EventIndexItem
  - Footer

**GroupFormContainer**
  - Header
  - GroupForm
  - Footer

**EventContainer**
  - Header
  - EventIndex
  - Footer  

**EventFormContainer**
  - Header
  - EventForm
  - Footer

**UserProfileContainer**
  - Header
  - UserIndex
  - Footer

**CalendarContainer**
  - Header
  - EventListItems
  - Footer

**SearchResultsContainer**
  - Search
  - GroupIndex

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "App"|
| "/signup" | "AuthFormContainer" |
| "/signin" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/group" | "GroupContainer" |
| "/home/calendar" | "CalendarContainer" |
| "/group/new" | "GroupFormContainer" |
| "/group/:groupId" | "GroupContainer" |
| "/group/:groupId/event" | "EventContainer"
| "/group/:groupId/event/new" | "EventFormContainer" |
| "/group/:groupId/event/:eventId" | "EventContainer" |
| "/user/:id" | "UserProfileContainer" |
