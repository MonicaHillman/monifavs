import CabecalhoLink from "componentes/CabecalhoLink";
import styles from './Cabecalho.module.css';
import logo from 'assets/Logo/Logo-cinetag-branco.png';
import { Link } from "react-router-dom";

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to='/'>
                <img src={logo} alt="Logo do CineTag" />
            </Link>
            <ul>
                <CabecalhoLink url="./">Home</CabecalhoLink>
                <CabecalhoLink url="./Favoritos">Favoritos</CabecalhoLink>
            </ul>
        </header>
    )
}

export default Cabecalho;