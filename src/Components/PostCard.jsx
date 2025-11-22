import React, { useContext, useState } from 'react'
import anonymos from '../assets/photo-placeholder-man.jpg'
import PostHeader from './card/PostHeader'
import PostBody from './card/PostBody'
import PostFooter from './card/PostFooter'
import Comments from './Comments'
import { Input } from '@heroui/react'
import { createCommentApi } from '../Services/CommentServices'
import { authContext } from '../assets/Context/AuthContext'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@heroui/react";
import DropdownActions from './DropdownActions'
import { getPostCommentsApi } from '../Services/PostServices'

export default function PostCard({post , commentLimit }) {
  const [commentContent, setCommentContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState(post.comments);
  const {userData} = useContext(authContext)

  async function getPostComments ()
  {
    const res = await getPostCommentsApi(post.id);
    setComments(res.comments)
  }



  async function createComment(e){
    e.preventDefault();

      setLoading(true);
      let response = await createCommentApi(commentContent, post.id);
      if (response.message === 'success') {
        setCommentContent(''); 
        setComments(response.comments)
        // await callback(); 
      }
      setLoading(false);

  }





  return <>
  <div className="bg-gradient-to-l from-blue-400 to-purple-400  p-4 flex items-center justify-center mb-0.5 ">
  <div className="bg-gray-300 text-gray-700   rounded-2xl shadow p-1  max-w-md w-full">   
    <div className="w-full flex items-center justify-between pe-1">
    <PostHeader photo={post.user.photo} name={post.user.name} date={post.createdAt}/>
    
    {
      userData._id === post.user._id && 

      <DropdownActions/>

    }

    </div>

    <PostBody image={post.image} body={post.body}/>
    <form onSubmit={createComment}  className='flex gap-2 my-2'>
        <Input value={commentContent} onChange={(e)=>setCommentContent(e.target.value)} color="primary" placeholder="Comment .."  />
        <Button isLoading={loading} type='submit' color='primary' variant='ghost' disabled = {commentContent.length < 2}>Add Comment</Button>

    </form>
    <PostFooter postid={post.id} commentsnum={comments.length}/>


  {comments.length > 0 && 
  comments.slice(0,commentLimit).map((comment)=> (
    <Comments key={comment._id} postUserId={post.user._id} callBack={getPostComments} comment={comment}/>
  ))}
  </div>
</div>
</>
}
