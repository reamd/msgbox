# msgBox说明
原生JavaScript弹窗组件
# msgBox使用说明
- **首先引入库相关的.css .js文件**
    - 未压缩版本(src文件夹下)
```js
<link rel="stylesheet" type="text/css" href="msgBox.css"/>
<script type="text/javascript" src="msgBox.js"></script>
```
    - 压缩版本(dist文件夹下)
```js
<link rel="stylesheet" type="text/css" href="msgBox.min.css"/>
<script type="text/javascript" src="msgBox.min.js"></script>    
```    
- **控件初始化**
```js
    new msgBox({
        width: '200px',    //设置弹窗的宽度，不设置的话默认由弹窗内容决定
        minWidth: '100px', //设置弹窗的最小宽度，默认0
        maxWidth: '300px', //设置弹窗的最大宽度，默认100%
        height: '',       //设置弹窗的高度，不设置的话默认由弹窗内容决定
        title: '提示语',  //设置弹窗边框的标题 默认为空
        body: '<div style="color:red;">你好</div>', //设置弹窗内容，可由html模板组成 默认为空
        btnLabel: ['确定', '取消'], //设置弹窗底部按钮标题,数组形式，个数最多两个 默认为空
        visible: true,    //设置弹窗初始化时是否显示，默认为true
        isClose: true,    //设置弹窗是否显示右上角的关闭功能，默认为true
        callback: function() {}, //设置弹窗初始化完成后运行的回调函数，默认为空函数
        firstCallback: function() {}, //设置弹窗底部按钮一回调函数，默认为空函数
        secondCallback: function() {} //设置弹窗底部按钮二回调函数，默认为关闭弹窗功能的函数
    });
```
- **控件方法**
```js
//初始化后,通过实例调用
var msg = new msgBox({title: '提示语', body: '你好', visible: false});
msg.openMsg(); //打开弹窗,一般当初始化时visible为false时使用
msg.closeMsg();//关闭弹窗（注意无论调用方法还是手动关闭弹窗，都将销毁弹窗DOM节点，关闭后将无法使用openMsg方法打开）
```