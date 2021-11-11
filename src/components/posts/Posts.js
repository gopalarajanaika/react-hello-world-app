import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Posts.scss'

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = () => {
      axios.post("http://christkinginstitution.com/api/getPosts.php",{ "category": "courses", "parent": null, "displayLocation": "", "postParent": "no" })
        .then(res => setPosts(res?.data?.data))
        .catch((error) => console.log(error));
    }
    
    getPosts();
  }, [])
  return (
    <div className='posts-component'>  <h1>Posts</h1>
      {posts ? posts.map((post, index) => <div key={index}><Link to={`/posts/${post.url}`}>{post.id}. {post.title}</Link></div>) : <div>No Data...</div> }
    </div>
  )
}

export default Posts;