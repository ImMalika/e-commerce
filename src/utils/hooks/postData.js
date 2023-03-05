import { instance } from "../instance";
import { useMutation } from "@tanstack/react-query";

export const UsePostData = (url)=>{
    return useMutation((data)=>instance.post(url, data));
};






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
