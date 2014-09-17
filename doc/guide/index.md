## 综述

Agiledialog。

不支持IE6

## 初始化组件
		
    S.use('kg/agiledialog/1.0.0/index', function (S, Agiledialog) {
        //Dialog 默认
         var dialog = new Agiledialog({
            title:'dialogTitle',
            content:'dialogContent'
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
