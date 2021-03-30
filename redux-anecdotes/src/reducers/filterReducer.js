const filterReducer = (state = '', action) => {
  switch (action.type) {
  case 'SET_FILTER':
    return action.filter
  default:
    return state
  }
}

export const filterChange = filter => {
  const action = {
    type: 'SET_FILTER',
    filter
  }
  return action
}

export default filterReducer