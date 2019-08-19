//sweet hack to set meta viewport for desktop sites squeezing down to mobile that are big and have a fixed width 
  //first see if they have window.screen.width avail
  (function() {
    if (window.screen.width)
    {
      var setViewport = {
        //smaller devices
        phone: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no',
        //bigger ones, be sure to set width to the needed and likely hardcoded width of your site at large breakpoints  
        other: 'width=1045,user-scalable=yes',
        //current browser width
        widthDevice: window.screen.width,
        //your css breakpoint for mobile, etc. non-mobile first
        widthMin: 560,
        //add the tag based on above vars and environment 
        setMeta: function () {
          var params = (this.widthDevice <= this.widthMin) ? this.phone : this.other; 
          var head = document.getElementsByTagName("head")[0];
          var viewport = document.createElement('meta');
          viewport.setAttribute('name','viewport');
          viewport.setAttribute('content',params);
          head.appendChild(viewport);
        }
      }
      //call it 
      setViewport.setMeta();
    }
  }).call(this);
