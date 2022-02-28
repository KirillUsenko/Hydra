import type { NextPage } from 'next'
import styles from '../styles/Events.module.scss'
import Menu from '../components/Menu.tsx'
import Center from '../components/Center.tsx'
import Settings from '../components/Settings.tsx'
import Event from '../components/events/Event.tsx'
import SettingsItem from '../components/settings/SettingsItem.tsx'
import SettingsMenu from '../components/settings/SettingsMenu.tsx'
import Checkbox from '../components/Checkbox.tsx'
import Button, { Types } from '../components/Button.tsx'
import Modal from '../components/Modal.tsx'
import Comment from '../components/Comment.tsx'
import Head from 'next/head'
import React, { ReactChild, useState } from 'react'

const Events: NextPage = () => {
  const [ isModalActive, setIsModalActive ] = useState(false)
  const [ modalContent, setModalContent ] = useState<ReactChild>(<></>)

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

  const exportdata = () => {
    alert('export')
  }

  return (
    <>
    {isModalActive && <Modal active={isModalActive} cb={() => setIsModalActive(false)}>{modalContent}</Modal>}
    <div className="content">
      <Head>
        <title>Events</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <Menu active='3' />

      <Center>
        <h1 className="title">Events</h1>

        <div>
          <div className={styles.flex}>
            <Checkbox width="20px" height="20px" className={styles.checkbox} />
            <div className={styles.menu}>
              <span className={styles.menu__item}>index</span>
              <span className={styles.menu__item}>symbol</span>
              <span className={styles.menu__item}>type</span>
              <span className={styles.menu__item}>status</span>
              <span className={styles.menu__item}>date</span>
            </div>
          </div>

          <div className={styles.events}>
            <Event data={['75:SME', 'AAPL', 'M&A', 'Pending', 'May 5, 2022']} addnews={addnews} markdone={markdone} postpone={postpone}>
              Текст 1
            </Event>

            <Event data={['75:SME', 'AAPL', 'M&A', 'Pending', 'May 6, 2022']} addnews={addnews} markdone={markdone} postpone={postpone}>
              Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст 2
            </Event>

            <Event data={['75:SME', 'AAPL', 'M&A', 'Pending', 'May 7, 2022']} addnews={addnews} markdone={markdone} postpone={postpone}>
              Текст 3
            </Event>

            <Event data={['75:SME', 'AAPL', 'M&A', 'Pending', 'May 7, 2022']} addnews={addnews} markdone={markdone} postpone={postpone}>
              Текст 4
            </Event>

            <Event data={['75:SME', 'AAPL', 'M&A', 'Pending', 'May 7, 2022']} addnews={addnews} markdone={markdone} postpone={postpone}>
              Текст 5
            </Event>

            <Event data={['75:SME', 'AAPL', 'M&A', 'Pending', 'May 7, 2022']} addnews={addnews} markdone={markdone} postpone={postpone}>
              Текст 6
            </Event>
          </div>
        </div>
      </Center>

      <Settings data="Kirill Usenko">
        <SettingsItem title="Date">
          <SettingsMenu items={['30.01.22', '30.02.22', '30.03.22']} title="From" width="120px" margin='10px' />
          <SettingsMenu items={['11.02.22', '12.02.22', '13.02.22']} title="To" width="120px" />
        </SettingsItem>

        <SettingsItem title="Type">
          <SettingsMenu items={['M&A', 'M', 'A']} />
        </SettingsItem>

        <SettingsItem title="Index Family">
          <SettingsMenu items={['SME', 'ASD', 'DNA']} />
        </SettingsItem>

        <SettingsItem title="Index">
          <SettingsMenu items={['All', '0', '1']} />
        </SettingsItem>

        <SettingsItem title="Selected (0)">
          <Button type={Types.inactive} width="164px" height="30px" callback={exportdata}>export</Button>
        </SettingsItem>
      </Settings>
    </div>
    </>
  )
}

export default Events
