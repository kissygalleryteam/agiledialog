KISSY.add('kg/agiledialog/1.0.0/index',["node","base"],function(S ,require, exports, module) {var t=require("node").all,o=require("base"),e=o.extend({initializer:function(){var t=this;t.buildDom(),t.maskZoom(),t.dialogPos(),t.bindEvent()},getDomStr:function(){var t=this,o="",e=t.get("type");switch(e){case"confirm":o=t._getConfirmHtml();break;case"alert":o=t._getAlertHtml();break;default:o=t._getDialogHtml()}var i='<div id="J_ModalDialog" class="dialogContainer"><div class="maskLayer"></div><div class="modalDialog">'+o+"</div></div>";return i},_getDialogHtml:function(){var t=this,o=t.get("title"),e=t.get("content"),i=t.get("footHtml"),n='<div class="modalHeader"><a href="javascript:;" class="close closeBtn">×</a><h3 class="title">'+o+'</h3></div><div class="modalBody">'+e+"</div>"+i;return n},_getAlertHtml:function(){var t=this,o=t.get("content"),e=(t.get("footHtml"),'<div class="modalBody center">'+o+'</div><div class="modalFooter"><button class="btn saveBtn">确定</button></div>');return e},_getConfirmHtml:function(){var t=this,o=t.get("content"),e=t.get("footHtml"),i='<div class="modalBody center">'+o+"</div>"+e;return i},buildDom:function(){var o=this.getDomStr(),e=this.J_ModalDialog=t(o);t("body").append(e)},maskZoom:function(){var t=window.innerHeight,o=document.body.offsetHeight,e=this.J_ModalDialog.one(".maskLayer");return t>=o?e.css("height",t+"px"):e.css("height",o+"px"),this},dialogPos:function(){{var t=this,o=t.J_ModalDialog.one(".modalDialog"),e=o.height(),i=document.body.scrollTop;window.innerHeight}t.get("posType")&&"absolute"===t.get("posType")?o.css("margin-top",i-e/2+"px"):o.css({"margin-top":-(e/2)+"px"})},bindEvent:function(){var t=this.J_ModalDialog,o=this;t.delegate("click",".closeBtn",function(){o.get("onCancel")&&o.get("onCancel")(),o.destroy()}).delegate("click",".saveBtn",function(){o.get("onConfirm")&&o.get("onConfirm")(),o.destroy()})},destroy:function(){this.J_ModalDialog.remove()}},{ATTRS:{type:{value:"dialog"},title:{value:"Title"},content:{value:"<h3>content</h3>"},footHtml:{value:'<div class="modalFooter"><button class="btn closeBtn">取消</button><button class="btn saveBtn">确定</button></div>'},onCancel:{value:function(){}},onConfirm:{value:function(){}},posType:{value:"fixed"}}});module.exports=e;});