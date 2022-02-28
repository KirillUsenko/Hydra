import FC from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Menu.module.scss'

interface MenuProps {
  active?: string
}

const Menu: FC = ({ active='' }: MenuProps ) => {
  return (
    <div className={styles.content}>
      <div className={styles.image}>
        <Image src="/logo.png" width="63px" height="84px" />
      </div>

      <section className={styles.left}>
        <div className={styles.menu}>
          <Link href="/calendar">
            <a className={active === '1' ? styles.menu__item + ' ' + styles.menu__item_active : styles.menu__item}>Calendar</a>
          </Link>

          <Link href="/analysts_office">
            <a className={active === '2' ? styles.menu__item + ' ' + styles.menu__item_active : styles.menu__item}>Analyst's Office</a>
          </Link>

          <Link href="/events">
            <a className={active === '3' ? styles.menu__item + ' ' + styles.menu__item_active : styles.menu__item}>Events</a>
          </Link>

          <div className={styles.bottom}>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={styles.slider + ' ' + styles.round}></span>
            </label>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu
