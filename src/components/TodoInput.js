"use client"
import { useState } from "react";
import styles from "../components_styles/todo_input.module.css"

export default function TodoInput({todos, setTodos}){
    const [taskText, setTaskText] = useState("");

    const addTask = () => {
        let todosNew = todos.slice()
        let newTask = {
            id: todosNew.length,
            task: taskText,
            date: new Date().toUTCString(),
            action: "delete?"
        };
        todosNew.push(newTask);
        setTodos(todosNew);
    }

    return(
        // <label></label>
        <div className={styles.inputdiv}>
            <label htmlFor="task">New task</label>
            <input type="text" placeholder="new task text"
            name="task"
            id="task"
            className={styles.input}
            value={taskText}
            onChange={e => setTaskText(e.target.value)}>
            </input>
            <button className={styles.button} onClick={addTask}>+</button>
        </div>
        
    );
}
