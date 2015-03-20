var Node = require('node');
var DOM = require('dom');
var Base = require('base');
require('./index.css');

var Agiledialog = Base.extend({
    initializer: function () {
        var self = this;
        self.buildDom();
        self.maskZoom();
        self.dialogPos();
        self.bindEvent();
    },
    //获取结构str
    getDomStr: function () {
        var self = this,
            html = '', //this.get('html'),
            skin = self.get('skin'),
            type = self.get('type');
        switch (type) {
            case 'confirm':
                html = self._getConfirmHtml();
                break;
            case 'alert':
                html = self._getAlertHtml();
                break;
            case 'alertPretty':
                html = self._getAlertHasCloseHtml();
                break;
            default:
                html = self._getDialogHtml();
                break;
        }
        var finishHtml = '<div id="J_ModalDialog" class="dialogContainer ' + skin + '">' +
            '<div class="maskLayer"></div>' +
            '<div class="modalDialog">' + html + '</div>' +
            '</div>';
        return finishHtml;

    },
    _getDialogHtml: function () {
        var self = this,
            title = self.get('title'),
            content = self.get('content'),
            footHtml = self.get('footHtml'),
            html = '<div class="modalHeader">' +
                '<a href="javascript:;" class="close closeBtn">×</a>' +
                '<h3 class="title">' + title + '</h3>' +
                '</div>' +
                '<div class="modalBody">' + content + '</div>' + footHtml;
        return html;
    },
    _getAlertHtml: function () {
        var self = this,
            content = self.get('content'),
            footHtml = self.get('footHtml'),
            html =
                '<div class="modalHeader alertHeader">' +
                '<a href="javascript:;" class="close closeBtn">×</a>' +
                '</div>' +
                '<div class="modalBody center">' + content + '</div>' +
                '<div class="modalFooter"><button class="btn saveBtn">确定</button></div>';
        return html;
    },
    _getAlertHasCloseHtml: function () {
        var self = this,
            content = self.get('content'),
            html =
                '<div class="modalHeader alertHeader">' +
                '<a href="javascript:;" class="close closeBtn">×</a>' +
                '</div>' +
                '<div class="modalBody center">' + content + '</div>' +
                '<div class="modalFooter"><button class="btn saveBtn">确定</button></div>';
        return html;
    },
    _getConfirmHtml: function () {
        var self = this,

            content = self.get('content'),
            footHtml = self.get('footHtml'),
            html = '<div class="modalBody center">' + content + '</div>' + footHtml;
        return html;
    },
    //创建dom结构
    buildDom: function () {
        var html = this.getDomStr();
        var htmlDom = this.J_ModalDialog = Node(html);
        Node.all('body').append(htmlDom);
    },
    //初始化蒙层
    maskZoom: function () {
        /*
         var viewSize = window.innerHeight,
         bodySize = document.body.offsetHeight;
         var mask = this.J_ModalDialog.one('.maskLayer');

         if (viewSize >= bodySize) {
         mask.css('height', viewSize + 'px');
         } else {
         mask.css('height', bodySize + 'px');
         }
         */
        var height = DOM.viewportHeight();
        var mask = this.J_ModalDialog.one('.maskLayer');
        mask.css('height', height);

        return this;
    },
    //设置dialog 的位置
    dialogPos: function () {
        var self = this;
        var box = self.J_ModalDialog.one('.modalDialog');
        var size = box.height();
        var scrollTop = document.body.scrollTop;
        var viewSize = window.innerHeight;
        //IE6不考虑

        //绝对定位布局 position:absolute
        if (self.get('posType') && self.get('posType') === 'absolute') {
            box.css('margin-top', scrollTop - (size / 2) + 'px');
        } else {
            box.css({
                'margin-top': -(size / 2) + 'px'
            });
        }
    },
    //事件绑定
    bindEvent: function () {
        var dialog = this.J_ModalDialog;
        var self = this;
        dialog.delegate('click', '.closeBtn', function () {
            self.get('onCancel') && self.get('onCancel')();
            self.destroy();
        }).delegate('click', '.saveBtn', function () {
            self.get('onConfirm') && self.get('onConfirm')();
            self.destroy();
        })
    },
    destroy: function () {
        this.J_ModalDialog.remove();
    }
}, {
    ATTRS: {
        type: {
            value: 'dialog' //默认dialog || confirm || alert
        },
        title: {
            value: 'Title'
        },
        content: {
            value: '<h3>content</h3>' //string
        },
        footHtml: {
            value: '<div class="modalFooter">' +
                '<button class="btn closeBtn">取消</button>' +
                '<button class="btn saveBtn">确定</button>' +
                '</div>'
        },
        onCancel: {
            value: function () {
            }
        },
        onConfirm: {
            value: function () {
            }
        },
        posType: {
            value: 'fixed' // absolute 默认固定布局
        },
        skin: {
            value: ''
        }
    }
});

module.exports = Agiledialog;
