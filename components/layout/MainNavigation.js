import classes from './MainNavigation.module.css';
import Link from 'next/link'

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>NextJS test</div>
      <nav>
        <ul>
          <li>
            <Link href='/peliculas'>Peliculas</Link>
          </li>
          <li>
            <Link href='/peliculas/nueva'>Nueva Pelicula</Link>
          </li>
          <li>
            <Link href='/countries-static'>GraphQL Paises (Static)</Link>
          </li>
          <li>
            <Link href='/countries-ssr'>GraphQL Paises (SSR)</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;