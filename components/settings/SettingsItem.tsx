import FC, { ReactChildren, ReactChild } from 'react'
import styles from '../../styles/SettingsItem.module.scss'

interface SettingsItemProps {
  title: string,
  removeMargin?: boolean,
  margin?: string,
  children: ReactChild | ReactChildren
}

const SettingsItem: FC = ({ title, removeMargin=false, margin='', children }: SettingsItemProps) => {
  const name = 'Kirill U'

  return (
    <div className={styles.item} style={{ marginBottom: margin ? margin : '', margin: removeMargin ? '0' : ''}}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default SettingsItem
