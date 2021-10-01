const initialList=()=>{
  const list=localStorage.getItem("todoList");
  let todoList =[];
  if(list)
  todoList = JSON.parse(list);
  return todoList;
}


const initialState =
{
    itemsList : initialList(),
    currentItem:{
        text:'',
        key:'',
      },
    query : ""
}

export const reducer=(state=initialState, {type,payload})=>{
switch(type)
{
    case "SET_INPUT":
    return {...state, currentItem : { text : payload , key : Date.now() , isDisabled : true , completed : false}};

    case "ADD_TODO" :
    if(payload.text!=="" && payload.text.trim()!=="")
    {
      localStorage.setItem("todoList", JSON.stringify([...state.itemsList, payload]))
      return {...state, itemsList : [...state.itemsList, payload]}
    }
   
    case "UPDATE_TODO":
    state.itemsList.map((item) => 
            {  
               if(item.key===payload.key)
               {
                if(!payload.toggleDisable)
                alert("TODO FIELD CANNOT BE EMPTY");
                else
                item.text=payload.text
                item.isDisabled = payload.toggleDisable
               } 
             }
             )
    localStorage.setItem("todoList", JSON.stringify([...state.itemsList]))
    return{...state, itemsList :  [...state.itemsList]}

    case "DELETE_TODO" :
    const updatedList = state.itemsList.filter(item => item.key !==payload);
    localStorage.setItem("todoList", JSON.stringify(updatedList))
    return {...state ,itemsList : updatedList}

    case "SET_DISABLE" :
        state.itemsList.map((item) => 
        {  
           if(item.key===payload.key)
           {
            item.isDisabled=payload.toggleDisable
           }
          
         })
    return{...state, itemsList : [...state.itemsList] , query : payload.sameText}

    case "SET_QUERY":
    return {...state, query: payload}

    case "SET_COMPLETE" :
      state.itemsList.map((item) => 
            {  
               if(item.key===payload.key)
               {
                item.isCompleted = payload.toggle
               } 
             }
             )
      localStorage.setItem("todoList", JSON.stringify([...state.itemsList]))
      return {...state, itemsList :  [...state.itemsList]}

    default:
    return state
}
}

