<app>
  <nav id="sidenavs">
    <h2>Examples</h2>
    <ul>
      <li each={ name, data in opts.examples }>
        <a class={ current: '#' + name == window.location.hash } href={ '#' + name }>{ data.title }</a>
        <a if={ '#' + name == window.location.hash } target="_blank"
           href={ sourceCodeUrl + '/tags/' + name + '.html' }>(src)</a>
      </li>
    </ul>
    <p><a href={ sourceCodeUrl } target="_blank">Source Code</a></p>
    <p>RiotJs Ver: { riot.version }</p>
    <p><a href="http://vuejs.org/examples" target="_blank">Vuejs versions</a></p>
  </nav>
  <div id="example-content">
    <h1>{ currentExample.title }</h1>
    <blockquote>
      <p>{ currentExample.desc }</p>
    </blockquote>
    <div id="example"></div>
  </div>

  <script>
  var self = this
  self.sourceCodeUrl = 'https://github.com/txchen/feplay/tree/gh-pages/riot_vue'
  self.mountedTag = null
  self.loadedTags = {}

  loadExample(example) {
    console.log('loadExample ' + example)
    if (self.mountedTag) {
      self.mountedTag.unmount(true)
    }
    if (!self.loadedTags[example]) {
      riot.compile('tags/' + example + '.html', function() {
        console.log(example + ' compiled')
        self.loadedTags[example] = true
        self.mountedTag = riot.mount('div#example', example)[0]
      })
    } else {
      self.mountedTag = riot.mount('div#example', example)[0]
    }
  }

  riot.route(function(example) {
    if (!example) {
      return riot.route('markdown')
    }
    self.loadExample(example)
    self.currentExample = opts.examples[example]
    self.update()
  })
  riot.route.start(true)
  </script>
</app>
