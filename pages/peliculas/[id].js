import { useRouter } from 'next/router'

const PeliculaDetail =  () => {

    const router = useRouter();
    const id = router.query.id

    // podemos mandar un request con el id provisto, por ejemplo :D

    return <h1>Esta es el detail de la pelicula, y su id es: {id} </h1>
}

export default PeliculaDetail