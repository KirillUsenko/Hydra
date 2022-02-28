import type { NextPage } from 'next'
import Menu from '../components/Menu.tsx'
import Center from '../components/Center.tsx'
import Settings from '../components/Settings.tsx'
import SettingsItem from '../components/settings/SettingsItem.tsx'
import Day from '../components/calendar/Day.tsx'
import Head from 'next/head'
import Checkbox from '../components/Checkbox.tsx'
import styles from '../styles/Calendar.module.scss'

const Calendar: NextPage = () => {
  return (
    <div className='content'>
      <Head>
        <title>Calendar</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <Menu active='1' />

      <Center>
        <div className='container'>
          <header className={styles.header}>
            <button className={styles.arrow}>
              <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="10.4894" height="0.953583" transform="matrix(-0.699117 -0.715007 -0.699117 0.715007 8 14.3182)" fill="#B9B9B9"/>
                <rect width="10.4894" height="0.953583" transform="matrix(0.699117 -0.715007 -0.699117 -0.715007 0.666687 8.18182)" fill="#B9B9B9"/>
              </svg>
            </button>

            <h1 className={'title ' + styles.title}>December</h1>

            <button className={styles.arrow}>
              <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="10.4894" height="0.953583" transform="matrix(0.699117 -0.715007 0.699117 0.715007 0 14.3182)" fill="#B9B9B9"/>
                <rect width="10.4894" height="0.953583" transform="matrix(-0.699117 -0.715007 0.699117 -0.715007 7.33331 8.18182)" fill="#B9B9B9"/>
              </svg>
            </button>
          </header>

          <div className={styles.filters}>
            <button className={styles.filter}>month</button>
            <button className={styles.filter + ' ' + styles.filter_active}>week</button>
          </div>

          <div className={styles.weekdays}>
            <span className={styles.weekday}>Mon</span>
            <span className={styles.weekday}>Tue</span>
            <span className={styles.weekday}>Wed</span>
            <span className={styles.weekday}>Thu</span>
            <span className={styles.weekday}>Fri</span>
          </div>

          <div className={styles.days}>
            <Day day="18" active />
            <Day day="19" analyst="Andrey" />
            <Day day="20" />
            <Day day="21" />
            <Day day="22" />
            <Day day="23" />
            <Day day="24" />
            <Day day="25" />
            <Day day="26" />
            <Day day="27" worker="Anya" />
            <Day day="28" />
            <Day day="29" />
            <Day day="30" />
            <Day day="31" />
            <Day day="32" />
            <Day day="33" />
            <Day day="34" />
            <Day day="35" />
            <Day day="36" />
            <Day day="37" analyst="Sasha" />
          </div>
        </div>
      </Center>

      <Settings data="Kirill U">
        <SettingsItem title="Filters">
          <div className={styles.flex}>
            <Checkbox width="20px" height="20px" className={styles.checkbox} />
            <span className={styles.label}>Weekends</span>
          </div>
          <div className={styles.flex}>
            <Checkbox width="20px" height="20px" className={styles.checkbox} />
            <span className={styles.label}>Events</span>
          </div>
        </SettingsItem>
      </Settings>
    </div>
  )
}

export default Calendar
