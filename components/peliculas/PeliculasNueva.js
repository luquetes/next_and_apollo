import {useRef} from 'react'

const PeliculasNueva = props => {

    const titleInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault();
        const title = titleInputRef.current.value

        const peliculaData = {
            title
        }
        
        props.onAddMovie(peliculaData)
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='title'>Titulo</label>
                <input type='text' required id='title' ref={titleInputRef} />
            </div>
            <div>
                <button>Agregar pelicula</button>
            </div>
        </form>
    )
}

export default PeliculasNueva