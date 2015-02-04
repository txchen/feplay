<markdown>
  <div><a href="http://jsfiddle.net/yyx990803/wy2qf6yx/light/" target="_blank">vuejs version</a></div>
  <div id='editor'>
    <textarea onkeyup={ edit }># hello</textarea>
    <div name='resultdiv'></div>
  </div>

  <script>
  this.resultdiv.innerHTML = marked('# hello')
  edit(e) {
    this.resultdiv.innerHTML = marked(e.target.value)
  }
  </script>
</markdown>
