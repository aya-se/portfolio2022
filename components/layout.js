import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, ...props }) {
  return (
    <div>
      <Header />
      <main className="main-container" {...props}>{children}</main>
      <Footer />
    </div>
  );
}
