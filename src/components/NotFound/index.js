// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme ? 'dark' : 'light'
      const imageUrl =
        'https://assets.ccbp.in/frontend/react-js/not-found-img.png'
      return (
        <div className={`not-found-bg-container-${theme}`}>
          <Navbar />
          <div className={`not-found-content-container-${theme}`}>
            <img className="not-found-image" alt="not found" src={imageUrl} />
            <h1 className={`not-found-heading-${theme}`}>Lost Your Way?</h1>
            <p className={`not-found-description-${theme}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
