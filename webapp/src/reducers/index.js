import { combineReducers } from 'redux'
import _ from 'lodash'
import { routerReducer } from 'react-router-redux'

const fetchData = (state = [], action) => {
  switch (action.type) {
    case 'fetch':
      return {
        data: action.data
      }
    default:
      return {
        data: _.isEmpty(state) ? state : state.data
      }
  }
}

const setModifiedId = (state = 0, action) => {
  switch (action.type) {
    case 'set':
      return {
        id: action.data
      }
    default:
      return {
        id: _.isEmpty(state) ? state : state.id
      }
  }
}

const rootReducer = combineReducers({
  fetchData,
  setModifiedId,
  routing: routerReducer
})

export default rootReducer
