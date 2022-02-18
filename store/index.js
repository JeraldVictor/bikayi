export const state = () => ({
  isLoading: false,
  error: {
    isError: false,
    message: '',
    type: '',
  },
  all_price: [],
  display_price: [],
})
export const mutations = {
  SET_DRAWER(super_state, data) {
    super_state.drawer = data
  },
  SET_LOADING(super_state, data) {
    super_state.isLoading = data
  },
  SET_ERROR(super_state, data) {
    super_state.error = {
      isError: true,
      message: data.message,
      title: data.title != null ? data.title : 'Oops, Something went wrong',
    }
  },
  DISMISS_ERROR(super_state) {
    super_state.error.isError = false
  },
  SET_ALERT(super_state, data) {
    super_state.error = {
      isError: true,
      message: data.message,
      title: 'Have a Look !',
    }
  },
  SET_ALL_DATA(super_state, data) {
    super_state.all_price = data
    super_state.display_price = data
  },
}

export const getters = {
  LOADING: (super_state) => super_state.isLoading,
  DRAWER: (super_state) => super_state.drawer,
  ISERROR: (super_state) => super_state.error.isError,
  ERROR: (super_state) => super_state.error,
  ALL_PRICE: (super_state) => super_state.all_price,
  DISPLAY_PRICE: (super_state) => super_state.display_price,
}

export const actions = {
  async GET_DATA({ commit }) {
    try {
      let { data } = await this.$axios({
        method: 'get',
        url: '',
      })
      // console.log(data.prizes)
      await commit('SET_ALL_DATA', data.prizes)
    } catch (error) {
      await commit('SET_ERROR', { message: error.message })
      return false
    }
  },
}
