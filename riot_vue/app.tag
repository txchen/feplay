<app>
  <nav id='nav'>
    <h2>Examples</h2>
    <ul>
      <li><a href='#markdown'>Markdown Editor</a></li>
      <li><a href='#githubcommits'>Github Commits</a></li>
      <li><a href='#firebase'>Firebase + Validation</a></li>
      <li><a href='#gridcomponent'>Grid Component</a></li>
      <li><a href='#treeview'>Tree View</a></li>
      <li><a href='#svggraph'>SVG Graph</a></li>
      <li><a href='#imageslider'>Image Slider Component</a></li>
    </ul>
  </nav>
  <example-content id='example-content'>
  </example-content>

  <script>
  var self = this

  this.on('mount', function(){
    riot.route.exec(function(example) {
      console.log('initial route is ' + example)
      self.loadExample(example || 'markdown')
    })
  })

  loadExample(example) {
    console.log('loadExample ' + example)
    var oldElement = document.getElementById('example-content')
    if (oldElement) {
      oldElement.remove()
    }
    document.getElementById('nav').insertAdjacentHTML('afterend', '<example-content id="example-content"></example-content>')
    riot.mountTo(document.getElementById('example-content'), example)
    // this will trigger unmount if element is removed from dom, important!
    // otherwise it would cause memory leak
    riot.update()
  }

  riot.route(function(example) {
    self.loadExample(example)
    self.update()
  })
  </script>
</app>
