import Head from 'next/head';
import styles from '../styles/Skill.module.scss';

export default function Skill() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skill | aya_se</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Skill</h1>
        <div>
          ここは技能ページです。
        </div>
      </main>
    </div>
  );
}
