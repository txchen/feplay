const LOCALSTORAGE_KEY = 'riot-webpack-demo'

function BlogStore() {
  if (!(this instanceof BlogStore)) return new BlogStore()
  riot.observable(this)

  let json = window.localStorage.getItem(LOCALSTORAGE_KEY)
  this._posts = (json && JSON.parse(json)) || []

  this.on('ve_postsview_init', () => {
    this.trigger('se_posts_changed', this._posts)
  })

  this.on('ve_reset_data', () => {
    initData()
    this.trigger('se_posts_changed', this._posts)
  })

  this.on('ve_like_post', id => {
    this._posts.forEach(p => {
      if (p.postId == id) {
        p.likes = p.likes + 1
      }
    })
    saveToStorage()
    this.trigger('se_posts_changed', this._posts)
  })

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

export default BlogStore
