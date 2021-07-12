import Link from 'next/link'

const Peliculas =  () => {
    return <>
    <h1>Esta es la seccion de peliculas</h1>
    <ul>
        <li><Link href="/peliculas/1">Peli 1</Link></li>
        <li><Link href="/peliculas/2">Peli 2</Link></li>
        <li><Link href="/peliculas/3">Peli 3</Link></li>
    </ul>
    </>
}

export default Peliculas