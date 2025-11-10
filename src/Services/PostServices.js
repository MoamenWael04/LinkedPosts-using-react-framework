import axios from "axios";

export async function getAllPostsApi(){
    try {
        const {data} = await axios.get('https://linked-posts.routemisr.com/posts', {
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