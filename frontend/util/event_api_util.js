export const requestEvents = (groupId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/groups/${groupId}/events`,
  });
};

export const requestEvent = (eventId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/events/${eventId}`
  });
};

export const deleteEvent = (eventId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/events/${eventId}`
  });
};

export const updateEvent = (event) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/events/${event.id}`,
    data: { event }
  });
};

export const createEvent = (event) => {
  return $.ajax({
    method: 'POST',
    url: '/api/events',
    data: { event }
  });
};

export const addUserToEvent = (eventId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/events/${eventId}/adduser`
  });
};

export const removeUserFromEvent = (eventId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/events/${eventId}/removeuser`
  });
};

export const requestUserEvents = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/events/users/${userId}`
  });
};
