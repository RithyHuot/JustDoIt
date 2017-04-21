import * as APIUtil from '../util/group_api_util';

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const REMOVE_GROUP = 'REMOVE_GROUP';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveGroups = (groups) => {
  return {
    type: RECEIVE_GROUPS,
    groups
  };
};

export const receiveGroup = (group) => {
  return {
    type: RECEIVE_GROUP,
    group
  };
};

export const removeGroup = (group) => {
  return {
    type: REMOVE_GROUP,
    group
  };
};

export const requestGroups = () => (dispatch) => {
  return APIUtil.requestGroups()
    .then(
      (groupsRes) => dispatch(receiveGroups(groupsRes)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
};

export const requestGroup = (groupId) => (dispatch) => {
  return APIUtil.requestGroup(groupId)
    .then(
      (groupRes) => dispatch(receiveGroup(groupRes)),
      (errors) => dispatch(receiveErrors(errors))
    );
};

export const updateGroup = (group) => (dispatch) => {
  return APIUtil.updateGroup(group)
    .then(
      (groupRes) => dispatch(receiveGroup(groupRes)),
      (errors) => dispatch(receiveErrors(errors))
    );
};

export const deleteGroup = (groupId) => (dispatch) => {
  return APIUtil.deleteGroup(groupId)
    .then(
      (groupRes) => dispatch(removeGroup(groupRes)),
      (errors) => dispatch(receiveErrors(errors))
    );
};

export const createGroup = (group) => (dispatch) => {
  return APIUtil.createGroup(group)
    .then(
      (groupRes) => dispatch(receiveGroup(groupRes)),
      (errors) => dispatch(receiveErrors(errors))
    );
};

export const addUserToGroup = (groupId) => (dispatch) => {
  return APIUtil.addUserToGroup(groupId)
    .then(
      (groupRes) => dispatch(receiveGroup(groupRes)),
      (errors) => dispatch(receiveErrors(errors))
    );
};

export const removeUserFromGroup = (groupId) => (dispatch) => {
  return APIUtil.removeUserFromGroup(groupId)
    .then(
      (groupRes) => dispatch(receiveGroup(groupRes)),
      (errors) => dispatch(receiveErrors(errors))
    );
};
