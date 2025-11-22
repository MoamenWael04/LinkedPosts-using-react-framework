import axios from "axios";

export async function createCommentApi(commentcontent, postId) {
  try {  
    let {data} = await axios.post("https://linked-posts.routemisr.com/comments", {
      content: commentcontent,
      post: postId
    }, {
      headers: {
        token: localStorage.getItem('token')
      }
    });
    return data;
  } catch (err) {
    console.log(err);
    
  }
}

export async function deleteCommentApi(commentid) {
  try {  
    let {data} = await axios.delete("https://linked-posts.routemisr.com/comments/"+ commentid, {
      headers: {
        token: localStorage.getItem('token')
      }
    });
    return data;
  } catch (err) {
    console.error('deleteCommentApi error:', err);
    throw err; 
  }
}

export async function UpdateCommentApi(commentid ,content) {
  try {  
    let {data} = await axios.put("https://linked-posts.routemisr.com/comments/"+ commentid,{content}, {
      headers: {
        token: localStorage.getItem('token')
      }
    });
    return data;
  } catch (err) {
    console.error('deleteCommentApi error:', err);
    throw err; 
  }
}