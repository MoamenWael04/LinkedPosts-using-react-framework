import axios from "axios";

export async function getAllPostsApi(){
    try {
        const {data} = await axios.get('https://linked-posts.routemisr.com/posts', {
            headers: {
                token: localStorage.getItem('token')
            },params:{
                limit:15,
                sort:'-createdAt'
            }
        });
        return data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}


export async function getSinglePostApi(postid){
    try {
        const {data} = await axios.get('https://linked-posts.routemisr.com/posts/'+postid, {
            headers: {
                token: localStorage.getItem('token')
            },
        });
        return data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

export async function createPostApi(formdata){
    try {
        const {data} = await axios.post('https://linked-posts.routemisr.com/posts', formdata ,  {
            headers: {
                token: localStorage.getItem('token')
            },
        });
        return data;
    } catch (error) {
        console.error('Error fetching posts:', error);

    }
}




export async function getPostCommentsApi(postId){
    try {
        const {data} = await axios.get('https://linked-posts.routemisr.com/posts/'+postId+"/comments", {
            headers: {
                token: localStorage.getItem('token')
            },
        });

        return data;


    } catch (error) {
        console.error('Error fetching posts:', error);

    }
}

export async function deletePostApi(postId) {
  try {  
    let {data} = await axios.delete("https://linked-posts.routemisr.com/posts/"+ postId, {
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