const LOCALSTORAGE_KEY = 'riot-webpack-demo'

class BlogStore {
  constructor() {
    let json = window.localStorage.getItem(LOCALSTORAGE_KEY)
    this.posts = (json && JSON.parse(json)) || []
  }

  addPost(postId, title, content, category) {
    this.posts.push({postId, title, content, category})
    window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(this.posts))
  }

  getPost(postId) {
    for (let elem of this.posts) {
      if (elem.postId == postId) {
        return elem
      }
    }
  }

  listPosts() {
    return this.posts
  }

  static initData() {
    let defaultPosts = [
      {postId: 1, title: 'Best xbox games', content: 'Halo, GOW', category: 'collection'},
      {postId: 2, title: 'Best ps games', content: 'Uncharted, The Last of US', category: 'collection'},
      {postId: 3, title: 'Best wii games', content: 'Zelda, Mario', category: 'collection'},
      {postId: 4, title: 'Review of Halo', content: 'yes, cortana', category: 'review'},
      {postId: 5, title: 'Review of Titanfall', content: 'where is the local game?', category: 'review'},
      {postId: 6, title: 'Review of portal', content: 'I don\'t blame you', category: 'review'},
    ]
    window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(defaultPosts))
  }
}

export default BlogStore
