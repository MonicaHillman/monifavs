import styles from './Banner.module.css';

function Banner({ imagem }) {
    return (
        <div
            className={styles.capa}
            style={{ backgroundImage: `url('%PUBLIC_URL%/assets/Banner/${imagem}.png')` }}>
        </div>
    )
}

export default Banner;