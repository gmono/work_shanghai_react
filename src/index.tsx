import * as React from "react"
// 多级下拉
//菜单项
interface ItemData{
    id:number;
    text:string;
    //子菜单
    children?:ItemData[];
}
type SelectData={
    address:string;
    id:number[];
}
//item的css属性
const css:React.CSSProperties={
    cursor:"pointer",
    border:"solid 1px black",
    width:"100px",
    position:"relative"
}
// 两种 有children和无children
class DropDownBox extends React.Component<{
    data:ItemData[]; 
    onSelected?:(s:SelectData)=>any
},{
    nowSelected?:SelectData,
    isShowDrop:boolean
}>{
    // 下拉框 本体
    //保存状态
    constructor(props){
        super(props)
        this.state={
            isShowDrop:false,
            nowSelected:null
        }
    }
    //点击 显示下拉框
    click=(e:React.MouseEvent<HTMLDivElement, MouseEvent> )=>{
        //点击事件
        //点击打开收起
        this.setState({
            isShowDrop:!this.state.isShowDrop
        })
    }
    // 融合 返回
    onSubSelected=(s:SelectData)=>{
        //收到下级 融合
        this.setState({
            nowSelected:s,
            isShowDrop:false
        });
        this.props.onSelected&&this.props.onSelected(s);
    }
    render(){
        const dropbox=(
            <div className="dropbox">
                    {this.props.data.map(v=>{
                        //映射到一个Item
                        return (
                            // 下拉框列表
                            <MenuItem onSelected={this.onSubSelected} key={v.id} data={v}></MenuItem>
                        )
                    })}
                </div>
        );
        // 正常的框 基于Input
        return (
            <div style={css}>
                <div onClick={this.click}>
                    {this.state.nowSelected?.address??"请选择"}
                </div>
                {this.state.isShowDrop? dropbox:""}
            </div>
            

            
        )
    }
}


interface ItemProps{
    data:ItemData;
    onSelected:(s:SelectData)=>any;
}
//下拉框中的Item

//MenuItem 即有下级菜单的Item
class MenuItem extends  React.Component<ItemProps,{
    isShowDrop:boolean
}>{
    constructor(props){
        super(props)
        this.state={
            isShowDrop:false
        }
    }
    click=(e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        //选取一个 发出selected事件
        //只有最后一级会发送这个
        if(this.props.data.children) return;
        this.props.onSelected({
            id:[this.props.data.id],
            address:this.props.data.text
        });
        // 关闭下拉框
        this.setState({
            isShowDrop:false
        })
    }
    // 融合 返回
    onSubSelected=(s:SelectData)=>{
        //收到下级 融合
        this.props.onSelected({
            id:[this.props.data.id,...s.id],
            address:`${this.props.data.text}${s.address}`
        });
        this.setState({isShowDrop:false});
    }
    render(){
        const dropbox=()=>(
            <div className="dropbox" style={{
                position:"absolute",
                left:"100%",
                top:"0"
            }}>
                {this.props.data.children?.map(v=>{
                    //映射到一个Item
                    return (
                        // 下拉框列表
                        <MenuItem onSelected={this.onSubSelected} key={v.id} data={v}></MenuItem>
                    )
                })}
            </div>
        )
        return (
            <div style={{...css}}
                onMouseEnter={()=>{this.setState({isShowDrop:true})}}
                onMouseLeave={()=>{this.setState({isShowDrop:false})}}
                onClick={this.click}>
                {this.props.data.text}
                {/* 小图标 */}
                {this.props.data.children?(
                    <span style={{float:"right"}}>
                        &gt;
                    </span>
                ):""}

                {(this.props.data.children&&this.state.isShowDrop)?dropbox():""}
                
                
            </div>
        )
    }
}

import * as ReactDOM from "react-dom"

const data:ItemData[]=[
    {
        id:1,
        text:"江苏省"
    },
    {
        id:2,
        text:"中国",
        children:[
            {
                id:300,
                text:"湖南省",
                children:[
                    {
                        id:3,
                        text:"岳阳市"
                    },
                    {
                        id:4,
                        text:"岳阳市2"
                    },
                    {
                        id:5,
                        text:"岳阳市3"
                    }
                ]
            }
        ]
    }
]
ReactDOM.render(<DropDownBox data={data} onSelected={(s)=>{alert(JSON.stringify(s))}}></DropDownBox>,document.querySelector("main"))