<treeview>
  <style>
  #treeview .item {
    cursor: pointer;
  }
  #treeview .bold {
    font-weight: bold;
  }
  #treeview ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
  </style>

  <div><a href="http://jsfiddle.net/yyx990803/2e53p4wq/light/" target="_blank">vuejs version</a></div>
  <p>(You can double click on an item to turn it into a folder.)</p>
  <ul id='treeview'>
    <li>
      <treeitem data={ treedata }>
      </treeitem>
    </li>
  </ul>

  <script>
  this.treedata = {
    name: 'My Tree',
    children: [
      { name: 'hello' },
      { name: 'wat' },
      {
        name: 'child folder',
        children: [
          {
            name: 'child folder',
            children: [
              { name: 'hello' },
              { name: 'wat' }
            ]
          },
          { name: 'hello' },
          { name: 'wat' },
          {
            name: 'child folder',
            children: [
              { name: 'hello' },
              { name: 'wat' }
            ]
          }
        ]
      }
    ]
  }
  </script>
</treeview>

<treeitem>
  <div class={ bold: isFolder() } onclick={ toggle } ondblclick={ changeType }>
    { name }
    <span if={ isFolder() }>[{open ? '-' : '+'}]</span>
  </div>
  <!-- TODO: now if is implemented as CSS display, so show must use isFolder as well, which should be removed -->
  <ul if={ isFolder() } show={ isFolder() && open }>
    <li each={ child, i in children }>
      <treeitem data={child}>
      </treeitem>
    </li>
    <li onclick={ addChild }>+</li>
  </ul>

  <script>
  var self = this
  self.name = opts.data.name
  self.children = opts.data.children

  isFolder() {
    return self.children && self.children.length
  }

  toggle(e) {
    self.open = !self.open
  }

  changeType(e) {
    if (!self.isFolder()) {
      self.children = []
      self.addChild()
      self.open = true
    }
  }

  addChild(e) {
    self.children.push({
      name: 'new stuff'
    })
  }
  </script>
</treeitem>
