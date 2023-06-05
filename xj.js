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
    {label:'民族',value:'回族'},
    {label:'证件号码',value:'130502199506300618'},
    {label:'学制',value:'4年'},
    {label:'学历类别',value:'普通'},
    {label:'分院',value:'文学院'},
    {label:'系所',value:'文学院'},
    {label:'班级',value:'14汉语言文学2班'},
    {label:'学号',value:'2014014568'},
    {label:'入学时间',value:'2014年09月01日'},
    {label:'离校时间',value:'2019年06月20日'},
    {label:'学籍状态',value:'不在籍（毕业）'}
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