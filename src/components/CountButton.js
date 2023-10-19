"use client"
import { useState } from 'react';
import styles from '../components_styles/count_button.module.css';

export default function CountButton(){
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <button className={styles.button} onClick={handleClick}>{count}</button>
  )
}