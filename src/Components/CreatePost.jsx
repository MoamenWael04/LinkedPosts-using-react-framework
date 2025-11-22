import { Button } from "@heroui/react";
import React from "react";
// import anonymos from "../assets/photo-placeholder-man.jpg"
import { useState } from "react";
import { createPostApi } from "../Services/PostServices";

export default function CreatePost({callback}) {


    const [postBody, setPostBody] = useState('');
    const [image, setImage] = useState (null);
    const [imageUrl, setImageUrl] = useState()
    const [loading, setLoading] = useState(false)


    function handleImage(e){
        // console.log("hello");
        // console.log(e.target.files[0]);
        setImage(e.target.files[0])
        setImageUrl(URL.createObjectURL(e.target.files[0]))
        e.target.value = ''; 
    }

   async function createPost(e){
        setLoading(true);
        e.preventDefault()
        const formData = new FormData();
        if (postBody) {
             formData.append('body' , postBody)
        }
        if (image) {
            formData.append('image' , image)
        }
        const response = await createPostApi(formData);
        if(response.message){
           await callback()
            setImage(null)
            setPostBody('')
            setImageUrl('')
        }
        setLoading(false)
    }






  return (
    <>
      <div className="bg-gradient-to-l from-blue-400 to-purple-400 p-4 flex items-center justify-center mb-0.5 ">
        <div className="bg-gray-300 text-gray-700 rounded-2xl shadow p-1  max-w-md w-full">
            <form onSubmit={createPost}>
                <textarea value={postBody} onChange={(e)=>setPostBody(e.target.value)} placeholder="create post , what is on your mind" className="border w-full p-6 rounded-2xl resize-none placeholder-gray-500"></textarea>
                {imageUrl && <div className="p-2 relative">
                    <img src={imageUrl} className="w-full" alt="..." />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={()=> setImageUrl('')} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer absolute top-4 end-4 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                </div>}
                <div className="flex justify-between items-center">
                    <label className="cursor-pointer hover:text-purple-500 flex items-center gap-1">
                        <input type="file" className="hidden" onChange={handleImage}/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ms-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </label>
                <Button color="primary" variant="ghost" isLoading={loading} type="submit">Post</Button>
                </div>

            </form>
            
        </div>
      </div>
    </>
  );
}
