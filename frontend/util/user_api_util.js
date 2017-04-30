export const requestUser = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
}
