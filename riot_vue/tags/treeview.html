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
  <ul if={ isFolder() } show={ open }>
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
  self.open = false

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
