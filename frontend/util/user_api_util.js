export const updateUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.get('user[id]')}`,
    contentType: false,
    processData: false,
    data: user
  });
};

export const requestUser = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
}
