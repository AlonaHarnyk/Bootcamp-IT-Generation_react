import styles from './Modal.module.css'

export const Modal = ({ image: { src, alt }, closeModal }) => {
    return (
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                <img src={src} alt={alt} width='300'/>
                <button className={styles.close} onClick={closeModal}>Close</button>
            </div>
        </div>
    )
}

