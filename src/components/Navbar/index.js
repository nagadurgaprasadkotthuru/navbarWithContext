// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onToggleTheme = () => toggleTheme()
      const theme = isDarkTheme ? 'dark' : 'light'
      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const modeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      return (
        <nav className={`navbar-container-${theme}`}>
          <div className={`nav-items-container-${theme}`}>
            <img
              className="website-logo"
              alt="website logo"
              src={websiteLogoUrl}
            />
            <ul className="home-about-nav-items-container">
              <li className="list-item">
                <Link to="/" className="nav-link">
                  <p className={`nav-item-${theme}`}>Home</p>
                </Link>
              </li>
              <li className="list-item">
                <Link to="/about" className="nav-link">
                  <p className={`nav-item-${theme}`}>About</p>
                </Link>
              </li>
            </ul>
            <button
              data-testid="theme"
              className="button"
              type="button"
              onClick={onToggleTheme}
            >
              <img className="mode" alt="theme" src={modeImageUrl} />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
