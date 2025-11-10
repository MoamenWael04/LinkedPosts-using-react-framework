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