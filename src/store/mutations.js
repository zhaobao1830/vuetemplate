import * as types from './mutation-types'

const mutations = {
  [types.SET_RIGHT_DISPLAY] (state, rightDisplay) {
    state.rightDisplay = rightDisplay
  }
}

export default mutations
