import { useRouter } from 'next/router'

import PeliculaDetails from '../../components/peliculas/PeliculaDetails';
import { DUMMY_MOVIES } from '../../constants/DUMMY_MOVIES';

const PeliculaDetail = () => {

    const router = useRouter();
    const id = router.query.id
    const pelicula = DUMMY_MOVIES.find(movie => movie.id === id)
    // podemos mandar un request con el id provisto, por ejemplo :D
    if(pelicula) {
        return <PeliculaDetails pelicula={pelicula}/>
    }
    return null;
}

export default PeliculaDetail