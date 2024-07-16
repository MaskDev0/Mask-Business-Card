/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
function Info() {
  return (
    <div className="info-container">
      <img src="  /me.jpg" alt="" className="info-img" />
      <h1>Wisdom Ojonugwa</h1>
      <h5>Full Stack Dev | Fx Newbie</h5>
      <div className="buttons">
        <button className="btn"><a href='mailto:maskdev0@gmail.com'><FontAwesomeIcon icon={faEnvelope} />  Email</a></button>
        <button className="btn blue"><a href="https://www.linkedin.com/in/wisdom-ojonugwa-a080772ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></button>
      </div>
    </div>
  )
}
export default Info