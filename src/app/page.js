import Image from 'next/image';
import styles from './page.module.css';
import TodoApp from '@/components/TodoApp';
import TodoCategories from '@/components/TodoCategories';

export default function Home() {
  // const test_todos = [
  //   {
  //     id: 0,
  //     task: "Clean your room",
  //     date: "19/10/2023",
  //     action: "delete?"
  //   },
  //   {
  //     id: 1,
  //     task: "Finish this app",
  //     date: "19/10/2023",
  //     action: "delete?"
  //   }, 
  // ]
  return (
    <main className={styles.main}>
      {/* <TodoApp></TodoApp> */}
      <TodoCategories></TodoCategories>
    </main>
  )
}
