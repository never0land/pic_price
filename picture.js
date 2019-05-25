/*专门支持index.html页面中所有功能的js文件*/
//当页面加载完成后，自动执行:

window.onload=function(){
//console.log(11111112);
    //1. 发送ajax请求
    ajax({ 
      url:"/picture",
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
      console.log(11111113);
      var html=` <div>
      <img class="t7_pic"src="${products[0].sm}" alt="">
  </div>
  <div>
      <img class="t7_pic"src="${products[1].sm}" alt="">
  </div>
  <div>
      <img class="t7_pic"src="${products[2].sm}" alt="">
  </div>
  <div>
      <img class="t7_pic"src="${products[3].sm}" alt="">
  </div>
  <div>
      <img class="t7_pic"src="${products[4].sm}" alt="">
  </div>
  <div>
      <img class="t7_pic"src="${products[5].sm}" alt="">
  </div>
  <div>
      <img class="t7_pic"src="${products[6].sm}" alt="">
  </div>
  <div>
      <img class="t7_pic"src="${products[7].sm}" alt="">
  </div><div>
  <img class="t7_pic"src="${products[8].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[9].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[10].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[11].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[12].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[13].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[14].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[15].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[16].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[17].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[18].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[19].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[20].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[21].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[22].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[23].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[24].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[25].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[26].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[27].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[28].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[29].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[30].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[31].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[32].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[33].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[34].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[35].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[36].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[37].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[38].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[39].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[40].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[41].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[42].sm}" alt="">
</div><div>
<img class="t7_pic"src="${products[43].sm}" alt="">
</div>

</div>`
      //5. 将HTML片段整体替换回页面指定位置
      var divP=document.querySelector(
        "#watermain"
      )
      divP.innerHTML=html;
    }
    )}


