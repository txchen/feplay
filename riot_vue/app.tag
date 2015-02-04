<app>
  <nav id='nav'>
    <h2>Examples</h2>
    <ul>
      <li><a href='#markdown'>Markdown Editor</a></li>
      <li><a href='#githubcommits'>Github Commits</a></li>
      <li><a href='#firebase'>Firebase + Validation</a></li>
    </ul>
  </nav>
  <example-content id='example-content'>
  </example-content>

  <script>
  var self = this

  this.on('mount', function(){
    self.loadExample(opts.example ? opts.example : 'markdown')
  })

  loadExample(example) {
    console.log('loadExample ' + example)
    var oldElement = document.getElementById('example-content')
    if (oldElement) {
      oldElement.remove()
    }
    document.getElementById('nav').insertAdjacentHTML('afterend', '<example-content id="example-content"></example-content>')
    riot.mountTo(document.getElementById('example-content'), example)
    // this will trigger unmount if the dom is detached, important!
    // other wise memory leak
    riot.update()
  }

  riot.route(function(example) {
    self.loadExample(example)
    self.update()
  })
  </script>
</app>
