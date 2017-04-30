export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  });
};
export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session',
  });
};

export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  });
};

export const updateUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.get('user[id]')}`,
    contentType: false,
    processData: false,
    data: user
  });
};
