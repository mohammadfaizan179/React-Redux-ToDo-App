import './CSS/Main.css';
import ToDos from "./Components/Todos";
import DisplayTodos from "./Components/DisplayTodos";
import {motion} from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.h1
        initial={{y: -200}}
        animate={{y: 0}}
        transition={{type: "spring", duration:0.5}}
        whileHover={{scale: 1.2}}
      >
        Todo App
      </motion.h1>
      <motion.div
        initial={{y: 1000}}
        animate={{y: 0}}
        transition={{type: "spring", duration:1}}
      >
        <ToDos />
        <DisplayTodos />
      </motion.div>
    </div>
  );
}

export default App;
