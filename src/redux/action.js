export const setInput=(input)=>{
    return {
        type:"SET_INPUT",
        payload : input
      }
}

export const addTodo=(item)=>{
    return {
        type:"ADD_TODO",
        payload : item
      }
}

export const updateTodo=(text)=>{
  return {
      type:"UPDATE_TODO",
      payload : text
    }
}

export const deleteTodo=(key)=>{
  return{
    type : "DELETE_TODO",
    payload : key
  }
}

export const editTodo =(inputText)=>{
  return{
    type : "SET_QUERY",
    payload : inputText
  }
}

export const disable=(toggle)=>{
  return{
    type : "SET_DISABLE",
    payload : toggle
  }
}

export const isCompleted=(check)=>{
  return{
    type : "SET_COMPLETE",
    payload : check
  }
}






