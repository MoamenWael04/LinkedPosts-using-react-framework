import React, { useState } from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@heroui/react";
import { deleteCommentApi } from '../Services/CommentServices';


export default function DropdownActions({commentId , callBack , setIsUpdating , deletePost}) {
  const [isDeleting, setIsDeleting] = useState(false);

  // Simple delete handler: confirm, then call post-delete if provided,
  // otherwise delete the comment and call callBack() on success.
  async function handleDelete() {
    if (isDeleting) return;

    setIsDeleting(true);
   
      if (typeof deletePost === 'function') {
        // delegate post deletion to parent; await if it returns a promise
        await deletePost();
        
      }

      // delete comment
      else{
        const res = await deleteCommentApi(commentId);
      if (res.message === 'success' ) {
         await callBack();
      } 
      }
    
  }




  return       <>
      <Dropdown>
      <DropdownTrigger>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer outline-0 hover:text-black">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new" onClick={()=>{setIsUpdating(true) }}>Edit</DropdownItem>
        <DropdownItem key="delete" onClick={()=> { handleDelete ()}} className="text-danger" color="danger">
          Delete 
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
      
      </>
}
