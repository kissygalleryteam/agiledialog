## 综述

Agiledialog灵活的，可爱的弹出层插件。

不支持IE6



## 初始化组件
    var S = KISSY;
        S.config({
            packages:[
                {
                    name:"kg",
                    path:"http://g.tbcdn.cn/kg/",
                    charset:"utf-8",
                    ignorePackageNameInUri:true
                }
            ]
        });
		
    S.use('kg/agiledialog/1.0.2/index', function (S, Agiledialog) {
        //Dialog 默认
         var dialog = new Agiledialog({
            title:'dialogTitle',
            content:'dialogContent',
            onConfirm:function(){},
            onCancel:function(){}
         });
         var alert = new Agiledialog({
            type:'alert',
            content:"alertText"
         });
         var alert = new Agiledialog({
             type:'confirm',
             content:"alertText"
         });
    })

## API说明
type:设置弹出层类型 alert||confirm||dialog

onCancel:function(){} 取消按钮的回调函数

onConfirm:function(){}确认按钮的回调函数

title:dialog弹出层标题
content:弹出层文本内容
footHtml:可自定义按钮 提示(取消按钮必须有closeBtn 确定按钮必须有saveBtn)
posType:弹窗定位类型 fixed||absolute 默认fixed