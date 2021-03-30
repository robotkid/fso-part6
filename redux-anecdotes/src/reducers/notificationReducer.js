
const notificationReducer = (state = {message: '', timeoutId: null}, action) => {
  switch (action.type) {
  case 'SET_MESSAGE':
    return action.payload
  case 'CLEAR_MESSAGE':
    return ''
  default:
    return state
  }
}

export const setNotification = (message, timeOut) => {
  return (dispatch, getState) => {
    const { timeoutID } = getState().notification
    clearTimeout(timeoutID)
    const newTimeoutID = setTimeout(() => {
      dispatch({ type: 'CLEAR_MESSAGE' })
    }, timeOut * 1000)
    dispatch(
      {
        type: 'SET_MESSAGE',
        payload: {
          message,
          timeoutID: newTimeoutID
        }
      })
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR_MESSAGE'
  }
}

export default notificationReducer