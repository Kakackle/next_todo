"use client"
import TodosList from "./TodosList";
import TodoInput from "./TodoInput";
import { useState, useEffect } from "react";
import styles from "../components_styles/todo_app.module.css";

export default function TodoApp({category, current}) {
    // const [todos, setTodos] = useState([]);
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem(category);
        const initialVal = JSON.parse(saved);
        return initialVal || [];
    });

    useEffect(()=>{
        localStorage.setItem(category, JSON.stringify(todos));
    }, [todos]);

    if (category === current){
        return (
            <main className={styles.main}>
                <p className={styles.title}>{category} TODO APP</p>
                <TodoInput todos={todos} setTodos={setTodos}></TodoInput>
                <TodosList todos={todos} setTodos={setTodos}></TodosList>
            </main>
        );
    }
}