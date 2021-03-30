import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import PropTypes from 'prop-types'

const AnecdoteForm = ({ createAnecdote, setNotification }) => {
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    createAnecdote(content)
    setNotification('you created an anecdote!', 5)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

AnecdoteForm.propTypes = {
  createAnecdote: PropTypes.func,
  setNotification: PropTypes.func
}

const mapDispatchToProps = {
  createAnecdote,
  setNotification
}

const ConnectedAnecdoteForm = connect(
  null, mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm