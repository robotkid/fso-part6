import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
  case 'UPDATE_ANECDOTE': {
    const id = action.data.id
    return state.map(a => a.id !== id ? a : action.data)
  }
  case 'NEW_ANECDOTE':
    return [...state, action.data]
  case 'INIT_ANECDOTES':
    return action.data
  default:
    return state
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch ({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const voteFor = (anecdote) => {
  return async dispatch => {
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    const response = await anecdoteService.update(updatedAnecdote)
    dispatch ({
      type: 'UPDATE_ANECDOTE',
      data: response
    })
  }
}

export default anecdoteReducer