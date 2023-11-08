import React from "react";
import {Link} from 'react-router-dom';
import styles from './footer.module.css'
// Assets
import PokPic from '../../assets/icons8-pokemon-80.png'
import Compass from '../../assets/icons8-compass-96.png'
import PokeBag from '../../assets/icons8-pokebag-96.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link className={styles.footerLink} to='/pokemons'>
                <img className={styles.footerIcon} src={PokPic} alt="pokemon" />
                Pokemons
            </Link>
            <Link className={styles.footerLink} to='/items'>
                <img className={styles.footerIcon} src={PokeBag} alt="pokemon" />
                Items
            </Link>
            <Link className={styles.footerLink} to='/map'>
                <img className={styles.footerIcon} src={Compass} alt="pokemon" />
                Map
            </Link>
        </footer>
    )
};

export default Footer;