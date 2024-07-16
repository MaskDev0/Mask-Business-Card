import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faSquareInstagram, faLinkedin ,faTwitter} from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <div className="footer-container">
      <a href="https://github.com/MaskDev0"><FontAwesomeIcon icon={faGithub} /></a>
      <a href="https://www.instagram.com/mask_develops/"> <FontAwesomeIcon icon={faSquareInstagram} /></a>
      <a href="https://www.linkedin.com/in/wisdom-ojonugwa-a080772ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href="https://x.com/MaskDevelops"><FontAwesomeIcon icon={faTwitter} /></a>
    </div>
  )
}

export default Footer