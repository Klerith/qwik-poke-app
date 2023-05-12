import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { QwikLogo } from '../../icons/qwik';

import styles from './navbar.module.css';



export default component$(() => {

  return (
    <header class={styles.header}>
      <div class={['container', styles.wrapper]}>
        <div class={styles.logo}>
          <Link href='/'>
            <QwikLogo height={50} />
          </Link>
        </div>
        <ul>
         
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/dashboard">Admin Dashboard</Link>
          </li>

          <li>
            <Link href="/counter">CounterHook</Link>
          </li>
          <li>
            <Link href="/pokemons/list-ssr/">SSR-List</Link>
          </li>
          <li>
            <Link href="/pokemons/list-client/">Client-List</Link>
          </li>
        </ul>
      </div>
    </header>
  );
});
