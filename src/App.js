import React,{Component} from "react";
import './App.css';
import TodoItem from './components/TodoItem';
import tickImg from './img/tick.png';


class App extends Component {
  constructor() {
    super();

    this.state={
      newItem:'',//để xóa trống khi thêm
      todoItems:[
      {title:'Học tiếng anh',},
      {title: 'Học React js'},
      {title:'Tập gym'},
      {title:'Đọc sách'},
      {title:'Đi leo núi'},
    ]
  }

  this.onKeyUp = this.onKeyUp.bind(this);//nhập enter
  this.onChange = this.onChange.bind(this);
}

  onItemClicked(item){
    return (event)=>{
      const isComplete = item.isComplete ;//gán hoàn thành công việc cho item
      const { todoItems} = this. state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems:[
          ...todoItems.slice(0, index),
          { 
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index+1)

        ]
      })
    };
    
  }
  onKeyUp(event){
    
    if(event.keyCode === 13){
    let text = event.target.value;
      if(!text){
        return;
      }
      text = text.trim();
      if(!text){
        return;
      }
      //kiểm tra dữ liệu đầu vào
      this.setState({
          newItem: "",
          todoItems:[
        {title:text,isComplete:false},
        ...this.state.todoItems
      ]
      });
      }
   

  
  }
  onChange(event){
    this.setState({
      newItem:event.target.value
    });

  }
  render(){
  const { todoItems,newItem } = this.state;
  if ( todoItems.length ) {
    return (
        <div className="App">
          <div className="header">
            <img src={tickImg} width={32} height={32} ></img>
            <input 
            value ={newItem}
            onChange={this.onChange} 
            type= "text" 
            placeholder="Nhập công việc vào đây" 
            onKeyUp = {this.onKeyUp}/>
          </div>
          {
            todoItems.length && todoItems.map((item,index)=>

            <TodoItem
             key ={index}
             item ={item} 
             onClick={this.onItemClicked(item)}>

             </TodoItem>)
          }
        </div>
      );
  }
    
  }
}

export default App;
