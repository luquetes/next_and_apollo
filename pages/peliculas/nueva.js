import PeliculasNueva from "../../components/peliculas/PeliculasNueva"

const Nueva = props => {

    const addMovieHandler = (enteredMovieData) => {
        console.log(enteredMovieData)
    }

    return (
        <>
            <h1>Nueva Pelicula</h1>
            <PeliculasNueva onAddMovie={addMovieHandler}/>
        </>
    )
}

export default Nueva