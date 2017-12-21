import { getAccessToken, authWithToken, updateUser } from 'api/auth'

const AUTHENTICATING = 'AUTHENTICATING'
const NOT_AUTHED = 'NOT_AUTHED'
const AUTHED = 'AUTHED'

const initialState = {
  isAuthed: false,
  isAuthenticating: false,
  authedId: ''
}

export function authenticating () {
  return {
    type: AUTHENTICATING
  }
}

export function notAuthed () {
  return {
    type: NOT_AUTHED
  }
}

export function isAuthed (uid) {
  return {
    type: AUTHED,
    uid
  }
}

export function handleAuthWithFirebase () {
  return function (dispatch) {
    dispatch(authenticating())
    return getAccessToken()
      .then(({accessToken}) => authWithToken(accessToken))
      .catch(error => console.warn('Error in handleAuthWithFirebase', error))
  }
}

export function onAuthChange (user) {
  return (dispatch) => {
    if (!user) {
      dispatch(notAuthed())
    } else {
      console.log(user)
      const { displayName, photoURL, uid } = user
      console.log('updateUser', updateUser({displayName, uid, photoURL})
      .then(() => { dispatch(isAuthed(uid))})
        .catch(e => console.log(e))
    )
    }
  }
}

export default function authentication (state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATING:
      return {
        ...state,
        isAuthenticating: true
      }
    case NOT_AUTHED:
      return {
        ...state,
        isAuthenticating: false,
        isAuthed: false,
        authedId: ''
      }
    case AUTHED:
      return {
        ...state,
        isAuthenticating: false,
        isAuthed: true,
        authedId: action.uid
      }
    default:
      return state
  }
}
