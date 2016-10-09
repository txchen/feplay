<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-popover
      ref="popover2"
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段容,这是一段容,这是一段容,这是一段容。">
    </el-popover>
    <el-table :data="rows" stripe border>
      <el-table-column property="a" label="a" sortable></el-table-column>
      <el-table-column inline-template label="b">
        <el-button v-popover:popover2>{{ row.b }}</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!',
      rows: [
        { a: 1, b: 2 },
        { a: 3, b: 4 },
        { a: 5, b: 6 }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
