import Head from 'next/head';
import styles from '../styles/Work.module.scss';

export default function Work() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Work | aya_se</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Work</h1>
        <div>
          ここは成果物ページです。
        </div>
      </main>
    </div>
  );
}