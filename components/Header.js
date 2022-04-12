import Link from 'next/link';
import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <div className="container-fluid px-0">
        <h3 className="my-1">
          <Link className="navbar-brand" href="/">
            <a className="px-2">aya_se&apos;s portfolio</a>
          </Link>
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={[
            'nav_item',
            'collapse',
            'navbar-collapse',
            styles.header_content,
          ].join(' ')}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className={styles.header_item}>
              <Link href="/about">
                <a className={[styles.header_link, 'link_underline'].join(' ')}>
                  About
                </a>
              </Link>
            </li>
            <li className={styles.header_item}>
              <Link href="/history">
                <a className={[styles.header_link, 'link_underline'].join(' ')}>
                  History
                </a>
              </Link>
            </li>
            <li className={styles.header_item}>
              <Link href="/skill">
                <a className={[styles.header_link, 'link_underline'].join(' ')}>
                  Skill
                </a>
              </Link>
            </li>
            <li className={styles.header_item}>
              <Link href="/work">
                <a className={[styles.header_link, 'link_underline'].join(' ')}>
                  Work
                </a>
              </Link>
            </li>
            <li className={styles.header_item}>
              <Link href="/blog">
                <a className={[styles.header_link, 'link_underline'].join(' ')}>
                  Blog
                  <em className="bi bi-box-arrow-up-right mx-1" />
                </a>
              </Link>
            </li>
            <li className={styles.header_item}>
              <Link href="/account">
                <a className={[styles.header_link, 'link_underline'].join(' ')}>
                  Account
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
