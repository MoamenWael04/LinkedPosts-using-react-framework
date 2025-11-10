import React from 'react'

export default function PostBody({image , body}) {
  return <>
        {image && <img className='w-full object-cover h-75' src={image} />}
        {body && <p className='p-2'>{body}</p>}
      </>
      
    
}
