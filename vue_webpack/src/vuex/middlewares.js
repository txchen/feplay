import { STORAGE_KEY } from './store'

const localStorageMiddleware = {
  onMutation(mutation, { posts }) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
  },
}

export default [localStorageMiddleware]
