import React from 'react'
import { connect } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'
import PropTypes from 'prop-types'


const Filter = (props) => {
  const filterValue = props.filter

  const changeHandler = (event) => {
    const content = event.target.value
    props.filterChange(content)
    event.target.value = ''
  }
  
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      Filter: <input value={filterValue} onChange={changeHandler} />
    </div>
  )
}

Filter.propTypes = {
  filter: PropTypes.string,
  filterChange: PropTypes.func
}

const mapDispatchToProps = {
  filterChange
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

const ConnectedFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default ConnectedFilter