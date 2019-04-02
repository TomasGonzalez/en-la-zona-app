import { connect } from 'react-redux';

const AUTHENTICATED = 'AUTHENTICATED';

export const authenticated = (authToken, accountUid) => {
  return {
    type: AUTHENTICATED,
    authToken,
    accountUid,
  };
}

const initialState = {
  authToken: null,
  accountUid: null,
}

export default (state = initialState, action) => {
  if (action.type === AUTHENTICATED) {
    return {
      authToken: action.authToken,
      accountUid: action.accountUid,
    };
  }
  return state;
};

export const withAccountUid = connect(state => ({
  accountUid: state.auth.accountUid,
}));
