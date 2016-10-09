<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-table :data="rows" stripe border>
      <el-table-column property="a" label="a" sortable></el-table-column>
      <el-table-column inline-template label="b">
        <el-popover
          placement="right"
          title="Title"
          width="100"
          trigger="hover">
          <p>{{ row.a }}</p>
          <el-button type="text" slot="reference">{{ row.b }}</el-button>
        </el-popover>
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
        { a: 5, b: 6 },
        { a: 7, b: 8 },
        { a: 9, b: 10 }
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
