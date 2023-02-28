import './Profile.css'
import ava from '../../img/elon.jpg'
import avamin from '../../img/elon_mini.jpg'


function Profile() {
    return (
      <div className="profile">
        <div className="me">
          <img src={ava} alt="profile-photo" />
          <p>Elon Musk</p>
        </div>
        <div className="posts">
          <input type="text" placeholder='Enter The Post'/>
          <button>Add Post</button>
          <div className="post">
            <img src={avamin} alt="mini-profile-photo" />
            <span>Elon Musk</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum recusandae labore fugit quasi. Culpa sunt, exercitationem quia eum, voluptatibus mollitia vitae perferendis libero maiores tenetur veritatis quasi quam saepe?</p>
            <p>Helllo Helllo Helllo Helllo</p>
          </div>
        </div>
      </div>
      
    )
  }

export default Profile;