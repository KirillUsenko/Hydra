import FC from 'react'
import styles from '../../styles/SettingsMenu.module.scss'

interface SettingsMenuProps {
  items: string[],
  width?: string,
  height?: string,
  title?: string,
  type?: string
  margin?: string
}

const SettingsMenu: FC = ({ items, type="dark", width='165px', height='30px', title='', margin='' }: SettingsMenuProps) => {
  return (
    <>
      {title ?
        <div className={styles.flex} style={{ marginBottom: margin }}>
          <h3 className={styles.title}>{title}</h3>
          <div className={type==="white" ? styles.container + ' ' + styles.container_white : styles.container}>
            <select name="select" className={styles.select} style={{ width, height }}>
              {items.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>
        </div>
      :
        <div className={type==="white" ? styles.container + ' ' + styles.container_white : styles.container}>
          <select name="select" className={type === 'white' ? styles.select + ' ' + styles.select_white : styles.select} style={{ width, height }}>
            {items.map(item => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>
      }
    </>
  )
}

export default SettingsMenu
