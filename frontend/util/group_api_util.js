export const requestGroups = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/groups'
  });
};

export const requestGroup = (groupId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/groups/${groupId}`
  });
};

export const deleteGroup = (groupId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/groups/${groupId}`
  });
};

export const updateGroup = (group) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/groups/${group.get('group[id]')}`,
    contentType: false,
    processData: false,
    data: group
  });
};

export const createGroup = (group) => {
  return $.ajax({
    method: 'POST',
    url: '/api/groups',
    data: { group }
  });
};

export const addUserToGroup = (groupId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/groups/${groupId}/adduser`
  });
};

export const removeUserFromGroup = (groupId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/groups/${groupId}/removeuser`
  });
};

export const searchGroup = (query) => {
  return $.ajax({
    method: 'POST',
    url: '/api/groups/search',
    data: query
  });
};
