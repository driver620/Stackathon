import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getActivitiesThunk} from '../store/activityReducer'

class Data extends Component {
  componentDidMount() {
    this.props.getActivities(this.props.userId)
  }
  render() {
    // console.log('PROPS', this.props)
    return (
      <div>
        <h1> Testing Data</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.user.id,
  isLoading: state.loading,
  activities: state.activities
})

const mapDispatchToProps = dispatch => ({
  getActivities: userId => dispatch(getActivitiesThunk(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Data)
