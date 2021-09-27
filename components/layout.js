import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="p-4 pt-6">{children}</main>
      <Footer />
    </div>
  );
}
