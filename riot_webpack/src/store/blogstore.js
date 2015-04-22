const LOCALSTORAGE_KEY = 'riot-webpack-demo'

function BlogStore() {
  if (!(this instanceof BlogStore)) return new BlogStore()
  riot.observable(this)

  let json = window.localStorage.getItem(LOCALSTORAGE_KEY)
  if (!json) {
    initData()
  }
  this._posts = (json && JSON.parse(json)) || []

  this.on(riot.VE.LOAD_POSTS, () => {
    this.trigger(riot.SE.POSTS_CHANGED, this._posts)
  })

  this.on(riot.VE.RESET_DATA, () => {
    initData()
    this.trigger(riot.SE.POSTS_CHANGED, this._posts)
  })

  this.on(riot.VE.LIKE_POST, id => {
    this._posts.forEach(p => {
      if (p.postId == id) {
        p.likes = p.likes + 1
      }
    })
    saveToStorage()
    this.trigger(riot.SE.POSTS_CHANGED, this._posts)
  })

  this.getPostById = id => {
    return this._posts.filter(p => p.postId == id)[0]
  }

  let initData = () => {
    let defaultPosts = [
      {postId: 1, title: 'Best xbox games', content: 'Halo, GOW', category: 'collection', likes: 10},
      {postId: 2, title: 'Best ps games', content: 'Uncharted, The Last of US', category: 'collection', likes: 20},
      {postId: 3, title: 'Best wii games', content: 'Zelda, Mario', category: 'collection', likes: 16},
      {postId: 4, title: 'Review of Halo', content: 'yes, cortana', category: 'review', likes: 11},
      {postId: 5, title: 'Review of Titanfall', content: 'where is the local game?', category: 'review', likes: 7},
      {postId: 6, title: 'Review of portal', content: 'I don\'t blame you', category: 'review', likes: 40},
    ]
    this._posts = defaultPosts
    saveToStorage()
  }

  let saveToStorage = () => {
    window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(this._posts))
  }
}

// register to riot control by myself
let instance = BlogStore()
riot.control.addStore(instance)
export default instance
