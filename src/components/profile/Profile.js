import './Profile.css'
import ava from '../../img/elon.jpg'

import Posts from './posts/Posts'


function Profile(props) {
  return (
    <div className="profile">
      <div className="me">
        <img src={ava} alt="profile-photo" />
        <p>{props.name}</p>
      </div>
      <Posts />
      {/* message={props.message} */}
    </div>

  )
}

export default Profile;