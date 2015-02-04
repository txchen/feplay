<markdown>
  <div id='editor'>
    <textarea onkeyup={ edit }># hello</textarea>
    <div name='resultdiv'></div>
  </div>
  this.resultdiv.innerHTML = marked('# hello')
  edit(e) {
    this.resultdiv.innerHTML = marked(e.target.value)
  }
</markdown>
