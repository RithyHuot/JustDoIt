import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const requestUser = (userId) => (dispatch) => {
  return APIUtil.requestUser(userId)
    .then(
      (user) => dispatch(receiveUser(user)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
};
