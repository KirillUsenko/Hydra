import FC, { ReactChildren, ReactChild, useState } from 'react'
import styles from '../../styles/Event.module.scss'
import Checkbox from '../Checkbox.tsx'
import Button, { Types } from '../Button.tsx'
interface EventProps {
  data: string[],
  addnews: () => void,
  markdone: () => void,
  postpone: () => void,
  children: ReactChild | ReactChildren,
  nocheck?: boolean,
  news?: boolean
}

const Event: FC = ({ data, addnews, markdone, postpone, nocheck=false, news=false, children }: EventProps) => {
  const [ onDisplay, setOnDisplay ] = useState(false)

  return (
    <div className={styles.event} style={{ width: nocheck ? '550px' : ''}}>
      <div className={styles.flex}>
        {!nocheck && <Checkbox width="20px" height="20px" className={styles.checkbox} />}
        <div>
          <div className={onDisplay ? styles.event__inner + ' ' + styles.event__inner_ondisplay : styles.event__inner} onClick={() => {
            onDisplay ? setOnDisplay(false) : setOnDisplay(true)
          }}>
            {data.map(item => <span key={item} className={styles.item}>{item}</span>)}
          </div>
          <div className={onDisplay ? styles.event__content : styles.event__content + ' ' + styles.event__content_inactive}>
            <span>{children}</span>

            <div className={styles.event__buttons}>
              {news
              ?
                <>
                  <Button type={Types.active} width="32%" height="30px" callback={addnews}>Pass</Button>
                  <Button type={Types.active} width="32%" height="30px" callback={markdone}>Link Event</Button>
                  <Button type={Types.active} width="32%" height="30px" callback={postpone}>CREATE EVENT</Button>
                </>
              :
                <>
                  <Button type={Types.active} width="32%" height="30px" callback={addnews}>add news</Button>
                  <Button type={Types.active} width="32%" height="30px" callback={markdone}>mark done</Button>
                  <Button type={Types.active} width="32%" height="30px" callback={postpone}>postpone</Button>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event
