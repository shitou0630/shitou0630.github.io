(function(w,d) {
    function setSize() {
      var screenWidth = d.documentElement.clientWidth;
      var currentFontSize = screenWidth * 75 / 750;
      d.documentElement.style.fontSize = currentFontSize + 'px';
    }
    w.addEventListener('resize',setSize);
    w.addEventListener('pageShow',setSize)
    w.addEventListener('DOMContentLoaded',setSize)
  })(window,document)
  function goXj(){
    console.log(location.href)
    location.href='xj.html'
  }