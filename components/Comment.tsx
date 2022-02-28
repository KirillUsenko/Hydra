import { FC } from 'react'
import styles from '../styles/Comment.module.scss'

interface CommentProps {
    placeholder: string,
    maxheight?: string,
    type?: string
}

const Comment: FC = ({ placeholder='', type="", maxheight="130px" }: CommentProps) => {
    return (
        type === 'input' ? 
            <input className={styles.textarea} placeholder={placeholder} style={{ maxHeight: maxheight }} />
        :
            <textarea className={styles.textarea} placeholder={placeholder} style={{ maxHeight: maxheight }}></textarea>
    )
}

export default Comment