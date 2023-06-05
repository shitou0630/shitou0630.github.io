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
    {label:'入学日期',value:'2014年09月01日'},
    {label:'毕（结）业日期',value:'2019年06月20日'},
    {label:'学历类别',value:'普通高等教育'},
    {label:'学制',value:'4年'},
    {label:'毕（结）业',value:'毕业'},
    {label:'校（院）长姓名',value:'刘敬泽'},
    {label:'证书编号',value:'1001 3120 1905 0032 12'},
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