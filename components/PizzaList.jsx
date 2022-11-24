import React from 'react'
import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

function PizzaList({ pizzaList }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}></h1>
            <p className={styles.desc}>
                
            </p>
            <div className={styles.wrapper}>
                {pizzaList.map(pizza => (
                    <PizzaCard key={pizza._id} pizza={pizza} />
                ))}
            </div>
        </div>
    )
}

export default PizzaList
