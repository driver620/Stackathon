import axios from 'axios'

const GET_ACTIVITIES = 'GET_ACTIVITIES'

export const getActivities = activities => ({
  type: GET_ACTIVITIES,
  activities
})

export const activityReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ACTIVITIES: {
      return action.activities
    }
    default:
      return state
  }
}

export const getActivitiesThunk = userId => async dispatch => {
  try {
    const activities = await axios.get(`/api/activities/user/${userId}`)
    dispatch(getActivities(activities.data))
  } catch (err) {
    console.log('Could not retrieve activities: ', err)
  }
}
