<githubcommits>
  <style>
  ul.commit a {
    text-decoration: none;
    color: #f66;
  }
  ul.commit li {
    line-height: 1.5em;
    margin-bottom: 20px;
  }
  .author, .date {
    font-weight: bold;
  }
  </style>

  <h1>Latest Riotjs Commits</h1>
  <span each={ name, i in branches }>
    <input type="radio" name="branch" id={ name } value={ name } checked={ parent.currentBranch == name }
      onclick={ parent.selectBranch }></input>
    <label for={ name }>{ name }</label>
  </span>
  <p>muut/riotjs@{ currentBranch }</p>
  <ul class="commit">
    <li each={ commits }>
      <a href={ html_url } target="_blank">{ sha.slice(0, 7) }</a>
      - <span class="message">{ commit.message }</span><br>
      by <span class="author">{ commit.author.name }</span>
      at <span class="date">{ commit.author.date }</span>
    </li>
  </ul>

  <script>
  var apiUrl = 'https://api.github.com/repos/muut/riotjs/commits?per_page=3&sha='
  var self = this
  self.branches = ['master', 'dev', 'gh-pages']
  self.currentBranch = 'master'
  self.commits = []

  selectBranch(e) {
    self.currentBranch = e.target.value
    self.fetchData()
    return true
  }

  fetchData() {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', apiUrl + self.currentBranch)
    xhr.onload = function () {
      self.commits = JSON.parse(xhr.responseText)
      self.update()
    }
    xhr.send()
  }

  // TODO: so far canot call this in expression
  function truncate(v) {
    var newline = v.indexOf('\n')
    return newline > 0 ? v.slice(0, newline) : v
  }

  // TODO: so far canot call this in expression
  function formatDate(v) {
    return v.replace(/T|Z/g, ' ')
  }

  this.on('mount', function(){
    self.fetchData()
  })
  </script>
</githubcommits>
