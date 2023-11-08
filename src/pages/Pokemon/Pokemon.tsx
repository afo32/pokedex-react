import { useParams, useNavigate,  } from 'react-router-dom'
import styles from './pokemon.module.css'
import PokIcon from '../../assets/icons8-pokemon-80.png';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import { PokemonDetails,  } from '../../types/types';
import { fetchPokemon } from '../../api/fetchPokemon';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import { waitFor } from '../../utils/utils';

const Pokemon = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [pokemon, setPokemon] = useState<PokemonDetails>();
    const { name } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getPokemon() {
            setIsLoading(true);
            await waitFor(300);
            const fetchedPokemon = await fetchPokemon(name as string);
            console.log(fetchedPokemon); // Muestra los datos de la API en la consola
            setPokemon(fetchedPokemon);
            setIsLoading(false);
        }
        getPokemon();
    }, [name]);

    if (isLoading || !pokemon) return <LoadingScreen />;

    return <>
    <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
        <img className={styles.pokeballImg} src={PokIcon} alt="pokeball"/> Go back
    </button>
    <div className={styles.pokemon}>
        <main className={styles.pokemonInfo}>
            <div className={styles.pokemonTitle}>{pokemon?.name?.toUpperCase()}</div>
            <div>Nr. {pokemon?.id}</div>
            <div>
                <img className={styles.pokemonInfoImg} src={pokemon?.imgSrc} alt={pokemon?.name} />
            </div>
            <div>HP: {pokemon?.hp}</div>
            <div>Attack: {pokemon?.attack}</div>
            <div>Defense: {pokemon?.defense}</div>
            <div className={styles.gameIndices}>
                <div className={styles.indexTitle}>
                   Game Indices: 
                </div>
         <ul className={styles.indexList}>
            <li>
                {pokemon?.gameIndices.map((index, i) => (
            <span key={i}>
                {index.versionName}
                {i !== pokemon.gameIndices.length - 1 }
            </span>
        ))}
            </li>
            
         </ul>
        
    </div>
        </main>
    </div>
    <Footer />
    </>
};

export default Pokemon;