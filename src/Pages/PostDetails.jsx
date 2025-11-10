import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSinglePostApi } from '../Services/PostServices';
import PostCard from '../Components/PostCard';
import LoadingScreen from '../Components/LoadingScreen';

export default function PostDetails() {

  let {id} = useParams();
  const [post, setPost] = useState(null)

  async function getSinglePost(){
   const response = await getSinglePostApi(id);
   if(response.message){setPost(response.post)}
  }

  useEffect(() => {
    getSinglePost();
  }, [])
  

  return<>
    <div className='w-4/6 mx-auto'>
    {post ? <PostCard  commentLimit={post.comments.length} post={post}/> : <LoadingScreen/>}
    </div>
  
  
  
  
  </>

}
