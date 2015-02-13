(function () {
  'use strict'
  riot.mount('todo', { data: todoStorage.fetch() })
}())
