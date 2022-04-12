import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | aya_se</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <Link href="">
            <a>aya_se&apos;s portfolio</a>
          </Link>{' '}
          !
        </h1>

        <div className={styles.grid}>
          <Link href="/about">
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>About &rarr;</h2>
              <p>aya_seの基本的なプロフィールを記載しています。</p>
            </a>
          </Link>
          <Link href="/history">
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>History &rarr;</h2>
              <p>これまでの経歴について簡単にまとめています。</p>
            </a>
          </Link>
          <Link href="/skill">
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Skill &rarr;</h2>
              <p>言語・フレームワークの習得状況について記載しています。</p>
            </a>
          </Link>
          <Link href="/work">
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Work &rarr;</h2>
              <p>これまでに制作したサイトやその他リンクをまとめています。</p>
            </a>
          </Link>
          <Link href="/blog">
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Blog &rarr;</h2>
              <p>オリジナルのブログです。気が向いた時に更新します。</p>
            </a>
          </Link>
          <Link href="/account">
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Account &rarr;</h2>
              <p>各種サービス・SNSのアカウント置き場です。</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
