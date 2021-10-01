import './App.css';
import { useDispatch , useSelector} from 'react-redux';
import Todo from './components/Todo';
import {addTodo,setInput} from './redux/action';
import './App.css';


function App() {

const dispatch = useDispatch();
const currentItem = useSelector(state=> state.currentItem);
var disabledButton = true;
if(currentItem.text ==="" && currentItem.text.trim()==="") disabledButton = true;
else  disabledButton =false;

console.log(currentItem.text)
console.log(disabledButton);
  return (
    <div className="App">
        <header>
          
        <br />
        <h1>TODO List</h1><br />
      <input 
      type="text" 
      placeholder="Enter / Search" 
      value={currentItem.text}
      onChange={(e)=>
        {e.target.value.length>-1 && 
         dispatch(setInput(e.target.value))
        }
      }>
      </input>
      <button 
      disabled={disabledButton}
      onClick={()=>{
        dispatch(addTodo({text : currentItem.text, key : currentItem.key, isDisabled : currentItem.isDisabled}));
        dispatch(setInput(""))}
        }>+</button>
      
     <Todo/>
     </header>
    </div>
  );
}

export default App;
