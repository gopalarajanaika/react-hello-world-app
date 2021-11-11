import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostsDetails = (props) => {
    const { url } = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
        const getPost = () => {
            axios.post("http://christkinginstitution.com/api/getPost.php", { "category": "courses", "parentUrl": url, "childUrl": "" })
                .then(res => setPost(res.data.data))
                .catch((error) => console.log(error))
        }
        getPost();
    }, [url])
    return (
        <>
            <h1>{post.title}</h1>
            <img src={`http://christkinginstitution.com/assets/images/posts/${post.img}`} alt="" />
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </>
    )
}

export default PostsDetails;