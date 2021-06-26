import React, {useState} from "react";
import {connect} from "react-redux";
import {addTodos} from "../Redux/Reducer";
import {GoPlus} from "react-icons/go";
import {motion} from "framer-motion";

const mapStateToProps = (state) =>{
    return{
        todos: state,
    };
};
const mapDispatchToProps = (dispatch) =>{
    return{
        addTodo: (obj)=> dispatch(addTodos(obj)),
    };
};


const Todos = (props) => {
    const [todo, setTodo] = useState("");
    
    const handleChange = (e) =>{
        setTodo(e.target.value);
    }
    const add = () =>{
        if(todo === ""){
            alert("Input is Empty")
        }else{    
            props.addTodo({
                id: Math.floor(Math.random()*1000),
                item: todo,
                completed: false,
            }) 
            setTodo("");
        }
    }
    return (
        <div className="addTodos">
            <input className="todo-input" type="text" onChange={(e)=>handleChange(e)} value={todo}/>
            <motion.button 
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                className="add-btn" onClick={()=> add()}
            >
                <GoPlus />
            </motion.button>
            <br />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
