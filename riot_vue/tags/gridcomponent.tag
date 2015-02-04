<gridcomponent>
  <div><a href="http://jsfiddle.net/yyx990803/2kqzhhq4/light/" target="_blank">vuejs version</a></div>
  <input name="query" onkeyup={ search }></input>
  <table>
    <thead>
      <tr>
        <th each={ name, i in gridColumns } onclick={ parent.setSortKey }>{ name }</th>
      </tr>
    </thead>
    <tbody>
      <tr each={ row, i in orderedData((gridData)) }>
        <td each={ name, value in row }>{ value }</td>
      </tr>
    </tbody>
  </table>

  <script>
  var self = this
  self.queryKey = ''
  self.gridColumns = ['name', 'power']
  self.gridData = [
    { name: 'Chuck Norris', power: Infinity },
    { name: 'Bruce Lee', power: 9000 },
    { name: 'Jacky Chang', power: 7000 },
    { name: 'Jet Li', power: 8000 }
  ]
  self.sortKey = ''
  self.reversed = {name: false, power: false}

  setSortKey(e) {
    self.sortKey = e.item.name
    self.reversed[self.sortKey] = !self.reversed[self.sortKey]
  }

  // TODO: orderby currently does not work correctly, DOM does not update
  orderedData(data) {
    if (!self.sortKey) {
      return data
    }
    order = self.reversed[self.sortKey] ? -1 : 1
    res = data.slice().sort(function(a, b){
      av = a[self.sortKey]
      bv = b[self.sortKey]
      return av === bv ? 0 :
        av > bv ? order : -order
    })
    res.forEach(function(qq) {
      console.log(qq)
    })
    return res
  }

  filteredData(data) {
    return data.filter(function (el) {
      return !self.queryKey || el.name.toUpperCase().indexOf(self.queryKey.toUpperCase()) > -1 ||
        el.power.toString().indexOf(self.queryKey) > -1
    });
  }

  search(e) {
    this.queryKey = e.target.value
  }
  </script>
</gridcomponent>
