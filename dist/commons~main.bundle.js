(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["commons~main"],{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
//item的css属性
const css = {
    cursor: "pointer",
    border: "solid 1px black",
    width: "100px",
    position: "relative"
};
// 两种 有children和无children
class DropDownBox extends React.Component {
    // 下拉框 本体
    //保存状态
    constructor(props) {
        super(props);
        //点击 显示下拉框
        this.click = (e) => {
            //点击事件
            //点击打开收起
            this.setState({
                isShowDrop: !this.state.isShowDrop
            });
        };
        // 融合 返回
        this.onSubSelected = (s) => {
            //收到下级 融合
            this.setState({
                nowSelected: s,
                isShowDrop: false
            });
            this.props.onSelected && this.props.onSelected(s);
        };
        this.state = {
            isShowDrop: false,
            nowSelected: null
        };
    }
    render() {
        var _a, _b;
        const dropbox = (React.createElement("div", { className: "dropbox" }, this.props.data.map(v => {
            //映射到一个Item
            return (
            // 下拉框列表
            React.createElement(MenuItem, { onSelected: this.onSubSelected, key: v.id, data: v }));
        })));
        // 正常的框 基于Input
        return (React.createElement("div", { style: css },
            React.createElement("div", { onClick: this.click }, (_b = (_a = this.state.nowSelected) === null || _a === void 0 ? void 0 : _a.address) !== null && _b !== void 0 ? _b : "请选择"),
            this.state.isShowDrop ? dropbox : ""));
    }
}
//下拉框中的Item
//MenuItem 即有下级菜单的Item
class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.click = (e) => {
            //选取一个 发出selected事件
            //只有最后一级会发送这个
            if (this.props.data.children)
                return;
            this.props.onSelected({
                id: [this.props.data.id],
                address: this.props.data.text
            });
            // 关闭下拉框
            this.setState({
                isShowDrop: false
            });
        };
        // 融合 返回
        this.onSubSelected = (s) => {
            //收到下级 融合
            this.props.onSelected({
                id: [this.props.data.id, ...s.id],
                address: `${this.props.data.text}${s.address}`
            });
            this.setState({ isShowDrop: false });
        };
        this.state = {
            isShowDrop: false
        };
    }
    render() {
        const dropbox = () => {
            var _a;
            return (React.createElement("div", { className: "dropbox", style: {
                    position: "absolute",
                    left: "100%",
                    top: "0"
                } }, (_a = this.props.data.children) === null || _a === void 0 ? void 0 : _a.map(v => {
                //映射到一个Item
                return (
                // 下拉框列表
                React.createElement(MenuItem, { onSelected: this.onSubSelected, key: v.id, data: v }));
            })));
        };
        return (React.createElement("div", { style: Object.assign({}, css), onMouseEnter: () => { this.setState({ isShowDrop: true }); }, onMouseLeave: () => { this.setState({ isShowDrop: false }); }, onClick: this.click },
            this.props.data.text,
            this.props.data.children ? (React.createElement("span", { style: { float: "right" } }, ">")) : "",
            (this.props.data.children && this.state.isShowDrop) ? dropbox() : ""));
    }
}
const ReactDOM = __importStar(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
const data = [
    {
        id: 1,
        text: "江苏省"
    },
    {
        id: 2,
        text: "中国",
        children: [
            {
                id: 300,
                text: "湖南省",
                children: [
                    {
                        id: 3,
                        text: "岳阳市"
                    },
                    {
                        id: 4,
                        text: "岳阳市2"
                    },
                    {
                        id: 5,
                        text: "岳阳市3"
                    }
                ]
            }
        ]
    }
];
ReactDOM.render(React.createElement(DropDownBox, { data: data, onSelected: (s) => { alert(JSON.stringify(s)); } }), document.querySelector("main"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQThCO0FBYTlCLFlBQVk7QUFDWixNQUFNLEdBQUcsR0FBcUI7SUFDMUIsTUFBTSxFQUFDLFNBQVM7SUFDaEIsTUFBTSxFQUFDLGlCQUFpQjtJQUN4QixLQUFLLEVBQUMsT0FBTztJQUNiLFFBQVEsRUFBQyxVQUFVO0NBQ3RCLENBQUE7QUFDRCx5QkFBeUI7QUFDekIsTUFBTSxXQUFZLFNBQVEsS0FBSyxDQUFDLFNBTTlCO0lBQ0UsU0FBUztJQUNULE1BQU07SUFDTixZQUFZLEtBQUs7UUFDYixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFNaEIsVUFBVTtRQUNWLFVBQUssR0FBQyxDQUFDLENBQThDLEVBQUUsRUFBRTtZQUNyRCxNQUFNO1lBQ04sUUFBUTtZQUNSLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsVUFBVSxFQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO2FBQ3BDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQTtRQUNELFFBQVE7UUFDUixrQkFBYSxHQUFDLENBQUMsQ0FBWSxFQUFDLEVBQUU7WUFDMUIsU0FBUztZQUNULElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsV0FBVyxFQUFDLENBQUM7Z0JBQ2IsVUFBVSxFQUFDLEtBQUs7YUFDbkIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFBO1FBckJHLElBQUksQ0FBQyxLQUFLLEdBQUM7WUFDUCxVQUFVLEVBQUMsS0FBSztZQUNoQixXQUFXLEVBQUMsSUFBSTtTQUNuQixDQUFBO0lBQ0wsQ0FBQztJQWtCRCxNQUFNOztRQUNGLE1BQU0sT0FBTyxHQUFDLENBQ1Ys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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQSxrQ0FBa0Msb0NBQW9DLGFBQWEsRUFBRSxFQUFFO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EseUNBQXlDLDZCQUE2QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCwyQkFBMkIsbUJBQU8sQ0FBQyw0Q0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsdUJBQXVCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxxREFBcUQ7QUFDaEcsU0FBUztBQUNUO0FBQ0EsNENBQTRDLGFBQWE7QUFDekQsd0NBQXdDLHNCQUFzQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQixFQUFFLFVBQVU7QUFDN0QsYUFBYTtBQUNiLDJCQUEyQixvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MscURBQXFEO0FBQ3BHLGFBQWE7QUFDYjtBQUNBLDRDQUE0Qyx3QkFBd0IsNkJBQTZCLGdCQUFnQixtQkFBbUIsRUFBRSxFQUFFLHVCQUF1QixnQkFBZ0Isb0JBQW9CLEVBQUUsRUFBRSx1QkFBdUI7QUFDOU47QUFDQSxxRUFBcUUsU0FBUyxpQkFBaUIsRUFBRTtBQUNqRztBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUJBQU8sQ0FBQyxvREFBVztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsaUNBQWlDLDBCQUEwQixFQUFFLEVBQUU7QUFDakgsMkNBQTJDLCtsSyIsImZpbGUiOiJjb21tb25zfm1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufSk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbi8vaXRlbeeahGNzc+WxnuaAp1xyXG5jb25zdCBjc3MgPSB7XHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgYm9yZGVyOiBcInNvbGlkIDFweCBibGFja1wiLFxyXG4gICAgd2lkdGg6IFwiMTAwcHhcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcclxufTtcclxuLy8g5Lik56eNIOaciWNoaWxkcmVu5ZKM5pegY2hpbGRyZW5cclxuY2xhc3MgRHJvcERvd25Cb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgLy8g5LiL5ouJ5qGGIOacrOS9k1xyXG4gICAgLy/kv53lrZjnirbmgIFcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIC8v54K55Ye7IOaYvuekuuS4i+aLieahhlxyXG4gICAgICAgIHRoaXMuY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAvL+eCueWHu+S6i+S7tlxyXG4gICAgICAgICAgICAvL+eCueWHu+aJk+W8gOaUtui1t1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzU2hvd0Ryb3A6ICF0aGlzLnN0YXRlLmlzU2hvd0Ryb3BcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyDono3lkIgg6L+U5ZueXHJcbiAgICAgICAgdGhpcy5vblN1YlNlbGVjdGVkID0gKHMpID0+IHtcclxuICAgICAgICAgICAgLy/mlLbliLDkuIvnuqcg6J6N5ZCIXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbm93U2VsZWN0ZWQ6IHMsXHJcbiAgICAgICAgICAgICAgICBpc1Nob3dEcm9wOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdGVkICYmIHRoaXMucHJvcHMub25TZWxlY3RlZChzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzU2hvd0Ryb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBub3dTZWxlY3RlZDogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICBjb25zdCBkcm9wYm94ID0gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZHJvcGJveFwiIH0sIHRoaXMucHJvcHMuZGF0YS5tYXAodiA9PiB7XHJcbiAgICAgICAgICAgIC8v5pig5bCE5Yiw5LiA5LiqSXRlbVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAvLyDkuIvmi4nmoYbliJfooahcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwgeyBvblNlbGVjdGVkOiB0aGlzLm9uU3ViU2VsZWN0ZWQsIGtleTogdi5pZCwgZGF0YTogdiB9KSk7XHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgICAvLyDmraPluLjnmoTmoYYg5Z+65LqOSW5wdXRcclxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogY3NzIH0sXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBvbkNsaWNrOiB0aGlzLmNsaWNrIH0sIChfYiA9IChfYSA9IHRoaXMuc3RhdGUubm93U2VsZWN0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRyZXNzKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcIuivt+mAieaLqVwiKSxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc1Nob3dEcm9wID8gZHJvcGJveCA6IFwiXCIpKTtcclxuICAgIH1cclxufVxyXG4vL+S4i+aLieahhuS4reeahEl0ZW1cclxuLy9NZW51SXRlbSDljbPmnInkuIvnuqfoj5zljZXnmoRJdGVtXHJcbmNsYXNzIE1lbnVJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAvL+mAieWPluS4gOS4qiDlj5Hlh7pzZWxlY3RlZOS6i+S7tlxyXG4gICAgICAgICAgICAvL+WPquacieacgOWQjuS4gOe6p+S8muWPkemAgei/meS4qlxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kYXRhLmNoaWxkcmVuKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0ZWQoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IFt0aGlzLnByb3BzLmRhdGEuaWRdLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczogdGhpcy5wcm9wcy5kYXRhLnRleHRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIOWFs+mXreS4i+aLieahhlxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzU2hvd0Ryb3A6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8g6J6N5ZCIIOi/lOWbnlxyXG4gICAgICAgIHRoaXMub25TdWJTZWxlY3RlZCA9IChzKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5pS25Yiw5LiL57qnIOiejeWQiFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0ZWQoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IFt0aGlzLnByb3BzLmRhdGEuaWQsIC4uLnMuaWRdLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczogYCR7dGhpcy5wcm9wcy5kYXRhLnRleHR9JHtzLmFkZHJlc3N9YFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzU2hvd0Ryb3A6IGZhbHNlIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNTaG93RHJvcDogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGRyb3Bib3ggPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImRyb3Bib3hcIiwgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogXCIwXCJcclxuICAgICAgICAgICAgICAgIH0gfSwgKF9hID0gdGhpcy5wcm9wcy5kYXRhLmNoaWxkcmVuKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWFwKHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy/mmKDlsITliLDkuIDkuKpJdGVtXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgLy8g5LiL5ouJ5qGG5YiX6KGoXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7IG9uU2VsZWN0ZWQ6IHRoaXMub25TdWJTZWxlY3RlZCwga2V5OiB2LmlkLCBkYXRhOiB2IH0pKTtcclxuICAgICAgICAgICAgfSkpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBjc3MpLCBvbk1vdXNlRW50ZXI6ICgpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IGlzU2hvd0Ryb3A6IHRydWUgfSk7IH0sIG9uTW91c2VMZWF2ZTogKCkgPT4geyB0aGlzLnNldFN0YXRlKHsgaXNTaG93RHJvcDogZmFsc2UgfSk7IH0sIG9uQ2xpY2s6IHRoaXMuY2xpY2sgfSxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhLnRleHQsXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YS5jaGlsZHJlbiA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlOiB7IGZsb2F0OiBcInJpZ2h0XCIgfSB9LCBcIj5cIikpIDogXCJcIixcclxuICAgICAgICAgICAgKHRoaXMucHJvcHMuZGF0YS5jaGlsZHJlbiAmJiB0aGlzLnN0YXRlLmlzU2hvd0Ryb3ApID8gZHJvcGJveCgpIDogXCJcIikpO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IFJlYWN0RE9NID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xyXG5jb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIHRleHQ6IFwi5rGf6IuP55yBXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgdGV4dDogXCLkuK3lm71cIixcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMzAwLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCLmuZbljZfnnIFcIixcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLlsrPpmLPluIJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLlsrPpmLPluIIyXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwi5bKz6Ziz5biCM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5dO1xyXG5SZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wRG93bkJveCwgeyBkYXRhOiBkYXRhLCBvblNlbGVjdGVkOiAocykgPT4geyBhbGVydChKU09OLnN0cmluZ2lmeShzKSk7IH0gfSksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwYzNnaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJRVUVzTmtOQlFUaENPMEZCWVRsQ0xGbEJRVms3UVVGRFdpeE5RVUZOTEVkQlFVY3NSMEZCY1VJN1NVRkRNVUlzVFVGQlRTeEZRVUZETEZOQlFWTTdTVUZEYUVJc1RVRkJUU3hGUVVGRExHbENRVUZwUWp0SlFVTjRRaXhMUVVGTExFVkJRVU1zVDBGQlR6dEpRVU5pTEZGQlFWRXNSVUZCUXl4VlFVRlZPME5CUTNSQ0xFTkJRVUU3UVVGRFJDeDVRa0ZCZVVJN1FVRkRla0lzVFVGQlRTeFhRVUZaTEZOQlFWRXNTMEZCU3l4RFFVRkRMRk5CVFRsQ08wbEJRMFVzVTBGQlV6dEpRVU5VTEUxQlFVMDdTVUZEVGl4WlFVRlpMRXRCUVVzN1VVRkRZaXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVRTdVVUZOYUVJc1ZVRkJWVHRSUVVOV0xGVkJRVXNzUjBGQlF5eERRVUZETEVOQlFUaERMRVZCUVVVc1JVRkJSVHRaUVVOeVJDeE5RVUZOTzFsQlEwNHNVVUZCVVR0WlFVTlNMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU03WjBKQlExWXNWVUZCVlN4RlFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFZRVUZWTzJGQlEzQkRMRU5CUVVNc1EwRkJRVHRSUVVOT0xFTkJRVU1zUTBGQlFUdFJRVU5FTEZGQlFWRTdVVUZEVWl4clFrRkJZU3hIUVVGRExFTkJRVU1zUTBGQldTeEZRVUZETEVWQlFVVTdXVUZETVVJc1UwRkJVenRaUVVOVUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTTdaMEpCUTFZc1YwRkJWeXhGUVVGRExFTkJRVU03WjBKQlEySXNWVUZCVlN4RlFVRkRMRXRCUVVzN1lVRkRia0lzUTBGQlF5eERRVUZETzFsQlEwZ3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhWUVVGVkxFbEJRVVVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGNFUXNRMEZCUXl4RFFVRkJPMUZCY2tKSExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVTTdXVUZEVUN4VlFVRlZMRVZCUVVNc1MwRkJTenRaUVVOb1FpeFhRVUZYTEVWQlFVTXNTVUZCU1R0VFFVTnVRaXhEUVVGQk8wbEJRMHdzUTBGQlF6dEpRV3RDUkN4TlFVRk5PenRSUVVOR0xFMUJRVTBzVDBGQlR5eEhRVUZETEVOQlExWXNOa0pCUVVzc1UwRkJVeXhGUVVGRExGTkJRVk1zU1VGRFppeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZCTEVWQlFVVTdXVUZEY0VJc1YwRkJWenRaUVVOWUxFOUJRVTg3V1VGRFNDeFJRVUZSTzFsQlExSXNiMEpCUVVNc1VVRkJVU3hKUVVGRExGVkJRVlVzUlVGQlJTeEpRVUZKTEVOQlFVTXNZVUZCWVN4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVdFc1EwRkROVVVzUTBGQlFUdFJRVU5NTEVOQlFVTXNRMEZCUXl4RFFVTkJMRU5CUTJJc1EwRkJRenRSUVVOR0xHVkJRV1U3VVVGRFppeFBRVUZQTEVOQlEwZ3NOa0pCUVVzc1MwRkJTeXhGUVVGRkxFZEJRVWM3V1VGRFdDdzJRa0ZCU3l4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzWjBKQlEyNUNMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVjBGQlZ5d3dRMEZCUlN4UFFVRlBMRzFEUVVGRkxFdEJRVXNzUTBGRGNrTTdXVUZEVEN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGVkJRVlVzUTBGQlFTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkJMRU5CUVVNc1EwRkJRU3hGUVVGRkxFTkJRMmhETEVOQlNWUXNRMEZCUVR0SlFVTk1MRU5CUVVNN1EwRkRTanRCUVU5RUxGZEJRVmM3UVVGRldDeHpRa0ZCYzBJN1FVRkRkRUlzVFVGQlRTeFJRVUZUTEZOQlFWTXNTMEZCU3l4RFFVRkRMRk5CUlRWQ08wbEJRMFVzV1VGQldTeExRVUZMTzFGQlEySXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGQk8xRkJTMmhDTEZWQlFVc3NSMEZCUXl4RFFVRkRMRU5CUVRoRExFVkJRVU1zUlVGQlJUdFpRVU53UkN4dFFrRkJiVUk3V1VGRGJrSXNZVUZCWVR0WlFVTmlMRWxCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVR0blFrRkJSU3hQUVVGUE8xbEJRM0JETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRE8yZENRVU5zUWl4RlFVRkZMRVZCUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNN1owSkJRM1pDTEU5QlFVOHNSVUZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTzJGQlF5OUNMRU5CUVVNc1EwRkJRenRaUVVOSUxGRkJRVkU3V1VGRFVpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRPMmRDUVVOV0xGVkJRVlVzUlVGQlF5eExRVUZMTzJGQlEyNUNMRU5CUVVNc1EwRkJRVHRSUVVOT0xFTkJRVU1zUTBGQlFUdFJRVU5FTEZGQlFWRTdVVUZEVWl4clFrRkJZU3hIUVVGRExFTkJRVU1zUTBGQldTeEZRVUZETEVWQlFVVTdXVUZETVVJc1UwRkJVenRaUVVOVUxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRPMmRDUVVOc1FpeEZRVUZGTEVWQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVWQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8yZENRVU12UWl4UFFVRlBMRVZCUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJUdGhRVU5vUkN4RFFVRkRMRU5CUVVNN1dVRkRTQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVTXNWVUZCVlN4RlFVRkRMRXRCUVVzc1JVRkJReXhEUVVGRExFTkJRVU03VVVGRGRFTXNRMEZCUXl4RFFVRkJPMUZCZWtKSExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVTTdXVUZEVUN4VlFVRlZMRVZCUVVNc1MwRkJTenRUUVVOdVFpeERRVUZCTzBsQlEwd3NRMEZCUXp0SlFYVkNSQ3hOUVVGTk8xRkJRMFlzVFVGQlRTeFBRVUZQTEVkQlFVTXNSMEZCUlN4RlFVRkZPenRaUVVGQkxFOUJRVUVzUTBGRFpDdzJRa0ZCU3l4VFFVRlRMRVZCUVVNc1UwRkJVeXhGUVVGRExFdEJRVXNzUlVGQlJUdHZRa0ZETlVJc1VVRkJVU3hGUVVGRExGVkJRVlU3YjBKQlEyNUNMRWxCUVVrc1JVRkJReXhOUVVGTk8yOUNRVU5ZTEVkQlFVY3NSVUZCUXl4SFFVRkhPMmxDUVVOV0xGVkJRMGtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3d3UTBGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkJMRVZCUVVVN1owSkJRemxDTEZkQlFWYzdaMEpCUTFnc1QwRkJUenRuUWtGRFNDeFJRVUZSTzJkQ1FVTlNMRzlDUVVGRExGRkJRVkVzU1VGQlF5eFZRVUZWTEVWQlFVVXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGaExFTkJRelZGTEVOQlFVRTdXVUZEVEN4RFFVRkRMRVZCUTBNc1EwRkRWQ3hEUVVGQk8xTkJRVUVzUTBGQlFUdFJRVU5FTEU5QlFVOHNRMEZEU0N3MlFrRkJTeXhMUVVGTExHOUNRVUZOTEVkQlFVY3NSMEZEWml4WlFVRlpMRVZCUVVVc1IwRkJSU3hGUVVGRkxFZEJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkRMRlZCUVZVc1JVRkJReXhKUVVGSkxFVkJRVU1zUTBGQlF5eERRVUZCTEVOQlFVRXNRMEZCUXl4RlFVTndSQ3haUVVGWkxFVkJRVVVzUjBGQlJTeEZRVUZGTEVkQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRExGVkJRVlVzUlVGQlF5eExRVUZMTEVWQlFVTXNRMEZCUXl4RFFVRkJMRU5CUVVFc1EwRkJReXhGUVVOeVJDeFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzN1dVRkRiRUlzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTVHRaUVVWd1FpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVUVzUTBGQlF5eERRVUZCTEVOQlEzUkNMRGhDUVVGTkxFdEJRVXNzUlVGQlJTeEZRVUZETEV0QlFVc3NSVUZCUXl4UFFVRlBMRVZCUVVNc1VVRkZja0lzUTBGRFZpeERRVUZCTEVOQlFVTXNRMEZCUVN4RlFVRkZPMWxCUlVnc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVFc1QwRkJUeXhGUVVGRkxFTkJRVUVzUTBGQlF5eERRVUZCTEVWQlFVVXNRMEZITjBRc1EwRkRWQ3hEUVVGQk8wbEJRMHdzUTBGQlF6dERRVU5LTzBGQlJVUXNiMFJCUVhGRE8wRkJSWEpETEUxQlFVMHNTVUZCU1N4SFFVRlpPMGxCUTJ4Q08xRkJRMGtzUlVGQlJTeEZRVUZETEVOQlFVTTdVVUZEU2l4SlFVRkpMRVZCUVVNc1MwRkJTenRMUVVOaU8wbEJRMFE3VVVGRFNTeEZRVUZGTEVWQlFVTXNRMEZCUXp0UlFVTktMRWxCUVVrc1JVRkJReXhKUVVGSk8xRkJRMVFzVVVGQlVTeEZRVUZETzFsQlEwdzdaMEpCUTBrc1JVRkJSU3hGUVVGRExFZEJRVWM3WjBKQlEwNHNTVUZCU1N4RlFVRkRMRXRCUVVzN1owSkJRMVlzVVVGQlVTeEZRVUZETzI5Q1FVTk1PM2RDUVVOSkxFVkJRVVVzUlVGQlF5eERRVUZETzNkQ1FVTktMRWxCUVVrc1JVRkJReXhMUVVGTE8zRkNRVU5pTzI5Q1FVTkVPM2RDUVVOSkxFVkJRVVVzUlVGQlF5eERRVUZETzNkQ1FVTktMRWxCUVVrc1JVRkJReXhOUVVGTk8zRkNRVU5rTzI5Q1FVTkVPM2RDUVVOSkxFVkJRVVVzUlVGQlF5eERRVUZETzNkQ1FVTktMRWxCUVVrc1JVRkJReXhOUVVGTk8zRkNRVU5rTzJsQ1FVTktPMkZCUTBvN1UwRkRTanRMUVVOS08wTkJRMG9zUTBGQlFUdEJRVU5FTEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc2IwSkJRVU1zVjBGQlZ5eEpRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZETEVWQlFVVXNSMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkJMRU5CUVVFc1EwRkJReXhIUVVGblFpeEZRVUZETEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlFTSjkiXSwic291cmNlUm9vdCI6IiJ9