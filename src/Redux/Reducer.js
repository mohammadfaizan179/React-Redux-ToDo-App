import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const addTodoReduce = createSlice({
    name: "todos",
    initialState:initialState,
    reducers:{
        //Adding Todos
        addTodos: (state, action) =>{
            state.push(action.payload);
            return state
        }, 
        //Removing Todos
        removeTodos: (state, action)=>{
            return state.filter((item) => item.id !== action.payload);
        },
        // Update Todos
        updateTodos: (state, action)=>{
            return state.map((todo)=>{
                if(todo.id === action.payload.id){
                    return{
                        ...todo,
                        item: action.payload.id,
                    };
                }
                return todo;
            });
        },
        completeTodos: (state, action)=>{
            return state.map((todo)=>{
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        completed: true,
                    };
                }
                return todo;
            });
        },
        
    },
});

export const {addTodos, removeTodos, updateTodos, completeTodos} = addTodoReduce.actions;
export const reducer = addTodoReduce.reducer;
