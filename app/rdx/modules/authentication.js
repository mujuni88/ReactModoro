const initialState = {
  isAuthed: false,
  isAuthenticating: false,
  authedId: ''
}

export default function authentication (state = initialState, action) {
  /* if(action.type === 'AUTH_USER'){
    return {
    ...state,
      isAuthed: true,
      authedId: action.user_id
  } */

  switch (action.type) {
    default:
      return state
  }
}
