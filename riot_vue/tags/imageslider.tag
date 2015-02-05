<imageslider>
  <style>
  #slider {
    max-width: 600px;
    text-align: center;
    margin: 0 auto;
  }

  #slider #overflow {
    width: 100%;
    overflow: hidden;
  }

  #slider #slides .inner {
    width: 400%;

    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);

    -webkit-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
    transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);

    -webkit-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
    transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
  }

  #slider #slides article {
    width: 25%;
    float: left;
  }

  #slider #slide1:checked ~ #slides .inner {
    margin-left: 0;
  }

  #slider #slide2:checked ~ #slides .inner {
    margin-left: -100%;
  }

  #slider #slide3:checked ~ #slides .inner {
    margin-left: -200%;
  }

  #slider #slide4:checked ~ #slides .inner {
    margin-left: -300%;
  }

  #slider input[type="radio"] {
    display: none;
  }

  #slider label {
    background: #CCC;
    display: inline-block;
    cursor: pointer;
    width: 10px;
    height: 10px;
    border-radius: 5px;
  }

  #slider #slide1:checked ~ label[for="slide1"],
  #slider #slide2:checked ~ label[for="slide2"],
  #slider #slide3:checked ~ label[for="slide3"],
  #slider #slide4:checked ~ label[for="slide4"] {
    background: #333;
  }
  </style>

  <div><a href="http://jsfiddle.net/yyx990803/qnbmymfm/light/" target="_blank">vuejs version</a></div>
  <div id="slider">
    <my-slider data={ images }>
    </my-slider>
  </div>

  <script>
  this.images = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/rock.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/grooves.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/arch.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/sunset.jpg"
  ]
  </script>
</imageslider>

<my-slider>
  <input checked="" type="radio" name="slider" id="slide1" selected="false">
  <input type="radio" name="slider" id="slide2" selected="false">
  <input type="radio" name="slider" id="slide3" selected="false">
  <input type="radio" name="slider" id="slide4" selected="false">
  <div id="slides">
    <div id="overflow">
      <div class="inner">
        <article each={ s, i in opts.data }>
          <img src={ s }></img>
        </article>
      </div>
    </div>
  </div>
  <label for="slide1"></label>
  <label for="slide2"></label>
  <label for="slide3"></label>
  <label for="slide4"></label>
</my-slider>
