import CabecalhoLink from "componentes/CabecalhoLink";
import styles from './Cabecalho.module.css';

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <h1>MoniFavs</h1>
            <ul>
                <CabecalhoLink url="./">Home</CabecalhoLink>
                <CabecalhoLink url="./">Favoritos</CabecalhoLink>
            </ul>
        </header>
    )
}

export default Cabecalho;