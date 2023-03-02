import Post from './post/Post'

function Posts() {
    return (

        <div className="posts">
            <h2>My Posts</h2>
            <input type="text" placeholder='Enter The Post' />
            <button>Add Post</button>
            <Post message="Hi World"/>
            <Post message="Im Elon Musk"/>
            <Post message="Give me some bitcoin"/>
            <Post message="I will be happy"/>
            <Post />
            
        </div>
    )
}

export default Posts