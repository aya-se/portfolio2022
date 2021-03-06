import Head from 'next/head';
import styles from '../styles/History.module.scss';

export default function History() {
  return (
    <div className={styles.container}>
      <Head>
        <title>History | aya_se</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>History</h1>
        <div>ここは経歴ページです。</div>
      </main>
    </div>
  );
}
