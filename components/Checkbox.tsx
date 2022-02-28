import FC from 'react'
import styles from '../styles/Checkbox.module.scss'

interface CheckboxProps {
  width: string,
  height: string,
  className?: string
}

const Checkbox: FC<CheckboxProps> = ({ width, height, className=''}) => {
  return (
    <div className={className}>
      <div className={styles.checkbox} style={{ width, height }}>
        <input className={styles.check} type="checkbox" name="check" value="check" />
        <label htmlFor="check" className={styles.label}></label>
      </div>
    </div>
  )
}

export default Checkbox
