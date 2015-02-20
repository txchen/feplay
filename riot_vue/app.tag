<app>
  <nav id="sidenavs">
    <h2>Examples</h2>
    <ul>
      <li each={ opts.examples }>
        <a class={ current: parent.isCurrent(link) } href={ link }>{ title }</a>
      </li>
    </ul>
    <p><a href="https://github.com/txchen/feplay/tree/gh-pages/riot_vue" target="_blank">Source Code</a></p>
    <p>RiotJs Ver: { riotver }</p>
    <p><a href="http://vuejs.org/examples" target="_blank">Vuejs versions</a></p>
  </nav>
  <div id="example-content">
    <example-content id="example">
    </example-content>
  </div>

  <script>
  var self = this
  self.riotver = riot.version

  this.on('mount', function(){
    riot.route.exec(function(example) {
      console.log('initial route is ' + example)
      self.loadExample(example || 'markdown')
    })
  })

  isCurrent(link) {
    return link == window.location.hash
  }

  loadExample(example) {
    console.log('loadExample ' + example)
    var oldElement = document.getElementById('example')
    if (oldElement) {
      oldElement.remove()
    }
    exampleEle = document.createElement('example-content')
    exampleEle.id = 'example'
    document.getElementById('example-content').appendChild(exampleEle)
    riot.mountTo(document.getElementById('example'), example)
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
