// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Popover from 'element-ui/lib/popover'
import 'element-ui/lib/theme-default/popover.css'
import Button from 'element-ui/lib/button'
import 'element-ui/lib/theme-default/button.css'
import Table from 'element-ui/lib/table'
import 'element-ui/lib/theme-default/table.css'
import TableColumn from 'element-ui/lib/table-column'
import 'element-ui/lib/theme-default/table-column.css'

Vue.component(Button.name, Button)
Vue.component(Popover.name, Popover)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
