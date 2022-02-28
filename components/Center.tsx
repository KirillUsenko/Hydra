import FC, { ReactChildren, ReactChild } from 'react'
import Link from 'next/link'
import styles from '../styles/Center.module.scss'

interface CenterProps {
  children: ReactChild | ReactChildren
}

const Center: FC = ({ children }: CenterProps) => {
  return (
    <div className={styles.center}>{children}</div>
  )
}

export default Center
