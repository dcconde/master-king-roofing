import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.scss';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About Us' },
    { id: 'services', name: 'Services' },
    { id: 'gallery', name: 'Gallery' },
    { id: 'quote', name: 'Get a Quote' }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            {/* Logo placeholder - will be replaced with actual logo file */}
            <Link 
              to="home" 
              spy={true} 
              smooth={true} 
              duration={500}
              className="logo-link"
            >
              <span className="logo-text">Master King <span>Roofing</span></span>
            </Link>
          </div>
          
          <div className={`nav-container ${menuOpen ? 'active' : ''}`}>
            <nav className="nav">
              <ul className="nav-list">
                {navLinks.map((link) => (
                  <li key={link.id} className="nav-item">
                    <Link
                      to={link.id}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="nav-link"
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <Link
              to="quote"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-primary quote-btn"
              onClick={closeMenu}
            >
              Free Quote
            </Link>
          </div>
          
          <button 
            className={`hamburger ${menuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;