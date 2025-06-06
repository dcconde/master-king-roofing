import { useEffect } from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Quote from './components/Quote/Quote';
import Footer from './components/Footer/Footer';
import './styles/main.scss';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Master King Roofing - Premium Roofing Services';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
      <Header />
      <Banner />
      <About />
      <Services />
      <Gallery />
      <Quote />
      <Footer />
    </div>
  );
}

export default App;