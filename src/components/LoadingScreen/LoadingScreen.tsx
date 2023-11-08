import PokeDexImg from '../../assets/icons8-pokedex-80.png';
import styles from './loadingScreen.module.css';
const LoadingScreen = () => {
    return <div className={styles.loadingScreen}>
        <img className={styles.loadingScreenIcon} src={PokeDexImg} alt='Pokedex' />
    </div>
};

export default LoadingScreen;