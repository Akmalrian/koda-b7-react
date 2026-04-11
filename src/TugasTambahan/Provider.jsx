import { Children } from "react";
import TodosContext from "./context.js"

const initialState ={
    todos: [],
};

function TodosProvider({Children}) {
const [state, dispath] = useReducer((prevState, {type, payLoad}) => {
    switch (type){
        case "ADD_TODO":
            const newTodo = {
                ...payLoad,
                id: prevState.lastId + 1
            };
            return{
                ...prevState,
                todos
            }
        }
        case "REMOVE_TODO":
            return {
                ...prevState,
                todos: prevState.todos.filter((todo) => todo.id !== payLoad),
            }
            case "TOGGLE_TODO":
                return {
                    ...prevState,
                    todos: prevState.todos.map(todo => {
                        if (todo.id === payLoad) {
                            return {
                                ...todo,
                                finished: !todo.isFinished,
                            };
                        }
                        return todo;
                    })
                };
                default:
                    return prevState;
    }
})

    return <TodosContext.Provider>{Children}</TodosContext.Provider>
}