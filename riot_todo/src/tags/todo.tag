<todo>
  <div onclick={ todoclick }>{ numb }</div>
  <ul>
    <li each={n, i in data}>{n}</li>
  <ul>

  <script>
  this.data = [1, 2, 3, 4, 5]
  this.numb = 1

  todoclick(e) {
    this.trigger('addone')
  }

  this.on('addone', function(){
    this.numb = this.numb + 3
  })
  </script>
</todo>
