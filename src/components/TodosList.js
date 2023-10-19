import styles from "../components_styles/todos_list.module.css";
export default function TodosList({todos, setTodos}){

    const deleteTask = (id) => {
        let todosNew = todos.slice();
        todosNew = todosNew.filter((item) => {
            return item.id !== id;
        });
        setTodos(todosNew);
    }

    const todosItems = todos.map(todo => {
        return (
            <tr className={styles.tr} key={todo.id}>
                <td className={styles.td}>{todo.id}</td>
                <td className={styles.td}>{todo.task}</td>
                <td className={styles.td}>{todo.date}</td>
                <td className={styles.td} onClick={()=>deleteTask(todo.id)}>
                    <span className={styles.delete}>{todo.action}</span>
                </td>
            </tr>
            )
    })
    return(
        <table className={styles.table}>
            <tr className={styles.tr}>
                <th className={styles.th}>ID</th>
                <th className={styles.th}>Task</th>
                <th className={styles.th}>Date added</th>
                <th className={styles.th}>Action</th>
            </tr>
            {todosItems}
        </table>
    )
}