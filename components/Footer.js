import styles from '../styles/Footer.module.scss'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.sns_links + ' mx-3'}>
        <li>
          <a
            href="https://twitter.com/Hakuba_snow"
            target="_blank"
            rel="noreferrer"
          ></a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCW4FH8oKhHE8vIRnr0StJ8g"
            target="_blank"
            rel="noreferrer"
          ></a>
        </li>
        <li>
          <a
            href="https://github.com/aya-se"
            target="_blank"
            rel="noreferrer"
          ></a>
        </li>
      </ul>
    </footer>
  );
}