import FC, { ReactChildren, ReactChild } from 'react'
import styles from '../styles/Settings.module.scss'

interface SettingsProps {
  data: string,
  children: ReactChild | ReactChildren
}

const Settings: FC = ({ data, children }: SettingsProps) => {

  return (
    <div className={styles.settings}>
      <div className={styles.settings__content}>
        <div className={styles.account}>
          <span className={styles.name}>{data + '.'}</span>
          <span className={styles.image}>{data.charAt(0)}</span>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Settings
