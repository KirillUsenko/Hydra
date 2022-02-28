import styles from '../styles/Modal.module.scss'
import FC, { ReactChildren, ReactChild, useState } from 'react'

interface ModalProps {
    active: boolean,
    cb: () => void
    children: ReactChild | ReactChildren
}

const Modal = ({ active, cb, children }: ModalProps) => {
    const [ isActive, setIsActive ] = useState(active)

    return (
        <>
            <div className={isActive ? styles.modal__back + ' ' + styles.modal__back_active : styles.modal__back} onClick={() => {setIsActive(false);cb()}}></div>
            <div className={isActive ? styles.modal__content + ' ' + styles.modal__content_active : styles.modal__content}>
                {children}
            </div>
        </>
    )
}

export default Modal