/**
 * admin 代理报表 玩家详细报表
 * Created by black on 2017/1/10.
 */
define(['common/BaseListPage'], function(BaseListPage) {

    return BaseListPage.extend({

        /**
         * 初始化及构造函数，在子类中采用
         * this._super();
         * 调用
         */
        init: function () {
            this.formSelector = "#mainFrame form";
            this._super("formSelector");
            $('.help-popover').popover();
            this.bindClick();
        },

        /**
         * 页面加载事件函数
         */
        onPageLoad: function () {
            /**
             * super中已经集成了
             *      验证、
             *      排序、
             *      分页、
             *      chosen Select
             * 控件的初始化
             */
            this._super();
            $('.help-popover').popover();
        },

        /**
         * 当前对象事件初始化函数
         */
        bindEvent: function () {
            /**
             * super中已经集成了
             *      列头全选，全不选
             *      自定义列
             *      自定义查询下拉
             * 事件的初始化
             */
            this._super();
        },

        /**
         * 返回上一个页面的回调
         * @param e
         * @param option
         */
        goToLastPage: function (e, option) {
            window.top.topPage.goToLastPage(false);
        },

        /**
         * 导出按钮导出事件
         */
        bindClick: function () {

            //先解绑绑定的事件
            $("#export").unbind();
            var isHidden = $(".tab-detail").length;
            if (isHidden <= 0) {
                //弹窗提示
                $("#export").click(function(e){
                    page.showPopover(e, {}, 'warning', '暂无数据，无法导出', true);
                });
            } else {
                //数据导出
                $("#export").click(function(){
                    var url = root + '/playerDataStatistics/getPlayerDetailExportData.html';
                    var form = document.getElementById("command");
                    form.action = url;
                    form.submit();
                    form.action = root + '/playerDataStatistics/playerDetailList.html';
                });
            }
        },

    });
});