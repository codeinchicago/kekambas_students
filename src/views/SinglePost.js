import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function SinglePost(props) {
    const [post, setPost] = useState({});
    
    let params = useParams();

    useEffect(() => {
        fetch(`https://kekambas-blog.herokuapp.com/blog/posts/${params.postId}`)
            .then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    console.warn('There was an issue.')
                }
            })
            .then(data => {
                console.log(data)
                setPost(data)
            })
    }, [params.postId])
    
    return (
        <div>SinglePost {params.postId}</div>
    )
}
