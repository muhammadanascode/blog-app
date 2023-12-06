import React from 'react'
import './Pagination.module.css'
import styles from './Pagination.module.css'

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Previous</button>
      <button className={styles.button}>Next</button>
    </div>
  )
}

export default Pagination