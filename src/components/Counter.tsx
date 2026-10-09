import { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState<number>(0)

    return (
        <div className={classes.button}>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Incrment</button>
        </div>
    )
}