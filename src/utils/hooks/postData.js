import { instance } from "../instance";
import { useMutation } from "@tanstack/react-query";

export const UsePostData = (url)=>{
    return useMutation((data)=>instance.post(url, data));
};
// const UsePost=(url)=>{
//     return axios.post(`http://3.19.30.204/api#/Message`),message
// }

// export const useAdd=()=>{
//     return useMutation(addData)
// }




// In another page, we can use this custom hook like that :) ---------------



// const post = UsePostData('/posts');
// const postDataFn =()=> {
    // post.mutate(// {name : "Name", lorem: "nimadr"},
// {
//     onSuccuss: (data) => console.log(data, "data"),
//     onError: (error)=> console.log(error, 'error');
// })
// }


// <button onClick={()=>postDataFn()}>delete</button>
