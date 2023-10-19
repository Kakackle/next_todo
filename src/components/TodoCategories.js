"use client"
import TodoApp from "./TodoApp";
import styles from "../components_styles/todo_categories.module.css";
import { useState, useEffect } from "react";

export default function TodoCategories() {
    const test_categories = ["programming", "daily"];
    // const [categories, setCategories] = useState(test_categories);
    const [categories, setCategories] = useState(() => {
        const saved = localStorage.getItem("categories");
        const initialVal = JSON.parse(saved);
        return initialVal || [];
    });
    const [currentCat, setCurrentCat] = useState(categories[0]);
    const [newCat, setNewCat] = useState("");

    useEffect(()=>{
        localStorage.setItem("categories", JSON.stringify(categories));
    }, [categories]);

    const side_cats = categories.map(cat => {
        return (
            <div className={styles.cat} onClick={() => setCurrentCat(cat)}>
                <p>{cat}</p>
            </div>
        );
    });

    const todo_apps = categories.map(cat => {
        // if(cat === currentCat) {
        //     return (
        //         <TodoApp category={cat}></TodoApp>
        //     );
        // }
        return(
            <TodoApp category={cat} current={currentCat}></TodoApp>
        )
    });

    const addNewCategory = () => {
        let newCategories = categories.slice();
        newCategories.push(newCat);
        setCategories(newCategories);
    }

    return(
        <main className={styles.main}>
            <div className={styles.side}>
                {side_cats}
                <div>
                    <label htmlFor="newcat">Add a new category</label>
                    <input type="text" name="newcat" placeholder="health"
                    onChange={ e => setNewCat(e.target.value)}></input>
                    <button onClick={addNewCategory}>ADD</button>
                </div>
            </div>
            {todo_apps}
        </main>
    )
}