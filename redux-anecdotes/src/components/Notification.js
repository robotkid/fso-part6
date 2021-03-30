import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Notification = (props) => {
  const message = props.notification
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {message}
    </div>
  )
}

Notification.propTypes = {
  notification: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification.message
  }
}
const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification