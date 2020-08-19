let store = {
  state: {
    message: 'Hello!'
  },
  methods: {
    add () {
      console.log('asd')
      this.state.message += 1
    },
    dec () {
      this.state.count--
    }
  }
}
export {
  store
}
