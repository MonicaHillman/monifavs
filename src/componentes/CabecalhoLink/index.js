import { Link } from "react-router-dom";
import styles from './CabecalhoLink.module.css';

function CabecalhoLink({ url, children }) {
    return (
        <Link className={styles.link} to={url}>
            {children}
        </Link>
    )
}

export default CabecalhoLink;