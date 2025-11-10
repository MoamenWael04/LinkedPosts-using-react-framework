import React, { useState } from 'react'
import anonymos from '../assets/photo-placeholder-man.jpg'
import PostHeader from './card/PostHeader'
import PostBody from './card/PostBody'
import PostFooter from './card/PostFooter'
import Comments from './Comments'
import { Button, Input } from '@heroui/react'
import { createCommentApi } from '../Services/CommentServices'

export default function PostCard({post , commentLimit }) {
  const [commentContent, setCommentContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState(post.comments);



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
  <div className="bg-gray-600 p-4 flex items-center justify-center mb-0.5 ">
  <div className="bg-gray-500 text-gray-200  border border-gray-600 rounded-2xl shadow p-1  max-w-md w-full">   
    <PostHeader photo={post.user.photo} name={post.user.name} date={post.createdAt}/>
    <PostBody image={post.image} body={post.body}/>
    <form onSubmit={createComment}  className='flex gap-2 my-2'>
        <Input value={commentContent} onChange={(e)=>setCommentContent(e.target.value)} color="secondary" placeholder="Comment .."  />
        <Button isLoading={loading} type='submit' color='secondary' disabled = {commentContent.length < 2}>Add Comment</Button>

    </form>
    <PostFooter postid={post.id} commentsnum={comments.length}/>


  {comments.length > 0 && 
  comments.slice(0,commentLimit).map((comment)=> (
    <Comments key={comment._id} comment={comment}/>
  ))}
  </div>
</div>
</>
}
