import {useRouter} from 'next/router'

const PeliculaItem = props => {

    const router = useRouter()

    const showDetailsHandler = () => {
        router.push(`/peliculas/${props.id}`)
    }

    return (
        <li>
            <p>{props.id}</p>
            <p>{props.title}</p>
            <button onClick={showDetailsHandler}>Detalles</button>
        </li>
    )
}

export default PeliculaItem