/*专门支持index.html页面中所有功能的js文件*/
//当页面加载完成后，自动执行:

window.onload=function(){
    //1. 发送ajax请求
    ajax({
      url:"/index",
      type:"get",
      //data:,
      //返回结果的类型:
      dataType:"json"//——自动将json字符串执行JSON.parse()，转为js中的数组和对象，可直接使用
    })//return new Promise
           //open(result)
    //2. 接收响应    ↓
    .then(function(products){
      console.log(products);
      console.log("cc");
      //3. 获得响应数组中的第一个商品对象
      var p=products;
      //4. 创建第一个商品的html片段，并使用响应结果的第一个商品对象的对应属性填充片段中需要动态生成的位置
      console.log(p);
      var html=` <div>
      <img class="t7_pic"src="${products[0].pic}" alt="">
  </div>
  <div>
      <img class="t7_pic"src="${products[1].pic}" alt="">
  </div>
  <div>
      <img class="t7_pic"src="${products[2].pic}" alt="">
  </div>
  <div>
      <img class="t7_pic"src="${products[3].pic}" alt="">
  </div>
  <div>
      <img class="t7_pic"src="${products[4].pic}" alt="">
  </div>
  <div>
      <img class="t7_pic"src="${products[5].pic}" alt="">
  </div>
  <div>
      <img class="t7_pic"src="${products[6].pic}" alt="">
  </div>
  <div>
      <img class="t7_pic"src="${products[7].pic}" alt="">
  </div>
  <div>
  <img class="t7_pic"src="${products[8].pic}" alt="">
</div>
  `

      //5. 将HTML片段整体替换回页面指定位置
      var divP=document.querySelector(
        "#water"
      )
      divP.innerHTML=html;
    }
    )}
