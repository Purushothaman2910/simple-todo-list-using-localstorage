import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos : [
        {
            id : '' ,
            todo : 'Todo message' ,
            completed : false
        }
    ] ,
    addTodo : (todo) => {} ,
    deleteTodo : (id) => {} ,
    updateTodo : (id , todo) => {} ,
    toggleComplete : (id) => {}
})

const TodoProvider = TodoContext.Provider

function useTodo(){
    return useContext(TodoContext)
}

export { TodoProvider , useTodo }