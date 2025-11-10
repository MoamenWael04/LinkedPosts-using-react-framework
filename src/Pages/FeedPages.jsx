import { Button } from '@heroui/react'
import React, { useEffect, useState } from 'react'
import PostCard from '../Components/PostCard'
import { getAllPostsApi } from '../Services/PostServices'
import LoadingScreen from '../Components/LoadingScreen'

export default function FeedPages() {
    const [posts, setPosts] = useState([])
    async function getAllPosts(){
      const response = await getAllPostsApi();
      setPosts(response.posts);
  }
useEffect(()=>{
  getAllPosts()
} , [])


  return <>

  <div className='w-4/6 mx-auto'>
  {posts.length == 0 ? <LoadingScreen/> : posts.map((post) => <PostCard  commentLimit={1} post={post} key={post.id}/>)}
  
  
  </div>

  </>
}
