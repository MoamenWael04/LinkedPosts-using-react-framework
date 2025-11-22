import React, { useContext, useState } from 'react'
import PostHeader from './card/PostHeader'
import { authContext } from '../assets/Context/AuthContext'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Input} from "@heroui/react";
import DropdownActions from './DropdownActions';
import { UpdateCommentApi } from '../Services/CommentServices';


export default function Comments({comment , postUserId , callBack}) {
  const {userData} = useContext(authContext)
  const [updatedValue, setUpdatedValue] = useState(comment.content);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  async function handleUpdate(e) {
    setIsLoading(true);
    e.preventDefault();
    const res =await UpdateCommentApi(comment._id, updatedValue);
    if (res.message === 'success') {
           await callBack();
           setIsUpdating(false);
        }
    setIsLoading(false);
  }
  
  return <>
   <div className="w-full flex items-center justify-between pe-1">
    <div>
      <PostHeader
     photo={comment?.commentCreator.photo}
     name={comment?.commentCreator.name} 
     date={comment?.createdAt} />
      <p className='pl-12 pb-2 '>{comment?.content}</p>
   

    </div>

   {
      userData._id === comment.commentCreator._id &&  userData._id ==postUserId &&
      <DropdownActions setIsUpdating={setIsUpdating} callBack = {callBack} commentId={comment._id}/>
    }

  </div>
      {isUpdating && 
      <form  onSubmit={handleUpdate}  className='flex gap-2 my-2'>
        <Input  color="primary" value={updatedValue} onChange={(e)=>setUpdatedValue(e.target.value)}  />
        <Button  type='submit' isLoading={isLoading} color='primary' variant='ghost'>Update</Button>
      </form>
    }

    </>
}
