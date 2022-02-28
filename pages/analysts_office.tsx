import type { NextPage } from 'next'
import Menu from '../components/Menu.tsx'
import Center from '../components/Center.tsx'
import Settings from '../components/Settings.tsx'
import SettingsItem from '../components/settings/SettingsItem.tsx'
import Event from '../components/events/Event.tsx'
import Button, { Types } from '../components/Button.tsx'
import styles from '../styles/Office.module.scss'
import Modal from '../components/Modal.tsx'
import Head from 'next/head'
import { ReactChild, useState } from 'react'
import SettingsMenu from '../components/settings/SettingsMenu.tsx'
import Comment from '../components/Comment.tsx'

const AnalystsOffice: NextPage = () => {
  const [ isModalActive, setIsModalActive ] = useState(false)
  const [ modalContent, setModalContent ] = useState<ReactChild>(<></>)

  const pass = () => {
    alert('pass')
  }

  const linkEvent = () => {
    setIsModalActive(true)
    setModalContent(
      <>
        <div className={styles.modalflex} style={{ margin: 0 }}>
          <SettingsItem title="Events" removeMargin={true}>
            <SettingsMenu type="white" items={["item 1", "item 2", "item 3"]} width="164px" height="30px"></SettingsMenu>
          </SettingsItem>

          <SettingsItem title="Effective Date" removeMargin={true}>
            <SettingsMenu type="white" items={["item 1", "item 2", "item 3"]} width="164px" height="30px"></SettingsMenu>
          </SettingsItem>
        </div>
        <SettingsItem title="Status">
          <SettingsMenu type="white" items={["Done", "item 2", "item 3"]} width="371px" height="30px"></SettingsMenu>
        </SettingsItem>

        <SettingsItem title="Comment">
          <Comment placeholder="Comment" maxheight="70px"></Comment>
        </SettingsItem>

        <div className={styles.modalflex}>
          <Button 
            type={Types.active} 
            width="190px" 
            height="30px" 
            callback={() => setIsModalActive(false)}>cancel</Button>

          <Button 
            type={Types.active} 
            width="190px" 
            height="30px" 
            callback={() => alert('link')}>link</Button>
        </div>
      </>
    )
  }

  const createEvent = () => {
    setIsModalActive(true)
    setModalContent(
      <>
        <div className={styles.modalflex} style={{ margin: 0 }}>
          <SettingsItem title="Event" removeMargin={true}>
            <SettingsMenu type="white" items={["item 1", "item 2", "item 3"]} width="164px" height="30px"></SettingsMenu>
          </SettingsItem>

          <SettingsItem title="Symbol" removeMargin={true}>
            <SettingsMenu type="white" items={["FB", "item 2", "item 3"]} width="164px" height="30px"></SettingsMenu>
          </SettingsItem>
        </div>

        <div className={styles.modalflex}>
          <SettingsItem title="Status" removeMargin={true}>
            <SettingsMenu type="white" items={["Final", "item 2", "item 3"]} width="164px" height="30px"></SettingsMenu>
          </SettingsItem>

          <SettingsItem title="Effective Date" removeMargin={true}>
            <SettingsMenu type="white" items={["Date", "item 2", "item 3"]} width="164px" height="30px"></SettingsMenu>
          </SettingsItem>
        </div>

        <SettingsItem title="Comment">
          <Comment placeholder="Comment" maxheight="70px"></Comment>
        </SettingsItem>

        <div className={styles.modalflex}>
          <Button 
            type={Types.active} 
            width="190px" 
            height="30px" 
            callback={() => setIsModalActive(false)}>cancel</Button>

          <Button 
            type={Types.active} 
            width="190px" 
            height="30px" 
            callback={() => alert('create')}>create</Button>
        </div>
      </>
    )
  }

  const addnews = () => {
    setIsModalActive(true)
    setModalContent(
      <>
        <div className={styles.modalflex} style={{ margin: 0 }}>
          <SettingsItem title="Link" removeMargin={true}>
            <Comment placeholder="Link" maxheight="30px" type="input"></Comment>
          </SettingsItem>

          <SettingsItem title="Effective Date" removeMargin={true}>
            <SettingsMenu type="white" items={["item 1", "item 2", "item 3"]} width="164px" height="30px"></SettingsMenu>
          </SettingsItem>
        </div>
        <SettingsItem title="Status">
          <SettingsMenu type="white" items={["Done", "item 2", "item 3"]} width="371px" height="30px"></SettingsMenu>
        </SettingsItem>

        <SettingsItem title="Comment">
          <Comment placeholder="Comment" maxheight="70px"></Comment>
        </SettingsItem>

        <div className={styles.modalflex}>
          <Button 
            type={Types.active} 
            width="190px" 
            height="30px" 
            callback={() => setIsModalActive(false)}>cancel</Button>

          <Button 
            type={Types.inactive} 
            width="190px" 
            height="30px" 
            callback={() => alert('link')}>add</Button>
        </div>
      </>
    )
  }

  const markdone = () => {
    setIsModalActive(true)
    setModalContent(
      <>
        <SettingsItem title="Status" removeMargin={true}>
          <SettingsMenu type="white" items={["Done", "item 2", "item 3"]} width="371px" height="30px"></SettingsMenu>
        </SettingsItem>

        <SettingsItem title="Comment">
          <Comment placeholder="Comment" maxheight="184px"></Comment>
        </SettingsItem>

        <div className={styles.modalflex}>
          <Button 
            type={Types.active} 
            width="178px" 
            height="30px" 
            callback={() => setIsModalActive(false)}>cancel</Button>

          <Button 
            type={Types.active} 
            width="178px" 
            height="30px" 
            callback={() => alert('done')}>done</Button>
        </div>
      </>
    )
  }

  const postpone = () => {
    setIsModalActive(true)
    setModalContent(
      <>
        <SettingsItem title="Effective Date" removeMargin={true}>
          <SettingsMenu type="white" items={["item 1", "item 2", "item 3"]} width="371px" height="30px"></SettingsMenu>
        </SettingsItem>
        <div className={styles.modalflex}>
          <Button 
            type={Types.active} 
            width="178px" 
            height="30px" 
            callback={() => setIsModalActive(false)}>cancel</Button>

          <Button 
            type={Types.active} 
            width="178px" 
            height="30px" 
            callback={() => alert('postpone')}>postpone</Button>
        </div>
      </>
    )
  }

  const submitStatus = () => {
    setIsModalActive(true)
    setModalContent(
      <>
        <SettingsItem title="Comment" removeMargin={true}>
          <Comment placeholder="Comment" maxheight="130px"></Comment>
        </SettingsItem>

        <div className={styles.modalflex}>
          <Button 
            type={Types.active} 
            width="178px" 
            height="30px" 
            callback={() => setIsModalActive(false)}>cancel</Button>

          <Button 
            type={Types.inactive} 
            width="178px" 
            height="30px" 
            callback={() => alert('submit')}>submit</Button>
        </div>
      </>
    )
  }

  return (
    <>
    {isModalActive && <Modal active={isModalActive} cb={() => setIsModalActive(false)}>{modalContent}</Modal>}
    <div className='content'>
      <Head>
        <title>Analysts_office</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <Menu active='2' />

      <Center>
        <div className={styles.news}>
          <h1 className={'title ' + styles.title}>News</h1>

          <div className={styles.menu}>
            <span className={styles.menu__item}>symbol</span>
            <span className={styles.menu__item}>type</span>
            <span className={styles.menu__item}>source</span>
            <span className={styles.menu__item}>date</span>
          </div>

          <div>
            <Event nocheck news data={['FB', 'News', 'Cobra', '2022-01-01']} addnews={pass} markdone={linkEvent} postpone={createEvent}>
              Текст 1
            </Event>

            <Event nocheck news data={['FB', 'News', 'Cobra', '2022-01-01']} addnews={pass} markdone={linkEvent} postpone={createEvent}>
              Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст 2
            </Event>

            <Event nocheck news data={['FB', 'News', 'Cobra', '2022-01-01']} addnews={pass} markdone={linkEvent} postpone={createEvent}>
              Текст 3
            </Event>
          </div>
        </div>

        <div className={styles.events}>
          <h1 className={'title ' + styles.title}>Events</h1>

          <div className={styles.menu}>
            <span className={styles.menu__item}>index</span>
            <span className={styles.menu__item}>symbol</span>
            <span className={styles.menu__item}>type</span>
            <span className={styles.menu__item}>status</span>
            <span className={styles.menu__item}>date</span>
          </div>

          <div>
            <Event nocheck data={['75:SME', 'AAPL', 'M&A', 'Pending', 'May 5, 2022']} addnews={addnews} markdone={markdone} postpone={postpone}>
              Текст 1
            </Event>

            <Event nocheck data={['75:SME', 'AAPL', 'M&A', 'Pending', 'May 6, 2022']} addnews={addnews} markdone={markdone} postpone={postpone}>
              Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст 2
            </Event>

            <Event nocheck data={['75:SME', 'AAPL', 'M&A', 'Pending', 'May 7, 2022']} addnews={addnews} markdone={markdone} postpone={postpone}>
              Текст 3
            </Event>

            <Event nocheck data={['75:SME', 'AAPL', 'M&A', 'Pending', 'May 7, 2022']} addnews={addnews} markdone={markdone} postpone={postpone}>
              Текст 4
            </Event>

            <Event nocheck data={['75:SME', 'AAPL', 'M&A', 'Pending', 'May 7, 2022']} addnews={addnews} markdone={markdone} postpone={postpone}>
              Текст 5
            </Event>

            <Event nocheck data={['75:SME', 'AAPL', 'M&A', 'Pending', 'May 7, 2022']} addnews={addnews} markdone={markdone} postpone={postpone}>
              Текст 6
            </Event>
          </div>
        </div>
      </Center>

      <Settings data="Kirill U">
        <div className={styles.flex}>
          <span className={styles.key}>News</span>
          <span className={styles.value}>3</span>
        </div>

        <div className={styles.flex}>
          <span className={styles.key}>Events</span>
          <span className={styles.value}>6</span>
        </div>

        <div className={styles.flex + ' ' + styles.flex_last}>
          <span className={styles.key}>Status</span>
          <span className={styles.value}>Unsubmitted</span>
        </div>

        <Button type={Types.active} width="178px" height="30px" callback={() => submitStatus()}>submit status</Button>
      </Settings>
    </div>
    </>
  )
}

export default AnalystsOffice
