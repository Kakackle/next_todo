"use client"
import Image from 'next/image';
import styles from './page.module.css';
import CountButton from '@/components/CountButton';
import ListItems from '@/components/ListItems';


import TodosList from '@/components/TodosList';
import TodoInput from '@/components/TodoInput';
import { useState } from 'react';

export default function Home() {
  const test_items = [
    "Test 1",
    "Test 2",
    "Test 3"
  ];

  const test_todos = [
    {
      id: 0,
      task: "Clean your room",
      date: "19/10/2023",
      action: "delete?"
    },
    {
      id: 1,
      task: "Finish this app",
      date: "19/10/2023",
      action: "delete?"
    }, 
  ]

  const [todos, setTodos] = useState(test_todos);

  return (
    <main className={styles.main}>
      <p className={styles.title}>SIMPLE TODO APP</p>
      <CountButton></CountButton>
      <CountButton></CountButton>
      <ListItems items={test_items}></ListItems>
      <TodoInput todos={todos} setTodos={setTodos}></TodoInput>
      <TodosList todos={todos} setTodos={setTodos}></TodosList>
    </main>
  )
}
