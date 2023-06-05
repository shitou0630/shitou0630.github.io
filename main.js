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
  function goDetail(val){
    console.log(location.href)
    location.href=val+'.html'
  }
  function getToken(){
    console.log(location.href)
    let str = location.href.split('?')[1]
    if(!str){
      location.href='http://www.baidu.com'
    }
    let token = str.split('=')[1]
    console.log(token)
    if(token!='asdfghjkl'){
      location.href='http://www.baidu.com'
    }
  }
  getToken()