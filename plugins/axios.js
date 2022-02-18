import https from 'https'

export default function ({ $axios, redirect, store }) {
  $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })
  $axios.onRequest((config) => {
    store.commit('SET_LOADING', true)
  })

  $axios.onResponse((response) => {
    store.commit('SET_LOADING', false)
  })

  $axios.onError((error) => {
    console.log('error ' + error)
    store.commit('SET_LOADING', false)
  })

  $axios.onRequestError((error) => {
    console.log('RequestError ' + error)
    store.commit('SET_LOADING', false)
  })
  $axios.onResponseError((error) => {
    console.log('ResponseError ' + error)
    store.commit('SET_LOADING', false)
  })
}
