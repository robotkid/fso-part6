import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import PropTypes from 'prop-types'

const Anecdote = ({ anecdote, handleVote }) => {
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleVote}>vote</button>
      </div>
    </div>
  )
}
Anecdote.propTypes = {
  anecdote: PropTypes.object.isRequired,
  handleVote: PropTypes.func.isRequired
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const {anecdotes, filter} = useSelector(state => state)

  const voteHandler = (anecdote) => {
    dispatch(voteFor(anecdote))
    dispatch(setNotification(`you voted for ${anecdote.content}`, 5))
  }

  return (
    <div>
      {anecdotes
        .filter(a => a.content.includes(filter))
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote =>
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleVote={() => voteHandler(anecdote)}
          />
        )}
    </div>
  )
}

export default AnecdoteList