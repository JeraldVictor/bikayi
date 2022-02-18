const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

const format_data = async (data) => {
  let years = new Set()
  let categories = new Set()
  let prices = []
  await Promise.all(
    data.map(async (item) => {
      if (Number(item.year) >= 1900 && Number(item.year) <= 2018) {
        years.add(item.year)
      }
      categories.add(item.category)
      if (item.laureates) {
        await asyncForEach(item.laureates, (people) => {
          prices.push({
            category: item.category,
            year: item.year,
            ...people,
          })
        })
      }
      return item
    })
  )
  return {
    years: Array.from(years),
    categories: Array.from(categories),
    prices,
  }
}

const paginator = (items, current_page, per_page_items) => {
  let page = current_page || 1,
    per_page = per_page_items || 10,
    offset = (page - 1) * per_page,
    paginatedItems = items.slice(offset).slice(0, per_page_items),
    total_pages = Math.ceil(items.length / per_page)

  return {
    current_page,
    page: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems,
  }
}

export const state = () => ({
  isLoading: false,
  error: {
    isError: false,
    message: '',
    type: '',
  },
  all_price: [],
  display_price: [],
  years: [],
  categories: [],
  more_than_once: [],
  paginated_price: {
    data: [],
  },
  per_page_items: 12,
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
    super_state.paginated_price = paginator(data, 1, 12)
  },
  SET_FILTER_DATA(super_state, data) {
    super_state.display_price = data
    super_state.paginated_price = paginator(data, 1, 12)
  },
  SET_FILTERS(super_state, { years, categories }) {
    super_state.years = years
    super_state.categories = categories
  },
  SET_MORE_THAN_ONCE(super_state, data) {
    super_state.more_than_once = data
  },
  SET_PAGINATION(super_state, current_page) {
    super_state.paginated_price = paginator(
      super_state.display_price,
      current_page,
      super_state.per_page_items
    )
  },
}

export const getters = {
  LOADING: (super_state) => super_state.isLoading,
  DRAWER: (super_state) => super_state.drawer,
  ISERROR: (super_state) => super_state.error.isError,
  ERROR: (super_state) => super_state.error,
  ALL_PRICE: (super_state) => super_state.all_price,
  DISPLAY_PRICE: (super_state) => super_state.display_price,
  PAGINATED_PRICE: (super_state) => super_state.paginated_price,
  ALL_YEARS: (super_state) => super_state.years,
  ALL_CATEGORY: (super_state) => super_state.categories,
  MORE_THAN: (super_state) => super_state.more_than_once,
}

export const actions = {
  async GET_DATA({ commit }) {
    try {
      let { data } = await this.$axios({
        method: 'get',
        url: '',
      })
      await commit('SET_LOADING', true)
      let { years, categories, prices } = await format_data(data.prizes)
      await commit('SET_ALL_DATA', prices)
      commit('SET_FILTERS', {
        years,
        categories,
      })
    } catch (error) {
      await commit('SET_ERROR', { message: error.message })
      return false
    } finally {
      await commit('SET_LOADING', false)
    }
  },
  async FILTER_DATA({ commit, state: super_state }, { category, year }) {
    await commit('SET_LOADING', true)
    try {
      if (category.length == 0 && year.length == 0) {
        await commit('SET_FILTER_DATA', super_state.all_price)
        return true
      }
      let result = await Promise.all(
        super_state.all_price.filter((item) => {
          if (year.length >= 1 && category.length >= 1) {
            return (
              category.includes(item.category.toUpperCase()) &&
              year.includes(item.year)
            )
          } else if (year.length >= 1) {
            return year.includes(item.year)
          } else {
            return category.includes(item.category.toUpperCase())
          }
        })
      )
      await commit('SET_FILTER_DATA', result)
      return true
    } catch (error) {
      await commit('SET_ERROR', { message: error.message })
      return false
    } finally {
      await commit('SET_LOADING', false)
    }
  },
  async CLEAR_FILTER({ commit, state: super_state }) {
    await commit('SET_LOADING', true)
    try {
      await commit('SET_FILTER_DATA', super_state.all_price)
    } catch (error) {
      await commit('SET_ERROR', { message: error.message })
      return false
    } finally {
      await commit('SET_LOADING', false)
    }
  },
  async MORE_THAN_ONCE({ commit, state: super_state }) {
    await commit('SET_LOADING', true)
    try {
      let { data } = await this.$axios({
        method: 'get',
        url: '',
      })
      await commit('SET_ALL_DATA', data.prizes)
      let people = new Object()
      await asyncForEach(data.prizes, async (item) => {
        if (item.laureates) {
          await asyncForEach(item.laureates, (person_in_item) => {
            let name =
              `${person_in_item.firstname}_${person_in_item.surname}`.toUpperCase()
            if (people.hasOwnProperty(name)) {
              let price = people[name]
              people[name] = [
                ...price,
                { ...person_in_item, year: item.year, category: item.category },
              ]
            } else {
              people[name] = [
                { ...person_in_item, year: item.year, category: item.category },
              ]
            }
          })
        }
      })
      let result = []
      await asyncForEach(Object.entries(people), ([key, value]) => {
        if (value.length > 1) {
          result = [...result, value]
        }
      })

      await commit('SET_MORE_THAN_ONCE', result)
      return true
    } catch (error) {
      await commit('SET_ERROR', { message: error.message })
      return false
    } finally {
      await commit('SET_LOADING', false)
    }
  },
}
