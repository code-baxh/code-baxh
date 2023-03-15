/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import getSiblings from '../../common/getSiblings'

const Navbar = ({ navbarRef, logoRef }) => {

  const handleDropdown = (e) => {
    getSiblings(e.target.parentElement).filter((item) => item.classList.contains("show")).map((item) => {
      item.classList.remove("show");
      if (item.childNodes[0]) item.childNodes[0].setAttribute("aria-expanded", false);
      if (item.childNodes[1]) item.childNodes[1].classList.remove("show");
    });

    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
  };

  const handleMobileDropdown = (e) => {
    document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
  };

  return (
    <nav className="navbar navbar-expand-lg" ref={navbarRef}>
        <div className="container">

            {/* Logo  */}
            <Link href="/home">
              <a className="logo">
                <img src="/images/logo.png" alt="logo" ref={logoRef} />
              </a>
            </Link>
            <h5 className="ml-1 mt-2 logo-text "><span>Code Baxh</span></h5>

            
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleMobileDropdown}
            >
              <span className="icon-bar">
                <i className="fas fa-bars"></i>
              </span>
            </button>

            {/* navbar links */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
               
                <li className="nav-item">
                  <Link href="/home">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about">
                    <a className="nav-link">About</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/careers">
                    <a className="nav-link">Careers</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact">
                    <a className="nav-link">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          
            
        </div>
    </nav>
  )
}

export default Navbar