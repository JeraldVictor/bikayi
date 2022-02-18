export const state = () => ({
  isLoading: false,
  error: {
    isError: false,
    message: '',
    type: '',
  },
})
export const mutations = {
  SET_DRAWER(s, data) {
    s.drawer = data
  },
  SET_LOADING(s, data) {
    s.isLoading = data
  },
  SET_ERROR(s, data) {
    s.error = {
      isError: true,
      message: data.message,
      title: data.title != null ? data.title : 'Oops, Something went worng',
    }
  },
  DISMIS_ERROR(s) {
    s.error.isError = false
  },
  SET_ALERT(s, data) {
    s.error = {
      isError: true,
      message: data.message,
      title: 'Have a Look !',
    }
  },
}

export const getters = {
  LOADING: (s) => s.isLoading,
  DRAWER: (s) => s.drawer,
  ISERROR: (s) => s.error.isError,
  ERROR: (s) => s.error,
}

export const actions = {
  async GET_DATA({ commit }, data) {
    try {
    } catch (error) {
      await commit('SET_ERROR', { message: error.message })
      return false
    }
  },
}
