import React from 'react'
import PostHeader from './card/PostHeader'

export default function Comments({comment}) {
  return <> <PostHeader
     photo={comment?.commentCreator.photo}
     name={comment?.commentCreator.name} 
     date={comment?.createdAt} />
    <p className='pl-12 pb-2 '>{comment?.content}</p>
    </>
}
