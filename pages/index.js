import Head from 'next/head';
import styles from '../styles/Home.module.css';
import BugSearch from '../components/BugSearch';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AC Helper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BugSearch />
      </main>
    </div>
  );
}
