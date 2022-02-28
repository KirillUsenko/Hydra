import FC, { ReactChildren, ReactChild } from 'react'
import styles from '../styles/Button.module.scss'

export enum Types {
  active,
  inactive
}

interface ButtonProps {
  type: Types,
  width: string,
  height: string,
  callback: () => void,
  children: ReactChild | ReactChildren
}

const Button: FC = ({ type, width, height, callback, children }: ButtonProps) => {
  return (
    <button className={type === Types.active ? styles.button_active : styles.button} style={{ width, height }} onClick={() => {
      type === Types.active ? callback() : null
    }}>{children}</button>
  )
}

export default Button
