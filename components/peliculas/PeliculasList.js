import PeliculasItem from './PeliculasItem'

const PeliculasList = props => {
    return (
        <ul>
            {props.peliculas.map(pelicula => (
                <PeliculasItem 
                    key={pelicula.id}
                    id={pelicula.id}
                    title={pelicula.title}
                />
            ))}
        </ul>
    )
}

export default PeliculasList