const LOCALSTORAGE_KEY = 'riot-webpack-demo'

class BlogStore {
  constructor() {
    riot.observable(this)
    let json = window.localStorage.getItem(LOCALSTORAGE_KEY)
    this._posts = (json && JSON.parse(json)) || []

    this.on('ve_postsview_init', () => {
      this.trigger('se_posts_changed', this._posts)
    })

    this.on('ve_reset_data', () => {
      this.initData()
      this.trigger('se_posts_changed', this._posts)
    })

    this.on('ve_like_post', id => {
      this._posts.forEach(p => {
        if (p.postId == id) {
          p.likes = p.likes + 1
        }
      })
      this.saveToStorage()
      this.trigger('se_posts_changed', this._posts)
    })
  }

  saveToStorage() {
    window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(this._posts))
  }

  addPost(postId, title, content, category) {
    this._posts.push({postId, title, content, category})
    window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(this._posts))
  }

  getPost(postId) {
    for (let elem of this._posts) {
      if (elem.postId == postId) {
        return elem
      }
    }
  }

  listPosts() {
    return this._posts
  }

  initData() {
    let defaultPosts = [
      {postId: 1, title: 'Best xbox games', content: 'Halo, GOW', category: 'collection', likes: 10},
      {postId: 2, title: 'Best ps games', content: 'Uncharted, The Last of US', category: 'collection', likes: 20},
      {postId: 3, title: 'Best wii games', content: 'Zelda, Mario', category: 'collection', likes: 16},
      {postId: 4, title: 'Review of Halo', content: 'yes, cortana', category: 'review', likes: 11},
      {postId: 5, title: 'Review of Titanfall', content: 'where is the local game?', category: 'review', likes: 7},
      {postId: 6, title: 'Review of portal', content: 'I don\'t blame you', category: 'review', likes: 40},
    ]
    window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(defaultPosts))
    this._posts = defaultPosts
  }
}

export default BlogStore
