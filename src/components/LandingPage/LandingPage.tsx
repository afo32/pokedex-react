import styles from './landingPage.module.css'
import Pokedex  from '../../assets/icons8-pokedex-80.png';
import { Link } from 'react-router-dom';

export function LandingPage() {
    return(
        <div className={styles.container}>
        <Link to='/pokemons'>
            <img src={Pokedex} alt='icon' className={styles.pokedexIcon}></img>
        </Link>
            
        </div>
    )
}