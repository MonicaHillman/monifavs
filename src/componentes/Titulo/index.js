import styles from './Titulo.module.css';

function Titulo({ children }) {
    return (
        <h2 className={styles.texto}>{children}</h2>
    )
}

export default Titulo;