// "use client"
import styles from "../components_styles/list_items.module.css"

export default function ListItems({items}){
    const listItems = items.map(item => {
        return <li className={styles.item} key={item}>{item}</li>
    })
    return <ul className={styles.list}>{listItems}</ul>
}