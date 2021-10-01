
import { useDispatch , useSelector} from 'react-redux';
import {deleteTodo, updateTodo , disable , editTodo , isCompleted} from '../redux/action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash,faCheck} from '@fortawesome/free-solid-svg-icons';
import './Todo.css';


function Todo(){
    const dispatch = useDispatch();
    const items= useSelector(state => state.itemsList);
    const newText = useSelector(state=>state.query);
    const searchText = useSelector(state=>state.currentItem.text);
    
    const filteredItems = items.filter(item =>item.text.includes(searchText));
    const listItems = filteredItems.map(item =>{
      return<div className="todo" id={item.key}>
        <input 
        className="checkbox" 
        type="checkbox" 
        checked={item.isCompleted}  
        onClick={(e)=>dispatch(isCompleted({toggle: !item.isCompleted , key : item.key}))}
        />
        <div 
        className="list"
        style={item.isCompleted ? {backgroundColor : "#0cf714"} : {backgroundColor : "#8566aa"}}
        >
        <p>
        <input 
         type="text" 
         id={item.key} 
         Value ={item.text} 
         disabled={item.isDisabled}  
         onChange={(e)=>dispatch(editTodo(e.target.value))}
         />
         
        {item.isDisabled &&
        <span1>
        <FontAwesomeIcon 
        className="faedit"  
        onClick={()=>
        dispatch(disable({ toggleDisable : false , key : item.key, sameText : item.text}))} icon={faEdit} />
        </span1>
         }
         {!item.isDisabled &&
         <span1>
          <FontAwesomeIcon 
          className="faedit" 
           onClick={(e)=>
          {
          {newText!=="" && dispatch(updateTodo({text : newText , key : item.key ,toggleDisable: true }));}
          {newText==="" && dispatch(updateTodo({text : "" , key : item.key , toggleDisable: false }));}
          dispatch(editTodo(""));
          }
          }
        icon={faCheck} 
         />
         </span1>
         }

        <span> 
        <FontAwesomeIcon className="fadelete" onClick={()=>dispatch(deleteTodo(item.key))} icon={faTrash} />
        </span>
        </p>
        </div>
        </div>
    }
    )

    
    

    return <div>{listItems}</div>;
  }

  export default Todo;


