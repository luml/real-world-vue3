import { createStore } from 'vuex'
import user from './module/user'
import event from './module/event'

export default createStore({
  modules: {
    user,
    event,
  },
})
