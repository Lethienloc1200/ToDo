import React,{Component} from "react";
import'./TodoItem.css';
import classNames from 'classnames'
import checkCompleteImg from '../img/check.png';
import checkImg from '../img/check-mark.png';

class TodoItem extends Component{

    render(){
    const {item,onClick} = this.props;
    let url = checkImg;
    if(item.isComplete){
        url= checkCompleteImg
    }
   
        return(
            <div className={classNames('TodoItem',{
                'TodoItem-complete':item.isComplete
            })}>
                <img  onClick={onClick} src={url} width = {32} height={32} ></img>
                <p>{this.props.item.title}</p>
            </div>
            
        );
        }

    }
export default TodoItem;