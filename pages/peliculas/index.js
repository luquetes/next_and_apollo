import PeliculasList from '../../components/peliculas/PeliculasList'
// import { useEffect, useState } from 'react'

import { DUMMY_MOVIES } from '../../constants/DUMMY_MOVIES'

const Peliculas = props => {

    // const [loadedPeliculas, setLoadedPeliculas] = useState([])

    // useEffect(() => {
    //     // http request
    //     // Hacer este approach clasico de react no nos va a dar la info en el codigo fuente. Para hacer el Pre-Rendering, cumpliendo con el SSR, necesitamos otra cosa :D
    //     setLoadedPeliculas(DUMMY_MOVIES)
    // }, [])

    return <>
        <h1>Esta es la seccion de peliculas</h1>
        <PeliculasList peliculas={props.peliculas} />
    </>
}

// export async function getServerSideProps(context) {

//     const req = context.req
//     const res = context.res

//     return {
//         props: {
//             peliculas: DUMMY_MOVIES
//         }
//     }
// }

export async function getStaticProps() {
    return {
        props: {
            peliculas: DUMMY_MOVIES,
            revalidate: 10
        }
    }
}

export default Peliculas