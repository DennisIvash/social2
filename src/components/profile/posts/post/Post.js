import avamin from '../../../../img/elon_mini.jpg'

function Post(props) {
    return (
        <div className="post">
            <img src={avamin} alt="mini-profile-photo" />
            <span>Elon Musk</span>
            <p>{props.message}</p>
            
        </div>
    )
}

export default Post