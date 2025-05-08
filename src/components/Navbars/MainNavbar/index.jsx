/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Navbar = ({ navbarRef, theme, logoTheme }) => {
  const dropdownHover = (e) => {
    const dropdownItem = e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
    const dropdownMenu = dropdownItem.querySelector('.dropdown-menu');
    if (dropdownMenu) dropdownMenu.classList.add('show');
  }

  const dropdownLeave = () => {
    const openedDropdown = document.querySelector('.navbar .dropdown-menu.show');
    if (openedDropdown) openedDropdown.classList.remove('show');
  }

  const sideDropdownHover = (e) => {
    const dropdownItem = e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
    const dropdownSide = dropdownItem.querySelector('.dropdown-side');
    if (dropdownSide) dropdownSide.classList.add('show');
  }

  const sideDropdownLeave = () => {
    const openedSideDropdown = document.querySelector('.navbar .dropdown-side.show');
    if (openedSideDropdown) openedSideDropdown.classList.remove('show');
  }
  
  return (
    <nav className={`navbar navbar-expand-lg ${theme}`} ref={navbarRef}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          <div className="logo">
            { logoTheme === 'dark' && <img src="img/logo-dark.png" alt="" /> }
            { logoTheme === 'light' && <img src="img/logo-light.png" alt="" /> }
            { !logoTheme && <img src="img/logo-dark.png" alt="" /> }
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" role="button" aria-expanded="false">
              <Link href="/home-landing-2"><a>Home</a></Link>
            </span>
            </li>
            
            <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" role="button" aria-expanded="false">
              <Link href="/about-creative"><a>About</a></Link>
            </span>
            </li>
            
            <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" role="button" aria-expanded="false">
              <Link href="/services-creative"><a>Services</a></Link>
            </span>
            </li>

            <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" role="button" aria-expanded="false">
              <Link href="/contact-creative"><a>Contact</a></Link>
            </span>
            </li>

          </ul>
          <div className="social">
            <ul className="rest">
              <li>
                <a href="#0"><i className="fab fa-facebook-f"></i></a>
                <a href="#0"><i className="fab fa-twitter"></i></a>
                <a href="#0"><i className="fab fa-dribbble"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;