import Header from './Header';
import Footer from './Footer';
import '../styles/style.css';

function Homepage() {
  return (
    <>
      <Header />
      {/* hero section */}
      <section className='hero'>
        <div className='container'>
          <h3>Welcome to</h3>
          <h1>LetsGrowMore</h1>
        </div>
      </section>
      {/* hero section end */}
      <Footer />
    </>
  );
}

export default Homepage;