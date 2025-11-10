import React from 'react'
import anonymos from '../../assets/photo-placeholder-man.jpg'

export default function PostHeader({photo , name , date}) {
  return <>
  <div className="flex items-center px-4 py-3">
      <img className="h-8 w-8 rounded-full" onError={(e)=>{e.target.src = anonymos}} src={photo}  alt ={name}/>
      <div className="ml-3 ">
        <span className="text-sm font-semibold antialiased block leading-tight">{name}</span>
        <span className=" text-xs block">{date ? date.split('.' , 1).join().replace('T' , ' ') : ''}</span>
      </div>
    </div>
    </>
}
