
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import "./globals.css"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Banner/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
