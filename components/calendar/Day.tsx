import FC, { ReactChildren, ReactChild } from 'react'
import styles from '../../styles/Day.module.scss'

interface DayProps {
  day: string
  analyst?: string,
  worker?: string,
  active: boolean
}

const Day: FC = ({ day, analyst='', worker='', calendar, active }: ButtonProps) => {
  return (
    <div className={active ? styles.block + ' ' + styles.block_active : styles.block}>
      <header className={styles.header}>
        <span className={styles.analyst}>{analyst}</span>
        <span className={styles.day}>{day}</span>
      </header>
      {worker && <div className={styles.worker}>
        {worker}
      </div>}
    </div>
  )
}

export default Day
