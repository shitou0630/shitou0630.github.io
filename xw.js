(function(w,d) {
  function setSize() {
    var screenWidth = d.documentElement.clientWidth;
    var currentFontSize = screenWidth * 75 / 750;
    d.documentElement.style.fontSize = currentFontSize + 'px';
  }
  w.addEventListener('resize',setSize);
  w.addEventListener('pageShow',setSize)
  w.addEventListener('DOMContentLoaded',setSize)
})(window,document);
let lists = [
  {label:'获学位日期',value:'2019年06月20日'},
  {label:'学科专业',value:'汉语言文学'},
  {label:'学位证书编号',value:'1001342019003165'},
  ]
window.onload=function(){
  let dom = document.getElementById('detail-list')
  console.log(dom)
  let el = ''
  for(let i in lists){
      el+='<div class="detail-item"><span class="item-title">'+ lists[i].label+'</span><span class="item-value">'+lists[i].value+'</span></div>'
  }
  dom.innerHTML = el
}
function goback(){
  history.go(-1)
}