import React,{useRef} from 'react'
import {AiFillEdit} from "react-icons/ai";
import {IoCheckmarkDoneSharp, IoClose} from "react-icons/io5";
import {motion} from "framer-motion";

const TodoItem = (props) => {
    const {item, completeTodo, removeTodo, updateTodo } = props;
    const inputRef = useRef(true);
    const changeFocus = () =>{
        inputRef.current.disabled = false;
        inputRef.current.focus();
    }
    const update = (id, value,e) =>{
        if(e.which === 13){
            //13 is a key code for enter key
            updateTodo({id, item: value});
            inputRef.current.disabled = true;
        }
    }
    return (
        <motion.li 
            initial={{x: "150vw", transition: {type:"spring", duration:2}}}
            animate={{x: 0, transition: {type:"spring", duration:2}}}
            transition={{type:"spring", duration:0.1}}

            whileHover={{
                scale: 0.9,
                transition: {type: "spring", duration: 0.8},
            }}
            exit={{
                x: "-60vw",
                scale: [1, 0],
                transition:{ duration: 1},
            }}
            key={item.id} 
            className="card"
        >
            <textarea 
                ref={inputRef} 
                disabled={inputRef} 
                defaultValue={item.item}  
                onKeyPress = {(e)=> update(item.id, inputRef.current.value, e)}
            />
            <div className="btns">
                <motion.button whileHover={{scale:1.4}} whileFocus={{scale:0.9}} onClick={() => changeFocus()}>{" "}<AiFillEdit />{" "}</motion.button>
                {
                    item.completed === false && (
                        <motion.button whileHover={{scale:1.4}} whileFocus={{scale:0.9}} style={{color:"green"}}onClick={() => completeTodo(item.id)}><IoCheckmarkDoneSharp /></motion.button>
                    )
                }
                <motion.button whileHover={{scale:1.4}} whileFocus={{scale:0.9}} style={{color:"red"}}onClick={() => removeTodo(item.id)}>{" "}<IoClose /></motion.button>{" "}
            </div>
            {item.completed && <span className="completed">Done</span> }
        </motion.li>
    )
}

export default TodoItem
