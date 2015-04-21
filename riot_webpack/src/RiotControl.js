let _RiotControlApi = ['on','one','off','trigger']
let RiotControl = {
  _stores: [],
  addStore(store) {
    this._stores.push(store)
  }
}
_RiotControlApi.forEach(api => {
  RiotControl[api] = function() {
    let args = [].slice.call(arguments)
    this._stores.forEach(el => el[api].apply(null, args))
  }
})

// since riot is auto loaded by ProvidePlugin, merge the control into the riot object
riot.control = RiotControl
// store events
riot.SE = {
  POSTS_CHANGED: 'se_posts_changed',
}
// view events
riot.VE = {
  RESET_DATA: 've_reset_data',
  LIKE_POST: 've_like_post',
  LOAD_POSTS: 've_load_posts',
}
